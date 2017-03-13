import navigationPoster from './img/react-native-navigation-poster.jpg'
import interactablePoster from './img/react-native-interactable-poster.jpg'
import cameraPoster from './img/react-native-camera.jpg'
import androidNavigationVideo from './videos/react-navigation-android.mp4'
import iphoneNavigationVideo from './videos/react-navigation-iphone.mp4'
import detoxVideo from './videos/detox.mp4'
import interactableIOSVideo from './videos/react-iphone-interactable.mp4'
import interactableAndroidVideo from './videos/react-interactable-android.mp4'

const projects = {
    "projectList": [ "project5", "project1", "project4", "project3"],
    "project5": {
        "description" : "Declarative API for handling fluid user interactions with views at 60 FPS in React Native",
        "title": "React Native Interactable",
        "github": "https://github.com/wix/react-native-interactable",
        "AndroidVideoUrl": interactableAndroidVideo,
        "IOSVideoUrl": interactableIOSVideo,
        "IOSDemoAppLink": "https://itunes.apple.com/us/app/react-native-interactions/id1209875831?mt=8",
        "Image": "",
        "poster": interactablePoster,
        "size" : "normal",
        "AndroidDemoAppLink": "https://play.google.com/store/apps/details?id=com.wix.interactions&hl=en"
    },
    "project1": {
        "description": "App-wide support for 100% native navigation with an easy cross-platform interface.",
        "title": "React Native Navigation",
        "github": "https://github.com/wix/react-native-navigation",
        "AndroidVideoUrl": androidNavigationVideo,
        "IOSVideoUrl": iphoneNavigationVideo,
        "IOSDemoAppLink": "",
        "Image": "",
        "poster": navigationPoster,
        "size" : "normal",
        "AndroidDemoAppLink": ""
    },
    "project2": {
        "description" : "Handle all the aspects of push notifications for your app, including remote and local notifications, interactive notifications, silent notifications, and more.",
        "title": "React Native Notifications",
        "github": "https://github.com/wix/react-native-notifications",
        "AndroidVideoUrl": "",
        "IOSVideoUrl": "https://wix.github.io/react-native//assets/themes/bootstrap-3/components/images/declerative/oneapp-navigation-movie.mp4",
        "IOSDemoAppLink": "",
        "Image": "",
        "size" : "normal",
        "AndroidDemoAppLink": ""
    },
    "project3": {
        "title": "React Native Camera Kit",
        "description": "Advanced native camera control with pre-defined aspect ratio, crop and more",
        "github": "https://github.com/wix/react-native-camera-kit",
        "AndroidVideoUrl": "",
        "IOSVideoUrl": "s",
        "IOSDemoAppLink": "",
        "Image": "s",
        "poster": cameraPoster,
        "size" : "normal",
        "AndroidDemoAppLink": ""
    },
    "project4": {
        "title": "Detox",
        "description": "Graybox E2E tests and automation library for mobile",
        "github": "https://github.com/wix/detox",
        "AndroidVideoUrl": "",
        "IOSVideoUrl": "as",
        "IOSDemoAppLink": "",
        "MacVideoUrl": detoxVideo,
        "Image": "",
        "size" : "big",
        "AndroidDemoAppLink": ""
    }
}
export default projects