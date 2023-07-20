import { Dimensions, PixelRatio } from 'react-native';
// import DeviceInfo from 'react-native-device-info';
// import { scale } from 'react-native-size-matters';
// import Global from '../screens/Global';


const { width, height } = Dimensions.get('window');

const widthToDp = number => {
    let givenWidth = typeof number == 'number' ? number : parseFloat(number);
    //console.log(number , PixelRatio.roundToNearestPixel((width * givenWidth) / 100))
    return PixelRatio.roundToNearestPixel((width * givenWidth) / 100) > 1
        ? Math.round(PixelRatio.roundToNearestPixel((width * givenWidth) / 100), 0)
        : 1;
};

const heightToDp = number => {
    let givenHeight = typeof number == 'number' ? number : parseFloat(number);
    return PixelRatio.roundToNearestPixel((height * givenHeight) / 100) > 1
        ? Math.round(
            PixelRatio.roundToNearestPixel((height * givenHeight) / 100),
            0,
        )
        : 1;
    //return Math.round(PixelRatio.roundToNearestPixel((height * givenHeight) / 100), 0);
};

// const responsiveFont = number => {
//     let data = Global.fontScale > 1 ? number / Global.fontScale : number
//     return data
// }

// const heightToDpScale = number => {
//     let givenHeight = typeof number == 'number' ? number : parseFloat(number);

//     console.log(Global.fontScale, number, 'heightToDpScale', givenHeight, PixelRatio.roundToNearestPixel((height * givenHeight) / (100 * (Global.fontScale > 1 ? Global.fontScale : 1))))

//     return PixelRatio.roundToNearestPixel((height * givenHeight) / (100 * (Global.fontScale > 1 ? Global.fontScale : 1)))
//     //return Math.round(PixelRatio.roundToNearestPixel((height * givenHeight) / 100), 0);
// };


export {
    widthToDp,
    heightToDp,
    // heightToDpScale,
    // responsiveFont
};
