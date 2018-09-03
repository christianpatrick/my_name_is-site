---
path: "/integrating-the-keychain-with-an-ios-arc-app-in-xcode"
date: "2017-01-14"
title: "Integrating the Keychain with an iOS ARC App in Xcode"
tags: ["keychain", "ios arc app", "javascript save credentials"]
---

For a recent iOS app I was working on, there was a need to integrate the Keychain to save the login credentials locally.

After a bit of searching and fumbling through the internet, I found a great library: SFHFKeychainUtils, originally created by Buzz Andersen. I was so excited knowing I wouldn’t have to learn yet another entire framework by hand, until I noticed that none of the tutorials I was following actually worked!

So here’s my take on integrating the SFHFKeychainUtils. For this demo, I will go through using it with simply Javascript in case you plan to use it with UIWebView.

First, you’ll want to download the SFHFKeychainUtils and import them into your Xcode project. The version I used that is ARC-Supported is here: [https://github.com/stoneros/SFHFKeychainUtils](https://github.com/stoneros/SFHFKeychainUtils)

Then you can add the Security.framework to your project. Just go to your Target App and choose Build Phases. Under Link Binary with Libraries, add Security.framework and make sure it is Required.

Finally, in YourViewController.m, add the dependancies to these libraries:

```objective-c
#import &lt;Security/Security.h&gt;
#import "SFHFKeychainUtils.h"
```

Now for the good stuff! Let’s get that keychain working!

Usually, you are just going to be looking for a form submission to grab the credentials, so here’s an easy way of doing that.

```objective-c
- (bool)webView:(UIWebView *)webView shouldStartLoadWithRequest:(NSURLRequest *)request navigationType:(UIWebViewNavigationType)navigationType; {

	//save form data
	if(navigationType == UIWebViewNavigationTypeFormSubmitted) {
		NSURL *requestURL = [self.webView.request URL];
		
		if ([requestURL.path isEqualToString:@"YOURINTERNALSUBMISSIONURL"]) {
			//grab the data from the page
			NSString *username = [self.webView stringByEvaluatingJavaScriptFromString: @"document.getElementById('username').value"];
			NSString *password = [self.webView stringByEvaluatingJavaScriptFromString: @"document.getElementById('password').value"];
			//store values locally
			[[NSUserDefaults standardUserDefaults] setObject:username forKey:@"username"];
			[SFHFKeychainUtils storeUsername:username andPassword:password forServiceName:@"YOURAPPNAMESPACE" updateExisting:YES error:nil];
		}
		else {
			return YES;
		}
	}
	return YES;
}
```

At this point, anytime your app hits the SUBMISSIONURL, it’s going to save the two NSString variables for username and password into the keychain underneath your app’s name. What’s really cool is those NSStrings are pulling in via Javascript from a text input. You’re welcome ;)

Next, in your webViewDidFinishLoad section we need to add some listeners to automatically fill in the saved keychain for the next time, your user needs to login.

```objective-c
- (void)webViewDidFinishLoad:(UIWebView *)webView{

	//verify view is on the login page of the site (simplified)
	NSURL *requestURL = [self.webView.request URL];
	if ([requestURL.path isEqualToString:@"YOURINTERNALSUBMISSIONURL"]) {

		//check for stored login credentials
		NSString *username = [[NSUserDefaults standardUserDefaults] objectForKey:@"username"];

		if (username.length != 0 ) {

		//create js strings
		NSString *loadUsernameJS = [NSString stringWithFormat:@"document.getElementById('username').value ='%@'", username];
		NSString *password = [SFHFKeychainUtils getPasswordForUsername: username andServiceName:@"YOURAPPNAMESPACE" error:nil];
		if (password.length == 0 ) password = @"";
		NSString *loadPasswordJS = [NSString stringWithFormat:@"document.getElementById('password').value ='%@'", password];

		//autofill the form
		[self.webView stringByEvaluatingJavaScriptFromString: loadUsernameJS];
		[self.webView stringByEvaluatingJavaScriptFromString: loadPasswordJS];

		}
	}   
}
```

Now, whenever the app lands on the login page, it will now check if values are stored in the keychain and then pre-fill them using Javascript. Of course, you can take this a step further and auto submit the form and such.

This just give you the overall basics, and if it helps you or if you have any questions, just shoot me a comment below!
