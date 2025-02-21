// app.config.js
import 'dotenv/config'


export default {
  expo: {
    name: "Games4free",
    slug: "games4free_mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "cover"
    },
    
    plugins: [
      [
        'expo-build-properties',
        {
          android: {
            usesCleartextTraffic: true
          },
        },
      ],
    ],
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#ffffff"
      },
      targetSdkVersion: 34,
      package: "com.altamiro.games4free_mobile",
      versionCode:2
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "cc86165d-b831-467e-ad49-1f5f66f20502"
      },
      apiUrl: process.env.API_URL,
      apiKey: process.env.API_KEY
    },
    runtimeVersion: {
      policy: "appVersion"
    },
    updates: {
      url: "https://u.expo.dev/28a9e02d-152e-40c3-864f-4df49d23a9cc"
    },
    owner: "altamiro"
  }
};
