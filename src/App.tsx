import React from 'react'
import Login from './views/login'
import Main from './views/main'
import PrivateRouter from './components/private_router'
import PrivateRoute from './components/private_route'
import LoginRoute from './components/login_route/index'
import PathConstants from './constants/PathConstants'
import AuthService from './services/AuthService'
import HistoryService from './services/HistoryService'
import { Switch, Route } from 'react-router'
import NotFound from './views/not_found/index'
import './styles.css'


const App = (): JSX.Element => {
  return (
    <div className='app'>
      <PrivateRouter 
        loginPath={PathConstants.LOGIN}
        homePath={PathConstants.HOME}
        isAuthenticated={AuthService.isAuthenticated}
        browserHistory={HistoryService}>
        <Switch>
          <LoginRoute exact path={PathConstants.LOGIN} component={Login} />
          <PrivateRoute path={PathConstants.APP} component={Main} />
          <Route path={'/'} component={NotFound} />
        </Switch>
      </PrivateRouter>
    </div>
  )
}



    


export default App
