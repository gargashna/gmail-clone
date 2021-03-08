import React from 'react';
import Header from './header/Header'
import appStyle from './App.module.scss';
import SideBar from './sidebar/SideBar'
import Mail from './mail/Mail'
import EmailList from './mail/EmailList'
import SendMail from './sendmail/SendMail'
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectSendMessageOpen } from './features/mailSlice';


function App() {

  const sendMessageOpen= useSelector(selectSendMessageOpen)
  return (
    <Router>

    <div className={appStyle.App}>
     
      <Header />
      <div className={appStyle.body}>
      <SideBar/>
      <Switch>
      <Route exact path="/">
          <EmailList/>
        </Route>
        <Route path="/mail">
          <Mail/>
        </Route>
        
      </Switch>
    { sendMessageOpen &&  <SendMail/>}
      </div>
      

    </div>
    </Router>
  );
}

export default App;
