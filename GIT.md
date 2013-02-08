# How to clone this repo to your computer

I thought Macs come with Git pre-installed but that seems to be the case only for recent models.
You can check if your system have Git by opening Terminal and type in:

    which git

It should print something back if Git is installed. If nothing happens, try downloading and installing git at [http://git-scm.com/downloads](http://git-scm.com/downloads).
After installing, make sure to quit and restart your Terminal. Then try `which git` again. It should be there.

**The following assumes you already have git installed**

Open up Terminal and enter:

    git clone git://github.com/yyx990803/creative-html5.git

This should create a folder named `creative-html5` inside your home folder (The folder with your username in Finder). Now do:

    cd creative-html5

You should see the prompt now has `creative-html5` in it, which means you are in that folder now. Now you can do

    git pull

You should see it say that it's already up-to-date. That means things are working correctly.
Next time I pushed some updates to the repo, you just need to do `git pull` again. However, make sure you are doing that inside the `creative-html5` folder! You can move the folder to somewhere else or rename it ( given that you know how to go to different folders with the `cd` command ), but don't put your own files in it or modify it.

If you run into problems, you can open an issue on GitHub.