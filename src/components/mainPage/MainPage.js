import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
class MainPage extends Component {
    state= {
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    }
    render() {
    	function abc() {
		}
		var backgroundImage1 = process.env.PUBLIC_URL+'/assets/img/slide1.jpg';
		return (
            <div>
            	<div id="demo" class="carousel slide" data-ride="carousel">
			         <ul class="carousel-indicators">
			            <li data-target="#demo" data-slide-to="0" class="active"></li>
			            <li data-target="#demo" data-slide-to="1"></li>
			         </ul>
			         <div class="carousel-inner">
			            <div class="carousel-item active slide-inner" style={{backgroundImage: "url("+backgroundImage1+")"}}>
			               <div class="row">
			                  <div class="col-12 col-md-6">
			                     <div class="carousel-caption text-left">
			                        <h2 class="slide-title"> <span>Decode tomorrow,</span><br/>
			                           <span>today @ JrCodeBees?</span>
			                        </h2>
			                        <p>Lorem ipsum dolor sit amet, consectur adipiscing elit.Sed ut facilisis nulla, non aliquam libero. </p>
			                        <ol class="slide-list">
			                           <li>Start by <b>Booking a Free Trai</b></li>
			                           <li>We will <b>evalute</b> and <b>suggest</b> the best curriculum</li>
			                           <li>join a <b>Group</b> or <b>Individual</b> plan</li>
			                        </ol>
			                        <Link to="/book-free-trail"><button type="button" class="btn btn-info">Book a Free Trail <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} alt=""/></button></Link>
			                     </div>
			                  </div>
			                  <div class="col-12 col-md-6">
			                     <img src={process.env.PUBLIC_URL+'/assets/img/lapi.png'} alt="image1" class="img-fluid slide-img"/>
			                  </div>
			               </div>
			            </div>
			            <div class="carousel-item slide-inner" style={{backgroundImage: "url("+backgroundImage1+")"}}>
			               <div class="row">
			                  <div class="col-12 col-md-6">
			                     <div class="carousel-caption text-left">
			                        <h2> <span>How we are</span> <br/>Different?</h2>
			                        <p>Lorem ipsum dolor sit amet, consectur adipiscing elit.Sed ut facilisis nulla, non aliquam libero. </p>
			                        <ol class="slide-list">
			                           <li>Start by <b>Booking a Free Trai</b></li>
			                           <li>We will <b>evalute</b> and <b>suggest</b> the best curriculum</li>
			                           <li>join a <b>Group</b> or <b>Individual</b> plan</li>
			                        </ol>
			                        <button type="button" class="btn btn-info bg-cng" style={{'display': 'none'}}>Read More</button>
			                        <Link to="/book-free-trial"><button type="button" class="btn btn-info">Book a Free Trail <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} class="icn" alt=""/></button> </Link>
			                     </div>
			                  </div>
			                  <div class="col-12 col-md-6">
			                     <img src={process.env.PUBLIC_URL+'/assets/img/men.png'} alt="image2" class="img-fluid slide-img"/>
			                  </div>
			               </div>
			            </div>
			         </div>
			         <a class="carousel-control-prev" href="#demo" data-slide="prev">
			         <span class="carousel-control-prev-icon"></span>
			         </a>
			         <a class="carousel-control-next" href="#demo" data-slide="next">
			         <span class="carousel-control-next-icon"></span>
			         </a>
			      </div>
			      <div class="featrbx">
			         <div class="container">
			            <div class="row mb-2">
			               <div class="col-12">
			                  <h1 class="h1-titile">Featured Curriculums</h1>
			               </div>
			            </div>
			            <div class="row mx-0 py-4">
			               <OwlCarousel className={'owl-carousel owl-theme featured-curriculums'}
						    loop={true}
						    margin={25}
						    nav={true}
						    dots={true}
						    items={3}
						    responsive={this.state.responsive}>
			                  <div class="item">
			                     <div class="card-info">
			                        <div class="card-bg">
			                           <Link to="#" onClick={abc(this)} class="slider_info">
			                           <img class="img-fluid card-img-top rounded-bottom" src={process.env.PUBLIC_URL+'/assets/img/card1.jpg'} alt=""/>
			                           </Link>
			                           <div class="card-block pb-5">
			                              <figure class="profile profile-inline">
			                                 <img src={process.env.PUBLIC_URL+'/assets/img/p1.png'} class="profile-avatar" alt=""/>
			                              </figure>
			                              <h4 class="card-title">
			                                 Paython: Level 1
			                                 <p class="sub-title">AGE : 10-15</p>
			                              </h4>
			                              <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit  veh...</div>
			                              <hr/>
			                              <p class=" card-rate text-center"><small>Starting From</small> $299.00</p>
			                              <Link class=" btn-cart divcentr" to="/curriculums-detail"><i class="fa fa-info-circle"></i>Learn More</Link>
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="item">
			                     <div class="card-info">
			                        <div class="card-bg">
			                           <Link to="#" onClick={abc(this)} class="slider_info">
			                           <img class="img-fluid card-img-top rounded-bottom" src={process.env.PUBLIC_URL+'/assets/img/pshop.jpg'} alt=""/>
			                           </Link>
			                           <div class="card-block pb-5">
			                              <figure class="profile profile-inline">
			                                 <img src={process.env.PUBLIC_URL+'/assets/img/ps.png'} class="profile-avatar" alt=""/>
			                              </figure>
			                              <h4 class="card-title">
			                                 Adobe Photoshop: Level 1
			                                 <p class="sub-title">AGE : 8-15</p>
			                              </h4>
			                              <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit  veh...</div>
			                              <hr/>
			                              <p class=" card-rate text-center"><small>Starting From</small> $299.00</p>
			                              <Link class=" btn-cart divcentr" to="/curriculums-detail"><i class="fa fa-info-circle"></i>Learn More</Link>
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="item">
			                     <div class="card-info">
			                        <div class="card-bg">
			                           <Link to="#" onClick={abc(this)} class="slider_info">
			                           <img class="img-fluid card-img-top rounded-bottom" src={process.env.PUBLIC_URL+'/assets/img/alustrat.jpg'} alt=""/>
			                           </Link>
			                           <div class="card-block pb-5">
			                              <figure class="profile profile-inline">
			                                 <img src={process.env.PUBLIC_URL+'/assets/img/ai.png'} class="profile-avatar" alt=""/>
			                              </figure>
			                              <h4 class="card-title">
			                                 Adobe Illustrator
			                                 <p class="sub-title">AGE : 8-15</p>
			                              </h4>
			                              <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit  veh...</div>
			                              <hr/>
			                              <p class=" card-rate text-center"><small>Starting From</small> $299.00</p>
			                              <Link class=" btn-cart divcentr" to="/curriculums-detail"><i class="fa fa-info-circle"></i>Learn More</Link>     
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="item">
			                     <div class="card-info">
			                        <div class="card-bg">
			                           <Link to="#" onClick={abc(this)} class="slider_info">
			                           <img class="img-fluid card-img-top rounded-bottom" src={process.env.PUBLIC_URL+'/assets/img/card1.jpg'} alt=""/>
			                           </Link>
			                           <div class="card-block pb-5">
			                              <figure class="profile profile-inline">
			                                 <img src={process.env.PUBLIC_URL+'/assets/img/p1.png'} class="profile-avatar" alt=""/>
			                              </figure>
			                              <h4 class="card-title">
			                                 Paython: Level 1
			                                 <p class="sub-title">AGE : 10-15</p>
			                              </h4>
			                              <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit  veh...</div>
			                              <hr/>
			                              <p class=" card-rate text-center"><small>Starting From</small> $299.00</p>
			                              <Link class=" btn-cart divcentr" to="/curriculums-detail"><i class="fa fa-info-circle"></i>Learn More</Link>
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="item">
			                     <div class="card-info">
			                        <div class="card-bg">
			                           <Link to="#" onClick={abc(this)} class="slider_info">
			                           <img class="img-fluid card-img-top rounded-bottom" src={process.env.PUBLIC_URL+'/assets/img/pshop.jpg'} alt=""/>
			                           </Link>
			                           <div class="card-block pb-5">
			                              <figure class="profile profile-inline">
			                                 <img src={process.env.PUBLIC_URL+'/assets/img/ps.png'} class="profile-avatar" alt=""/>
			                              </figure>
			                              <h4 class="card-title">
			                                 Adobe Photoshop: Level 1
			                                 <p class="sub-title">AGE : 8-15</p>
			                              </h4>
			                              <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit  veh...</div>
			                              <hr/>
			                              <p class=" card-rate text-center"><small>Starting From</small> $299.00</p>
			                              <Link class=" btn-cart divcentr" to="/curriculums-detail"><i class="fa fa-info-circle"></i>Learn More</Link>
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="item">
			                     <div class="card-info">
			                        <div class="card-bg">
			                           <Link to="#" onClick={abc(this)} class="slider_info">
			                           <img class="img-fluid card-img-top rounded-bottom" src={process.env.PUBLIC_URL+'/assets/img/alustrat.jpg'} alt=""/>
			                           </Link>
			                           <div class="card-block pb-5">
			                              <figure class="profile profile-inline">
			                                 <img src={process.env.PUBLIC_URL+'/assets/img/ai.png'} class="profile-avatar" alt=""/>
			                              </figure>
			                              <h4 class="card-title">
			                                 Adobe Illustrator
			                                 <p class="sub-title">AGE : 8-15</p>
			                              </h4>
			                              <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit  veh...</div>
			                              <hr/>
			                              <p class=" card-rate text-center"><small>Starting From</small> $299.00</p>
			                              <Link class=" btn-cart divcentr" to="/curriculums-detail"><i class="fa fa-info-circle"></i>Learn More</Link>     
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			               </OwlCarousel>
			               <div class="col-12 text-center py-4">
			                  <Link to="/curriculums"><button type="button" class="btn btn-info bg-purple">View All 125 Curriculums <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} class="icn" alt=""/></button></Link>
			               </div>
			            </div>
			         </div>
			      </div>
			      <section class="code-kids">
			         <div class="container">
			            <div class="row">
			               <div class="col-12">
			                  <h1 class="title2 my-4">Why coding for kids?</h1>
			                  <p class="text-white text-center pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit vehicula imperdiet eget sit amet libero. Mauris sit amet dui a justo ultricies rhoncus. </p>
			                  <div class="row">
			                     <div class="col-5 wh-33">
			                        <div class="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
			                           <div class="row">
			                              <div class="col-12 text-center">
			                                 <h5>5-8 Years</h5>
			                                 <p><small>GENIUS LEVEL-<span>85%</span> </small></p>
			                              </div>
			                           </div>
			                           <div class="process-line-l"></div>
			                        </div>
			                     </div>
			                     <div class="col-2 text-center pb-1"><img src={process.env.PUBLIC_URL+'/assets/img/img1.png'} alt=""/></div>
			                     <div class="col-5 wh-33">
			                        <div class="process-point-right"></div>
			                     </div>
			                  </div>
			                  <div class="row">
			                     <div class="col-5 wh-33">
			                        <div class="process-point-left"></div>
			                     </div>
			                     <div class="col-2 text-center pb-1"><img src={process.env.PUBLIC_URL+'/assets/img/img2.png'} alt=""/></div>
			                     <div class="col-5 wh-33">
			                        <div class="process-box process-right" data-aos="fade-left" data-aos-duration="1000">
			                           <div class="row">
			                              <div class="col-12 text-center">
			                                 <h5>8-10 Years</h5>
			                                 <p><small>GENIUS LEVEL-<span>70%</span> </small></p>
			                              </div>
			                           </div>
			                           <div class="process-line-r"></div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="row">
			                     <div class="col-5 wh-33">
			                        <div class="process-box process-left" data-aos="fade-right" data-aos-duration="1000">
			                           <div class="row">
			                              <div class="col-12 text-center">
			                                 <h5>10-15 Years</h5>
			                                 <p><small>GENIUS LEVEL-<span>60%</span> </small></p>
			                              </div>
			                           </div>
			                           <div class="process-line-l"></div>
			                        </div>
			                     </div>
			                     <div class="col-2 text-center pb-1"><img src={process.env.PUBLIC_URL+'/assets/img/img3.png'} alt=""/></div>
			                     <div class="col-5 wh-33">
			                        <div class="process-point-right"></div>
			                     </div>
			                  </div>
			                  <div class="row">
			                     <div class="col-5 wh-33">
			                        <div class="process-point-left"></div>
			                     </div>
			                     <div class="col-2 text-center"><img src={process.env.PUBLIC_URL+'/assets/img/img4.png'} alt=""/></div>
			                     <div class="col-5 wh-33">
			                        <div class="process-box process-right" data-aos="fade-left" data-aos-duration="1000">
			                           <div class="row">
			                              <div class="col-12 text-center">
			                                 <h5>Over 15 Years</h5>
			                                 <p><small>GENIUS LEVEL-<span>30% </span></small></p>
			                              </div>
			                           </div>
			                           <div class="process-line-r"></div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="col-12 text-center py-5">
			                     <Link to="/book-free-trial"><button type="button" class="btn btn-info">Book a Free Trial <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} class="icn" alt=""/></button></Link>
			                  </div>
			               </div>
			            </div>
			         </div>
			      </section>
			      <section class="faculties">
			         <div class="container">
			            <div class="row">
			               <div class="col-12">
			                  <h1 class="h1-titile">Our Faculties</h1>
			               </div>
			            </div>
			            <div class="row mx-0 py-4">
			               <OwlCarousel className={'owl-carousel owl-theme faculties featured-curriculums'}
						    loop={true}
						    margin={25}
						    nav={true}
						    dots={true}
						    items={3}
						    responsive={this.state.responsive}>
			                  <div class="item">
			                     <div class="card-info">
			                        <div class="card-bg pb-4">
			                           <div class="profile_pic text-center frst">
			                              <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/team1.jpg'} alt="card image1"/>
			                           </div>
			                           <div class="card-body text-center">
			                              <h3 class="media-heading">Firstname Lastname</h3>
			                              <p>Web Developer</p>
			                              <div class="profile-userbuttons">
			                                 <Link to="#" class="btn-light-grey">HTML</Link>
			                                 <Link to="#" class="btn-light-grey">Java</Link>
			                                 <Link to="#" class="btn-light-grey">.Net</Link>
			                              </div>
			                              <hr/>
			                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit vehic... imper....</p>
			                              <hr/>
			                              <div class="card-ftr">
			                                 <ul class="social-icons-ql">
			                                    <li><Link to="#"><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
			                                    <li><Link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
			                                    <li><Link to="#"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
			                                 </ul>
			                                 <Link class="btn-cart float-right" to="/faculties-detail">View Profile <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} class="icn" alt=""/></Link>
			                              </div>
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="item">
			                     <div class="card-info">
			                        <div class="card-bg pb-4">
			                           <div class="card-body text-center">
			                              <div class="profile_pic text-center">
			                                 <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/img2.jpg'} alt="card image2"/>
			                              </div>
			                              <h3 class="media-heading">Firstname Lastname</h3>
			                              <p>UI/UX Designer</p>
			                              <div class="profile-userbuttons">
			                                 <Link to="#" class="btn-light-grey">Photoshop</Link>
			                                 <Link to="#" class="btn-light-grey">Illustrator</Link>
			                              </div>
			                              <hr/>
			                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit vehic... imper....</p>
			                              <hr/>
			                              <div class="card-ftr prflvw">
			                                 <ul class="social-icons-ql">
			                                    <li><Link to="#"><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
			                                    <li><Link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
			                                 </ul>
			                                 <Link class="btn-cart float-right prflvw" to="/faculties-detail">View Profile <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} class="icn" alt=""/></Link>
			                              </div>
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="item">
			                     <div class="card-info">
			                        <div class="card-bg pb-4">
			                           <div class="card-body text-center">
			                              <div class="profile_pic text-center">
			                                 <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/img3.jpg'} alt="card image3"/>
			                              </div>
			                              <h3 class="media-heading">Firstname Lastname</h3>
			                              <p>Front-end-Developer</p>
			                              <div class="profile-userbuttons">
			                                 <Link to="#" class="btn-light-grey">HTML</Link>
			                                 <Link to="#" class="btn-light-grey">Css</Link>
			                                 <Link to="#" class="btn-light-grey">Javascript</Link>
			                              </div>
			                              <hr/>
			                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit vehic... imper....</p>
			                              <hr/>
			                              <div class="card-ftr prflvw">
			                                 <ul class="social-icons-ql">
			                                    <li><Link to="#"><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
			                                    <li><Link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
			                                    <li><Link to="#"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
			                                 </ul>
			                                 <Link class="btn-cart prflvw float-right" to="/faculties-detail">View Profile <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} class="icn" alt=""/></Link>
			                              </div>
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="item">
			                     <div class="card-info">
			                        <div class="card-bg pb-4">
			                           <div class="profile_pic text-center frst">
			                              <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/team1.jpg'} alt="card image4"/>
			                           </div>
			                           <div class="card-body text-center">
			                              <h3 class="media-heading">Firstname Lastname</h3>
			                              <p>Web Developer</p>
			                              <div class="profile-userbuttons">
			                                 <Link to="#" class="btn-light-grey">HTML</Link>
			                                 <Link to="#" class="btn-light-grey">Java</Link>
			                                 <Link to="#" class="btn-light-grey">.Net</Link>
			                              </div>
			                              <hr/>
			                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit vehic... imper....</p>
			                              <hr/>
			                              <div class="card-ftr prflvw">
			                                 <ul class="social-icons-ql">
			                                    <li><Link to="#"><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
			                                    <li><Link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
			                                    <li><Link to="#"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
			                                 </ul>
			                                 <Link class="btn-cart prflvw float-right " to="/faculties-detail">View Profile <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} class="icn" alt=""/></Link>
			                              </div>
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="item">
			                     <div class="card-info">
			                        <div class="card-bg pb-4">
			                           <div class="card-body text-center">
			                              <div class="profile_pic text-center">
			                                 <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/img2.jpg'} alt="card image5"/>
			                              </div>
			                              <h3 class="media-heading">Firstname Lastname</h3>
			                              <p>UI/UX Designer</p>
			                              <div class="profile-userbuttons">
			                                 <Link to="#" class="btn-light-grey">Photoshop</Link>
			                                 <Link to="#" class="btn-light-grey">Illustrator</Link>
			                              </div>
			                              <hr/>
			                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit vehic... imper....</p>
			                              <hr/>
			                              <div class="card-ftr prflvw">
			                                 <ul class="social-icons-ql">
			                                    <li><Link to="#"><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
			                                    <li><Link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
			                                 </ul>
			                                 <Link class="btn-cart prflvw float-right " to="/faculties-detail">View Profile <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} class="icn" alt=""/></Link>
			                              </div>
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			                  <div class="item">
			                     <div class="card-info">
			                        <div class="card-bg pb-4">
			                           <div class="card-body text-center">
			                              <div class="profile_pic text-center">
			                                 <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/img3.jpg'} alt="card image6"/>
			                              </div>
			                              <h3 class="media-heading">Firstname Lastname</h3>
			                              <p>Front-end-Developer</p>
			                              <div class="profile-userbuttons">
			                                 <Link to="#" class="btn-light-grey">HTML</Link>
			                                 <Link to="#" class="btn-light-grey">Css</Link>
			                                 <Link to="#" class="btn-light-grey">Javascript</Link>
			                              </div>
			                              <hr/>
			                              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit vehic... imper....</p>
			                              <hr/>
			                              <div class="card-ftr prflvw">
			                                 <ul class="social-icons-ql">
			                                    <li><Link to="#"><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
			                                    <li><Link to="#"><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
			                                    <li><Link to="#"><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
			                                 </ul>
			                                 <Link class="btn-cart prflvw float-right " to="/faculties-detail">View Profile <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} class="icn" alt=""/></Link>
			                              </div>
			                           </div>
			                        </div>
			                     </div>
			                  </div>
			               </OwlCarousel>
			            </div>
			            <div class="text-center pb-5 pt-4">
			               <Link to="/our-faculties"><button type="button" class="btn btn-info bg-purple">View All 94 Faculties <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} class="icn" alt=""/></button></Link> 
			            </div>
			         </div>
			      </section>
			      <section class="sucess-stories">
			          <h1 class="h1-titile">Sucess Stories</h1>
			          <div class=" p-3 mx-auto mb-3">
			             <div id="carouselTestimonial" class="carousel carousel-testimonial slide m-auto" data-ride="carousel">
			                <ol class="carousel-indicators ">
			                   <li data-target="#carouselTestimonial" data-slide-to="0" class="active"></li>
			                   <li data-target="#carouselTestimonial" data-slide-to="1"></li>
			                   <li data-target="#carouselTestimonial" data-slide-to="2"></li>
			                </ol>
			                <div class="carousel-inner">
			                   <div class="carousel-item text-center active">
			                      <div class="carousel-testimonial-img p-1  rounded-circle m-auto">
			                         <img class="rounded-circle-border" src={process.env.PUBLIC_URL+'/assets/img/t1.png'} alt="First slide"/>
			                      </div>
			                      <h5 class="mt-2 mb-0"><strong class="text-warning text-uppercase">Firstname Lastname</strong></h5>
			                      <h6 class="text-dark m-0">Florida, USA</h6>
			                      <div class="quote"><img src={process.env.PUBLIC_URL+'/assets/img/quoateleft.png'} class="quoteimg" alt=""/></div>
			                      <p><i>Sit amet libero. Mauris sit amet dui a justo ultricies rhoncus. Pellentesque tincidunt fermentum augue, sit amet laoreet urna sagittis sed. Donec diam sapien, rutrum lobortis auctor a, tincidunt cursus purus. Nullam vestibulum lobortis erat. Vivamus eu maximus lorem. Cras sagittis massa nec porta condimentum.</i> </p>
			                      <div class="quote pb-5"><img src={process.env.PUBLIC_URL+'/assets/img/quoateright.png'} class="quoteimg" alt=""/></div>
			                   </div>
			                   <div class="carousel-item text-center">
			                      <div class="carousel-testimonial-img p-1  rounded-circle m-auto">
			                         <img class="rounded-circle-border" src={process.env.PUBLIC_URL+'/assets/img/t1.png'} alt="Second slide"/>
			                      </div>
			                      <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">Firstname Lastname</strong></h5>
			                      <h6 class="text-dark m-0">Florida, USA</h6>
			                      <div class="quote"><img src={process.env.PUBLIC_URL+'/assets/img/quoateleft.png'} class="quoteimg" alt=""/></div>
			                      <p><i>Sit amet libero. Mauris sit amet dui a justo ultricies rhoncus. Pellentesque tincidunt fermentum augue, sit amet laoreet urna sagittis sed. Donec diam sapien, rutrum lobortis auctor a, tincidunt cursus purus. Nullam vestibulum lobortis erat. Vivamus eu maximus lorem. Cras sagittis massa nec porta condimentum.</i> </p>
			                      <div class="quote pb-5"><img src={process.env.PUBLIC_URL+'/assets/img/quoateright.png'} class="quoteimg" alt=""/></div>
			                   </div>
			                   <div class="carousel-item text-center">
			                      <div class="carousel-testimonial-img p-1  rounded-circle m-auto">
			                         <img class="rounded-circle-border" src={process.env.PUBLIC_URL+'/assets/img/t1.png'} alt="Third slide"/>
			                      </div>
			                      <h5 class="mt-4 mb-0"><strong class="text-warning text-uppercase">Firstname Lastname</strong></h5>
			                      <h6 class="text-dark m-0">Florida, USA</h6>
			                      <div class="quote"><img src={process.env.PUBLIC_URL+'/assets/img/quoateleft.png'} class="quoteimg" alt=""/></div>
			                      <p><i>Sit amet libero. Mauris sit amet dui a justo ultricies rhoncus. Pellentesque tincidunt fermentum augue, sit amet laoreet urna sagittis sed. Donec diam sapien, rutrum lobortis auctor a, tincidunt cursus purus. Nullam vestibulum lobortis erat. Vivamus eu maximus lorem. Cras sagittis massa nec porta condimentum.</i> </p>
			                      <div class="quote pb-5 "><img src={process.env.PUBLIC_URL+'/assets/img/quoateright.png'} class="quoteimg" alt=""/></div>
			                   </div>
			                </div>
			                <Link class="carousel-control-prev tdr" to="#carouselTestimonial" role="button" data-slide="prev">
			                <span class="carousel-control-prev-icon" aria-hidden="true" style={{'visibility': 'hidden'}}></span>
			                <span class="sr-only">Previous</span>
			                </Link>
			                <Link class="carousel-control-next tdr" to="#carouselTestimonial" role="button" data-slide="next">
			                <span class="carousel-control-next-icon" aria-hidden="true" style={{'visibility': 'hidden'}}></span>
			                <span class="sr-only">Next</span>
			                </Link>
			             </div>
			          </div>
			      </section>
            </div>
        );
    }
}

export default MainPage;