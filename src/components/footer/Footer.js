import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Footer extends Component {
    constructor(props) {  
        super(props);  
        this.state = {  
            helpOpen: false,  
            mapOpen: false,  
        };  
        this.helpToggleButton = this.helpToggleButton.bind(this);  
        this.mapToggleButton = this.mapToggleButton.bind(this);  
    }  
    helpToggleButton() {  
        const { helpOpen } = this.state;  
        this.setState({  
            helpOpen: !helpOpen,  
        });  
    }
    mapToggleButton() {  
        const { mapOpen } = this.state;  
        this.setState({  
            mapOpen: !mapOpen,  
        });  
    }
    render() {
        return (
            <div>
                <footer class="footer">
                 <div class="container-fluid bottom_border">
                    <div class="row">
                       <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                          <h5 class="headin5_amrc col_white_amrc pt2"><img class="footer-logo" src={process.env.PUBLIC_URL+'/assets/img/white-logo.png'} alt=""/></h5>
                          <p>Address Line1</p>
                          <p>Address Line2</p>
                          <p>Location, State
                             <br/>USAv
                          </p>
                          <p><b>Phone:</b> +1 (123) 123 4567 </p>
                          <p><b>Email:</b> email@jrcodebees.com</p>
                       </div>
                       <div id="accordion" class="myaccordion">
                          <div class="card-footer1">
                             <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                   <button class="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                   Site Map
                                   <span class="fa-stack fa-sm float-right">
                                   <i class="fas fa-stack-2x"></i>
                                   <i class="fas fa-plus fa-stack-1x fa-inverse"></i>
                                   </span>
                                   </button>
                                </h2>
                             </div>
                             <div id="collapseOne" class="collapse" aria-labelledby="headingOne">
                                <div class="card-body">
                                   <ul class="footer_ul_amrc">
                                      <li><Link to="/">Our Vision  </Link></li>
                                      <li><Link to="/curriculums">Curriculum </Link></li>
                                      <li><Link to="/curriculums-detail">Buy a Course   </Link></li>
                                      <li><Link to="/contact-us">Contact Us</Link></li>
                                   </ul>
                                </div>
                             </div>
                          </div>
                          <div class="card-footer1">
                             <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                   <button class="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                   Help
                                   <span class="fa-stack fa-sm float-right">
                                   <i class="fas fa-stack-2x"></i>
                                   <i class="fas fa-plus fa-stack-1x fa-inverse"></i>
                                   </span>
                                   </button>
                                </h2>
                             </div>
                             <div id="collapseOne" class="collapse" aria-labelledby="headingOne">
                                <div class="card-body">
                                   <ul class="footer_ul_amrc">
                                      <li><Link to="/">FAQs</Link></li>
                                      <li><Link to="/">Customer Service</Link></li>
                                      <li><Link to="/">Terms & Conditions</Link></li>
                                      <li><Link to="/">Privacy Policy</Link></li>
                                   </ul>
                                </div>
                             </div>
                          </div>
                       </div>
                       <div class=" col-sm-4 col-md  col-12 col mb-list">
                          <h5 class="headin5_amrc col_white_amrc pt2"><Link class="stmap" onClick={this.mapToggleButton}>Site Map</Link></h5>
                          <ul class="footer_ul_amrc" style={{display:(this.state.mapOpen? 'none':'block')}}>
                   <li><Link to="/vission">Our Vision  </Link></li>     
                  <li><Link to="/curriculums">Curriculum </Link></li>
                  <li><Link to="/curriculums-detail">Buy a Course   </Link></li>
                  <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
                       </div>
                       <div class=" col-sm-4 col-md  col-12 col mb-list">
                          <h5 class="headin5_amrc col_white_amrc pt2"><Link class="hlpmp" onClick={this.helpToggleButton}>Help</Link></h5>
                          <ul class="footer_ul_amrc helpacr" style={{display:(this.state.helpOpen? 'none':'block')}}>
                             <li><Link to="#">FAQs</Link></li>
                             <li><Link to="#">Customer Service</Link></li>
                             <li><Link to="#">Terms & Conditions</Link></li>
                             <li><Link to="#">Privacy Policy</Link></li>
                          </ul>
                       </div>
                       <div class=" col-sm-4 col-md  col-12 col">
                          <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>
                          <ul class="social_footer_ul">
                             <li><Link to="#"><i class="fa fa-facebook-f"></i></Link>Facebook</li>
                             <li><Link to="#"><i class="fab fa-twitter"></i></Link>Twitter</li>
                             <li><Link to="#"><i class="fab fa-linkedin"></i></Link>Linkedin</li>
                             <li><Link to="#"><i class="fab fa-instagram"></i></Link>Instagram</li>
                          </ul>
                          <ul class="social_footer_line">
                             <i class="fa fa-facebook-f"></i>        
                             <i class="fab fa-twitter"></i>
                             <i class="fab fa-linkedin"></i>
                             <i class="fab fa-instagram"></i>
                          </ul>
                       </div>
                    </div>
                 </div>
                 <div class="col-12 text-right pr-5 mb-list">
                    <Link to="/book-free-trail"><button type="button" class="btn btn-info floating">Book a Free Trial <i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
                 </div>
              </footer>
              <div class="footer-bottom py-1">
                 <p class="text-center">© Copyright {(new Date().getFullYear())}, JrCodeBees | All rights reserved.</p>
              </div>
            </div>
        );
    }
}

export default Footer;