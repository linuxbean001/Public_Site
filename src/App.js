import React from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
// import './assets/js/jquery.min.js';
import 'jquery/dist/jquery.min.js';
// import './assets/js/popper.min.js'; 
import 'popper.js/dist/umd/popper.min.js'; 
// import './assets/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainPage from './components/mainPage/MainPage';
import Vission from './components/vission/Vission';
import Curriculums from './components/curriculums/Curriculums';
import CurriculumsDetail from './components/curriculums/CurriculumsDetail';
import ContactUs from './components/contact/ContactUs';
import MyCart from './components/cart/MyCart';
import Checkout from './components/checkout/Checkout';
import BookFreeTrail from './components/book-free-trail/BookFreeTrail';
import FacultiesDetail from './components/faculties/FacultiesDetail';
import OurFaculties from './components/faculties/OurFaculties';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/vission" component={Vission} />
            <Route exact path="/curriculums" component={Curriculums} />
            <Route exact path="/curriculums-detail" component={CurriculumsDetail} />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/my-cart" component={MyCart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/book-free-trail" component={BookFreeTrail} />
            <Route exact path="/faculties-detail" component={FacultiesDetail} />
            <Route exact path="/our-faculties" component={OurFaculties} />
          </Switch>
          <Footer />
          <Login />
          <Register />
        </>
      </Router>
  );
}

export default App;
