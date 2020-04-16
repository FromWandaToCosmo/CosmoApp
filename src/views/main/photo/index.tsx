import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Photo1 from '../../../images/photos/1.jpeg'
import Photo2 from '../../../images/photos/2.jpeg'
import Photo3 from '../../../images/photos/3.jpeg'
import Photo4 from '../../../images/photos/4.jpeg'
import Photo5 from '../../../images/photos/5.jpeg'
import Photo6 from '../../../images/photos/6.jpeg'
import Photo7 from '../../../images/photos/7.jpeg'
import Photo8 from '../../../images/photos/8.jpeg'
import Photo9 from '../../../images/photos/9.jpeg'
import Photo10 from '../../../images/photos/10.jpeg'
import './styles.css'

const Photo = () => {

    const photos = [
        {
            image: Photo1,
            text: 'Nunca vou esquecer da bancadinha só nossa e de ficar berrando no show kkkkkkkk', 
        },
        {
            image: Photo2,
            text: 'Primeira feira vegana em poa, eu amo demais poder dividir isso contigo', 
        },
        {
            image: Photo3,
            text: 'Meu aniversáriiiiio, primeira vez que alguém me faz uma comida vegetariana assim, o presente q encheu minha barriga rs, muita saudade sério.', 
        },
        {
            image: Photo4,
            text: 'A última vez que a gente foi pra quinta são josé, nossos últimos dias no la salle com as mimikas e naquele lugar de muuuita paz e palestras do everton.', 
        },
        {
            image: Photo5,
            text: 'Minha peça de teatro que tu e a tia mara + belbis foram, não sei se conseguir dizer porque eu tava anestesiada, mas foi muito importante vocês terem ido.', 
        },
        {
            image: Photo6,
            text: 'Praiiiiiia, o lugar que a gente mais ama no mundo todinho, o mar, o milho na beira da praia. obrigada por tornar minhas férias melhores.', 
        },
        {
            image: Photo7,
            text: 'PRIMEIRO DIA DE AULA NO IF!!!!!! sei o quão importante isso foi pra gente e o quanto a gente merece estar lá. conseguir realizar isso contigo é sem dúvida uma das melhores coisas que aconteceram no meu ano.', 
        },
        {
            image: Photo8,
            text: 'CARNAIF kkkkkkkk, essa foto não expressa o momento de ir no centro e ficar tendo mil e uma ideias de fantasias, chegar em casa e deixar tudo fedendo com cheiro de queimado da tiara kkkkk, obrigada por sempre ser minha parceira, cosmo.', 
        },
        {
            image: Photo9,
            text: 'Essa e a última são momentos aleatórios. talvez os mais especiais pra mim. cada momento contigo (até aquele que eu durmo e acordo e tu nunca acorda daí fico falando com a tua família que já virou a minha segunda kkkkkk) é especial.', 
        },
        {
            image: Photo10,
            text: 'Eu te amo muito, muito e espero que sempre que tu te sentir sozinha ou triste, lembre desse site (aliás momento pra créditos: meu irmão) e que ele possa te alegrar sempre.', 
        },
    ]

    return (
        <div className='photo'>
            {photos.map((photo, key) => (
                <Card key={key} className='photo__card'>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            alt={'Foto de uma amizade foda.'}
                            className='photo__image'
                            image={photo.image}
                            title={'Foto de uma amizade foda.'}
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='h2'>
                                {photo.text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </div>
    )
}

export default Photo