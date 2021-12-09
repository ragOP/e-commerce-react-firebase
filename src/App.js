import HomePage from "./components/homepage.component";
import { Switch, Route } from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from './components/header-component/header-component'
import SignInSignUP from './pages/sign-in-sing-up/sign-in-sing-up'
import './App.css'
function App() {
 

  return ( 
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInSignUP} />
    </Switch>
  </div>
  );
}

export default App;
 