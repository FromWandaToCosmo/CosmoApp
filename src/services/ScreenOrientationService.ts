import ScreenOrientationConstants from "../constants/ScreenOrientationConstants"

class ScreenOrientarionService {

    setOnScreenOrientationChangeEvent = (callback: () => void) => {
        window.addEventListener('orientationchange', () => {
            callback()
        })
    }

    isLandscape = () => {
        const currentOrientation = window.screen.orientation.type

        if (currentOrientation === ScreenOrientationConstants.LANDSCAPE ||
            currentOrientation === ScreenOrientationConstants.LANDSCAPE_UPSIDE_DOWN ||
            currentOrientation === ScreenOrientationConstants.NOT_SUPPORTED) {
            return true
        } else {
            return false
        }
    }

    isPortrait = () => {
        const currentOrientation = window.screen.orientation.type

        if (currentOrientation === ScreenOrientationConstants.PORTRAIT ||
            currentOrientation === ScreenOrientationConstants.PORTRAIT_UPSIDE_DOWN) {
            return true
        } else {
            return false
        }
    }
}

export default new ScreenOrientarionService()