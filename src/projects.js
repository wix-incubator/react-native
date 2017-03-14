import navigationPoster from './img/react-native-navigation-poster.jpg'
import interactablePoster from './img/react-native-interactable-poster.jpg'
import cameraPoster from './img/react-native-camera.jpg'
import androidNavigationVideo from './videos/react-navigation-android.mp4'
import iphoneNavigationVideo from './videos/react-navigation-iphone.mp4'
import detoxVideo from './videos/detox.mp4'
import interactableIOSVideo from './videos/react-iphone-interactable.mp4'
import interactableAndroidVideo from './videos/react-interactable-android.mp4'
import iphoneMock from './img/iphone-mock.png'

const projects = {
    "projectList": [ "react-native-interactable", "react-native-navigation", "Detox", "react-native-camera-kit"],
    "react-native-interactable": {
        "description" : "Declarative API for handling fluid user interactions with views at 60 FPS in React Native",
        "title": "React Native Interactable",
        "github": "https://github.com/wix/react-native-interactable",
        "AndroidVideoUrl": interactableAndroidVideo,
        "IOSVideoUrl": interactableIOSVideo,
        "IOSDemoAppLink": "https://itunes.apple.com/us/app/react-native-interactions/id1209875831?mt=8",
        "image": "",
        "poster": interactablePoster,
        "size" : "normal",
        "AndroidDemoAppLink": "https://play.google.com/store/apps/details?id=com.wix.interactions&hl=en"
    },
    "react-native-navigation": {
        "description": "App-wide support for 100% native navigation with an easy cross-platform interface.",
        "title": "React Native Navigation",
        "github": "https://github.com/wix/react-native-navigation",
        "AndroidVideoUrl": androidNavigationVideo,
        "IOSVideoUrl": iphoneNavigationVideo,
        "IOSDemoAppLink": "",
        "image": "",
        "poster": navigationPoster,
        "size" : "normal",
        "AndroidDemoAppLink": ""
    },
    "react-native-notifications": {
        "description" : "Handle all the aspects of push notifications for your app, including remote and local notifications, interactive notifications, silent notifications, and more.",
        "title": "React Native Notifications",
        "github": "https://github.com/wix/react-native-notifications",
        "AndroidVideoUrl": "",
        "IOSVideoUrl": "",
        "IOSDemoAppLink": "",
        "image": navigationPoster,
        "poster": "",
        "size" : "normal",
        "AndroidDemoAppLink": ""
    },
    "react-native-camera-kit": {
        "title": "React Native Camera Kit",
        "description": "Advanced native camera control with pre-defined aspect ratio, crop and more",
        "github": "https://github.com/wix/react-native-camera-kit",
        "AndroidVideoUrl": "",
        "IOSVideoUrl": "s",
        "IOSDemoAppLink": "",
        "image": "s",
        "poster": cameraPoster,
        "size" : "normal",
        "AndroidDemoAppLink": ""
    },
    "Detox": {
        "title": "Detox",
        "description": "Graybox E2E tests and automation library for mobile",
        "github": "https://github.com/wix/detox",
        "AndroidVideoUrl": "",
        "IOSVideoUrl": "as",
        "IOSDemoAppLink": "",
        "MacVideoUrl": detoxVideo,
        "image": "",
        "size" : "big",
        "AndroidDemoAppLink": ""
    }
}
export default projects