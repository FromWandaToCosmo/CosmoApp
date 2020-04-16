import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import './styles.css'

const Video = () => {
    const [videoClass, setVideoClass] = useState('video__no_display')

    const onLoadedData = () => {
        setVideoClass('video___display')
    }

    return (
        <div className='video'>
            <Typography gutterBottom variant="h5" component="h2">
                Atenção, cosmo:
            </Typography>
            <iframe 
                className={videoClass}
                title='video'
                src='https://drive.google.com/file/d/1fUwt48VAVFllcM0aTKfIEjmOybCE_s-3/preview' 
                onLoad={onLoadedData}
                allowFullScreen
            />
            <Typography variant="body2" color="textSecondary" component="p">
                Ps.: Foca na música da One Direction
            </Typography>
        </div>
    )
}

export default Video