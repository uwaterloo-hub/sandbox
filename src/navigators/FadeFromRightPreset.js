import { Animated, Easing, Platform } from "react-native";
import {
    ScaleFromCenterAndroid,
    SlideFromRightIOS
} from "@react-navigation/stack/src/TransitionConfigs/TransitionPresets";




function conditional(condition, main, fallback) {

    return Animated.add(
        Animated.multiply(condition, main),
        Animated.multiply(
            condition.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0],
            }),
            fallback
        )
    );

}

function forFadeFromRightAndroid({ current, inverted, layouts: { screen }, closing }) {

    const translateX = Animated.multiply(
        current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [screen.width * 0.08, 0],
            extrapolate: 'clamp',
        }),
        inverted
    );

    const opacity = conditional(
        closing,
        current.progress,
        current.progress.interpolate({
            inputRange: [0, 0.5, 0.9, 1],
            outputRange: [0, 0.25, 0.7, 1],
            extrapolate: 'clamp',
        })
    );

    return {
        cardStyle: {
            opacity,
            transform: [{ translateX }],
        },
    };

}

const FadeInFromBottomAndroidSpec = {
    animation: "timing",
    config: {
        duration: 350,
        easing: Easing.out(Easing.poly(5)),
    },
};

const FadeOutToBottomAndroidSpec = {
    animation: "timing",
    config: {
        duration: 150,
        easing: Easing.in(Easing.linear),
    },
};

const FadeFromRightAndroid = {
    gestureDirection: "horizontal",
    transitionSpec: {
        open: FadeInFromBottomAndroidSpec,
        close: FadeOutToBottomAndroidSpec
    },
    cardStyleInterpolator: forFadeFromRightAndroid,
    headerStyleInterpolator: forFadeFromRightAndroid
}


export const FadeFromRight = Platform.select({
    ios: SlideFromRightIOS,
    android: FadeFromRightAndroid,
    default: ScaleFromCenterAndroid
})