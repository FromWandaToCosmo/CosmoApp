import React from 'react'
import PageNotFound from '../../images/page-not-found.svg'
import HistoryService from '../../services/HistoryService'
import PathConstants from '../../constants/PathConstants'
import './styles.css'

const redirectTimeout = 3000

const NotFound = (): JSX.Element => {

    const redirectToHome = () => {
        HistoryService.push(PathConstants.HOME)
    }

    setTimeout(redirectToHome, redirectTimeout)

    return (
        <div className='not_found'>
            <p className='not_found__text'>Página não encontrada :(</p>
            <p className='not_found__text'>Indo para uma página válida...</p>
            <img className='not_found__image' src={PageNotFound} alt='Desenho da tela de um computador com o erro 404 de página não encontrada.'/>
        </div>
    )
}

export default NotFound