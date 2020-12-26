import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class FacultiesDetail extends Component {
    render() {
      function abc() {
      }
        return (
            <div>
            <section class="banner" id="circumdetail">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <Link to="/our-faculties" class="backbutton"><span><img src={process.env.PUBLIC_URL+'/assets/img/backarrow.png'} alt=""/></span>All Faculties</Link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2 pt10">
                                <img src={process.env.PUBLIC_URL+'/assets/img/sam.png'} alt="" />
                        </div>
                        <div class="col-md-5">
                            <h2>George Sam Peter</h2>
                            <ul class="starrating">
                                <li><img src={process.env.PUBLIC_URL+'/assets/img/star1.png'} alt=""/></li>
                                <li><img src={process.env.PUBLIC_URL+'/assets/img/star1.png'} alt=""/></li>
                                <li><img src={process.env.PUBLIC_URL+'/assets/img/star1.png'} alt=""/></li>
                                <li><img src={process.env.PUBLIC_URL+'/assets/img/star1.png'} alt=""/></li>
                                <li><img src={process.env.PUBLIC_URL+'/assets/img/star3.png'} alt=""/></li>
                            </ul>
                            <p class="f12">Web Developer</p>
                            <div class="flexbx">
                                <p>HTML</p>
                                <p>JAVA</p>
                                <p>.NET</p>
                                <p>PHP</p>
                            </div>
                            <hr class="clwhite"/>
                            <p class="f12">Educational Qualifications</p>
                            <p class="f12">Master of Science, University of Oxford</p><br/>
                            <ul class="starrating">
                                <li><img src={process.env.PUBLIC_URL+'/assets/img/insta.png'} alt=""/></li>
                                <li><img src={process.env.PUBLIC_URL+'/assets/img/twitter.png'} alt=""/></li>
                                <li><img src={process.env.PUBLIC_URL+'/assets/img/facebookk.png'} alt=""/></li>
                            </ul>
                        </div>
                        <div class="col-md-5">
                            <div class="aboutauthorbox"> 
                                <p><b>About George !</b></p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit vehic... imper.eget sit amet libero.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="acodian testimnls">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                           <h2>Testimonials</h2><br/>
                           <div class="row">
                               <div class="col-md-3">
                                   <img src={process.env.PUBLIC_URL+'/assets/img/testi1.png'} alt="" class="w100"/>
                               </div>
                               <div class="col-md-9">
                                   <h3>Excellent Skills!</h3>
                                   <ul class="starrating">
                                        <li><img src={process.env.PUBLIC_URL+'/assets/img/star4.png'} alt=""/></li>
                                        <li><img src={process.env.PUBLIC_URL+'/assets/img/star4.png'} alt=""/></li>
                                        <li><img src={process.env.PUBLIC_URL+'/assets/img/star4.png'} alt=""/></li>
                                        <li><img src={process.env.PUBLIC_URL+'/assets/img/star4.png'} alt=""/></li>
                                        <li><img src={process.env.PUBLIC_URL+'/assets/img/star2.png'} alt=""/></li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero.</p>
                                    <p>Sajan Jospeh | 23 Nov 2020</p>
                               </div>
                           </div>
                           <hr/>
                           <div class="row">
                               <br/>
                               <div class="col-md-3">
                                   <img src={process.env.PUBLIC_URL+'/assets/img/testi2.png'} class="w100" alt=""/>
                               </div>
                               <div class="col-md-9">
                                   <h3>Interesting Sessions</h3>
                                   <ul class="starrating">
                                        <li><img src={process.env.PUBLIC_URL+'/assets/img/star4.png'} alt=""/></li>
                                        <li><img src={process.env.PUBLIC_URL+'/assets/img/star4.png'} alt=""/></li>
                                        <li><img src={process.env.PUBLIC_URL+'/assets/img/star4.png'} alt=""/></li>
                                        <li><img src={process.env.PUBLIC_URL+'/assets/img/star4.png'} alt=""/></li>
                                        <li><img src={process.env.PUBLIC_URL+'/assets/img/star2.png'} alt=""/></li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero.</p>
                                    <p>Sajan Jospeh | 23 Nov 2020</p>
                               </div>
                           </div>
                        </div> 
                        <div class="col-md-3">
                            <div class="card-info">
                                <div class="card-bg">
                                   <Link to="#" onclick={abc(this)} class="slider_info">
                                   <img class="img-fluid card-img-top rounded-bottom" src={process.env.PUBLIC_URL+'/assets/img/card1.jpg'} alt=""/>
                                   </Link>
                                   <div class="card-block pb-5">
                                      <figure class="profile profile-inline">
                                         <img src={process.env.PUBLIC_URL+'/assets/img/ps.png'} class="profile-avatar" alt=""/>
                                      </figure>
                                      <h4 class="card-title">
                                         <b>Adobe Photoshop</b>
                                         <p class="sub-title">AGE : 10-15</p>
                                      </h4>
                                      <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero....</div>
                                      <hr/>
                                     
                                      <Link class=" btn-cart divcentr"><i class="fa fa-info-circle"></i>Learn More</Link>
                                   </div>
                                </div>
                             </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card-info">
                                <div class="card-bg">
                                   <Link to="#" onclick={abc(this)} class="slider_info">
                                   <img class="img-fluid card-img-top rounded-bottom" src={process.env.PUBLIC_URL+'/assets/img/card1.jpg'} alt=""/>
                                   </Link>
                                   <div class="card-block pb-5">
                                      <figure class="profile profile-inline">
                                         <img src={process.env.PUBLIC_URL+'/assets/img/ai.png'} class="profile-avatar" alt=""/>
                                      </figure>
                                      <h4 class="card-title">
                                         <b>Adobe Illustrator</b>
                                         <p class="sub-title">AGE : 10-15</p>
                                      </h4>
                                      <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero....</div>
                                      <hr/>
                                      
                                      <Link class=" btn-cart divcentr"><i class="fa fa-info-circle"></i>Learn More</Link>
                                   </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </section>
          </div>
        );
    }
}

export default FacultiesDetail;