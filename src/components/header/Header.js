import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    constructor(props) {  
        super(props);  
        this.state = {  
            open: false,  
        };  
        this.togglebutton = this.togglebutton.bind(this);  
    }  
    togglebutton() {  
        const { open } = this.state;  
        this.setState({  
            open: !open,  
        });  
    }  
    render() {
        const { open } = this.state;
        return (
            <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
             <div class="container-fluid">
                <Link className="navbar-brand" to="/"><img src={process.env.PUBLIC_URL+'/assets/img/logo.png'} alt=""/></Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                   <ul class="navbar-nav ml-auto">
                      <li class="nav-item active">
                         <Link className="nav-link" to="/"><i class="fas fa-home"></i> <span class="sr-only">(current)</span></Link>
                      </li>
                      <li class="nav-item">
                         <Link className="nav-link" to="/vission">Our Vision </Link>
                      </li>
                      <li class="nav-item">
                         <Link className="nav-link" to="/curriculums">
                         Curriculum 
                         </Link>
                      </li>
                      <li class="nav-item">
                         <Link className="nav-link" to="/curriculums-detail">Buy a Course</Link>
                      </li>
                      <li class="nav-item">
                         <Link className="nav-link" to="/contact-us">Contact Us </Link>
                      </li>
                   </ul>
                </div>
                <div class="social-part">
                   <i class="fa fa-search"></i>
                   <i class="fa fa-user" aria-hidden="true"  data-toggle="modal" data-target="#loginmodal"></i>
                   <Link to="/my-cart"><i class="fas fa-shopping-cart pl-0"></i></Link>
                </div>
                <Link to="/book-free-trail">
                <button type="button" class="btn btn-danger btn-mob ml-2"> 
                Book a Free Trail 
                </button> 
                </Link>
             </div>
          </nav>
          <div class="mobile-header">
              <div class="container">
                  <div class="row">
                      <div class="nav">
                          <span class="mblemenubtn" onClick={this.togglebutton}><i class="fa fa-bars"></i></span>
                      </div>
                      <div class="logo">
                          <Link className="navbar-brand" to="/"><img src={process.env.PUBLIC_URL+'/assets/img/logo.png'} alt=""/></Link>
                      </div>
                      <div class="myacnt">
                         <i class="fa fa-user" aria-hidden="true"  data-toggle="modal" data-target="#loginmodal"></i> 
                      </div>
                      <div class="cart">
                         <Link to="/my-cart"><i class="fas fa-shopping-cart pl-0"></i></Link> 
                      </div>
                  </div><br/>
                  <div class="row">
                      {open && ( <div class="sidembnav" style={{display:(this.state.open? 'block':'none')}}>
                          <ul>
                              <li><Link to="/"><span><img src={process.env.PUBLIC_URL+'/assets/img/mobile_home.png'} alt=""/></span>Home</Link></li>
                              <li><Link to="/vission"><span><img src={process.env.PUBLIC_URL+'/assets/img/mobile_vission.png'} alt=""/></span>Our Vision</Link></li>
                              <li><Link to="/curriculums"><span><img src={process.env.PUBLIC_URL+'/assets/img/education.png'} alt=""/></span>Curriculum</Link></li>
                              <li><Link to="/curriculums-detail"><span><img src={process.env.PUBLIC_URL+'/assets/img/mobile_course.png'} alt=""/></span>Buy a Course</Link></li>
                              <li><Link to="/contact-us"><span><img src={process.env.PUBLIC_URL+'/assets/img/mobile_contact.png'} alt=""/></span>Contact Us</Link></li>
                              <li><Link to="/my-cart"><span><img src={process.env.PUBLIC_URL+'/assets/img/mblcart.png'} alt=""/></span>My Cart</Link></li><br/>
                              <li><Link to="#"><span><img src={process.env.PUBLIC_URL+'/assets/img/acountmble.png'} alt=""/></span>Username</Link></li>
                              <li><Link to="#"><span><img src={process.env.PUBLIC_URL+'/assets/img/lgoutmble.png'} alt=""/></span>Logout</Link></li>
                              <Link to="/book-free-trial"><button type="button" class="btn btn-info">Book a Free Trail <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} alt=""/></button></Link>
                          </ul>
                      </div>)}
                      <div class="col-md-12">
                            <form action="/action_page.php">
                              <input type="text" placeholder="Search.." name="search"/>
                              <Link to="/" className="sbmtbtn"><i class="fa fa-search"></i></Link>
                            </form>
                      </div>
                  </div>
              </div>
          </div>
          </>
        );
    }
}

export default Header;