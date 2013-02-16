# So you need to get this puppy in.

Here's a quick how to. Do it exactly as seen. Do not try to write by hand, just copy to terminal and press enter.

    I am expecting anything you see in those boxed to be copied directly into terminal.

###Your operating system

####UNIX

#####Mac
I am assuming you are using either **Mountain Lion** or **Lion**. You can check by Apple icon (top left) > About this mac. ML is 10.8, Lion, 10.7, Snow Leopard 10.6. If you're using Snow Leopard, buy Mountain Lion from the Mac App Store ($20), it'll take care of itself. 

#####Linux

You probably don't need my help, but just in case:

	sudo apt-get install git

####Windows

The least insane way to get git working on a Windows PC is installing Linux on it. You can do that by either doing a proper virtual machine setup, or by installing apps (including git for Windows, unsupported) that do it for you. [Here's the official github app](http://arstechnica.com/information-technology/2012/05/hands-on-github-for-windows-takes-the-pain-out-of-using-git/), but it's only for Windows 8 and looks a little bit crippled. It's essentially running a linux kernel on VM to give you bash, git and else.

[There's a better way, though.](http://www.ubuntu.com/download/desktop/windows-installer) 

###Here's the stuff you need to do

1) Install this: [for Mountain Lion](https://dl.dropbox.com/u/5815330/xcode46cltools_10_86938131a-ml.dmg) and [for Lion](https://dl.dropbox.com/u/5815330/xcode46cltools_10_76938132a-lion.dmg).

2) Fire up the terminal (Command + Space, write terminal, enter)

3) Paste + Enter:

	ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"

4) Paste + Enter:

	brew doctor
	
5) Paste + Enter:

	brew install git
	
6) That's it!

###Want to also clone the repo?

7) Paste + Enter:
	
	cd ~/Desktop		

8) Paste + Enter:

	git clone https://github.com/yyx990803/creative-html5.git
	
9) If asks for username / password, enter, if not, register at github, then enter.

######You should now have a directory called *creative-html5* in your desktop.

Good luck!