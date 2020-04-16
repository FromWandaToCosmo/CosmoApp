import React from 'react'
import Button from '../button'
import AuthService from '../../services/AuthService'
import LogoutSVG from '../../images/logout.svg'
import './styles.css'

const LogoutButton = () => {

    const logout = () => {
        AuthService.logout()
    }

    return (
        <Button 
            imageSrc={LogoutSVG} 
            imageAlt={'Desenho de porta um pouco aberta indicando saída.'} 
            onClick={logout}
            className='logout_button'>
            Sair
        </Button>
    )
}

export default LogoutButton