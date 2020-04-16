import React, { useState } from 'react'
import Cake from '../../images/cake.svg'
import CustomAlert from '../../components/custom_alert/index'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import AuthService from '../../services/AuthService'
import './styles.css'

const Login = () : JSX.Element => {

    const [answer, setAnswer] = useState('')

    const [alertFail, showAlertFail] = CustomAlert('Você errou! Tente novamente se você for a Ana caso contrário vá cuidar da sua vida.', 'error')
 
    const onTextChange = (e: any) => {
        const value = e.target.value

        setAnswer(value)
    }
    
    const onClick = () => {
        const success = AuthService.login(answer)

        if(!success) {
            showAlertFail()
        }
    }

    return (
        <div className='login'>
            <img className='login__logo' src={Cake} alt='Bolo de aniversário' />
            <p className='login__message'>Qual foi o primeiro show que a gente foi juntas?</p>
            <form className='login__form' noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    value={answer} 
                    onChange={onTextChange}
                    label='Resposta' 
                    variant="outlined" 
                    className='login__input'
                />
            </form>
            <div className='login__button'>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={onClick}
                    endIcon={<Icon>send</Icon>}
                >
                    Tentar
                </Button>
            </div>
            {alertFail}
        </div>
    )
}

export default Login