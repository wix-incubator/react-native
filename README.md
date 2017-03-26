# Wix Mobile Open Source Site (WIP - Stay Tuned)

## About

This repository hosts the Wix mobile open source website. 
<br>
The production code is hosted in the gh-pages branch.
<br>
The source files are hosted in the master branch.

## Usage

### if you wish to add your project: <br>

1) create an "openSourceIsAwesome.json" file in your repo. It should have the following properties:
<br>
```
   {
    "size": "big" or "normal", (required: use "normal" unless you want a video to be displayed on a Mac),
    "name": "your repository name" (required),    
    "description": "App-wide support for 100% native navigation with an easy cross-platform interface." (required),    
    "title": "React Native Navigation" (required),    
    "github": "https://github.com/wix/react-native-navigation" (required),    
    "AndroidVideoUrl": "https://yourandroidvideourl.com",(optional: if you want to add a video that was filmed on an android device),    
    "IOSVideoUrl": "https://youriphonevideourl.com",(optional: if you want to add a video that was filmed on iphone),    
    "IOSDemoAppLink": "link to your demo app on the app store", (optional: add if you have a demoapp on the app store),    
    "AndroidDemoAppLink": "link to your demo app on the play store" (optional: add if you have a demoapp on the play store),    
    "image": "link to image" (required if you have no videos to display),
    "poster": "link to an image poster" (optional: a poster that will be displayed before the video plays)  
    }
```
<br>

2) Contact the Mobile Core team so we can add your project to the whitelist.
<br>
3) Thats it! Any change you make to your json file will update the website automatically. 
