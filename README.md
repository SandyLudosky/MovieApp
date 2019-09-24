# MovieApp

**run**

`yarn install`

**for iOS - to link missing dependencies**

`cd ios`<br/>
`pod install`<br/>
`cd ..`<br/>

**run (optional)**<br/>
`react-native link react-native-reanimated`<br/>
`react-native link react-native-gesture-handler`<br/>
`react-native link react-native-screens`<br/>
`react-native link react-native-vector-icons`<br/><br/>

![Demo](app/assets/demo.gif)<br/><br/>

**for Android** 
in case you run into `keystore debug` issue, follow instructions at (keystore debug )(https://github.com/facebook/react-native/issues/25629)<br/><br/>
in `android/app/` directory<br/><br/>
run :<br/><br/>
`keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`


### iOS
![HomePage](app/assets/homepage-ios.png)
![MoviePage](app/assets/moviescene-ios.png)<br/><br/>

### Android
![HomePage](app/assets/homepage-android.png)
![MoviePage](app/assets/moviescene-android.png)
