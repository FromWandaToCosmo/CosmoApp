import React from 'react'
import VideoSVG from '../../images/video.svg'
import PhotoSVG from '../../images/photo.svg'
import HomeSVG from '../../images/home.svg'
import AdaptableMenu from '../../components/adaptable_menu'
import PathConstants from '../../constants/PathConstants'
import PrivateRoute from '../../components/private_route'
import { useLocation, Switch } from 'react-router';
import TopBar from '../../components/top_bar'
import HistoryService from '../../services/HistoryService'
import Home from './home'
import Photo from './photo'
import Video from './video'


const Main = () : JSX.Element => {

    const location = useLocation()

    const goToHome = (): void => {
        HistoryService.push(PathConstants.HOME)
    }

    const goToPhotos = (): void => {
        HistoryService.push(PathConstants.PHOTOS)
    }

    const goToVideo = (): void => {
        HistoryService.push(PathConstants.VIDEO)
    }

    const items = [
        {
            'image': HomeSVG,
            'name': 'Textão',
            'onClick': goToHome,
        },
        {
            'image': PhotoSVG,
            'name': 'Fotos',
            'onClick': goToPhotos,
        },
        {
            'image': VideoSVG,
            'name': 'Vídeo',
            'onClick': goToVideo,
        }
    ]

    const getSelectedItem = (): number => {
        if (location.pathname === PathConstants.PHOTOS) {
            return 1
        } else if (location.pathname === PathConstants.VIDEO) {
            return 2
        } else {
            return 0
        }
    }
    

    /** Componente interno do exibido com o menu definido pelo path */
    const renderMainComponent = (): JSX.Element => {
        return(
            <Switch>
                <PrivateRoute exact path={PathConstants.HOME} component={Home} />
                <PrivateRoute exact path={PathConstants.PHOTOS} component={Photo} />
                <PrivateRoute exact path={PathConstants.VIDEO} component={Video} />
            </Switch>
        )
    }

    const renderTopBarComponent = (): JSX.Element => (
        <TopBar />
    )

    return (
        <AdaptableMenu 
            selectedItem={getSelectedItem()} 
            items={items} 
            component={renderMainComponent()} 
            topBarComponent={renderTopBarComponent()}
        />
    )
}

export default Main