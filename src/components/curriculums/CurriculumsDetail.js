import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class CurriculumsDetail extends Component {
    render() {
      function abc() {
      }
        return (
            <div>
            <section class="banner" id="circumdetail">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <Link to="/curriculums" class="backbutton"><span><img src={process.env.PUBLIC_URL+'/assets/img/backarrow.png'} alt=""/></span>All Curriculums</Link>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <div class="imgtext">
                                <img src={process.env.PUBLIC_URL+'/assets/img/XMLID_309_.png'} alt="" />
                            </div>
                        </div>
                        <div class="col-md-7">
                            <h2>Adobe Photoshop Basics : Level 1</h2>
                            <p><span><img src={process.env.PUBLIC_URL+'/assets/img/ss.png'} alt=""/></span>8-15 Years</p>
                            <ul class="nav nav-tabs">
                              <li class="disable"><Link>Class Type:</Link></li>
                              <li class="active"><a class="active" data-toggle="tab" href="#individual">Individual Session 1</a></li>
                              <li><a data-toggle="tab" href="#group">Group/Batch</a></li>
                            </ul>
                            <div class="tab-content">
                              <div id="individual" class="tab-pane fade in active show">
                                <div class="row">
                                   <div class="col-md-6">
                                       <div class="box">
                                            <p>Complete Package</p>
                                            <p><b>$ 299.00</b><span><del>$ 399.00</del></span></p>
                                       </div>
                                   </div> 
                                   <div class="col-md-6">
                                       <div class="box mnthl">
                                           <p>Monthly Payment (per month)</p>
                                           <p><b>$ 149.00</b><span><del>$ 199.00</del></span></p>
                                       </div>
                                   </div>
                                </div>
                              </div>
                              <div id="group" class="tab-pane fade">
                                <div class="row">
                                   <div class="col-md-6">
                                       <div class="box">
                                            <p>Complete Package</p>
                                            <p><b>$ 299.00</b><span><del>$ 399.00</del></span></p>
                                       </div>
                                   </div> 
                                   <div class="col-md-6">
                                       <div class="box mnthl">
                                           <p>Monthly Payment (per month)</p>
                                           <p><b>$ 149.00</b><span><del>$ 199.00</del></span></p>
                                       </div>
                                   </div>
                                   <div class="col-md-12">
                                       <br/>
                                       <p><span class="flleft"><i class="fa fa-chevron-circle-right"></i></span>Starting from 01 Dec 2020. Every Saturday & Sunday.</p>
                                       <p><span class="flleft"><i class="fa fa-chevron-circle-right"></i></span>Only 1 slot left. Enrol at the earliest.</p>
                                    </div>
                                </div>
                                <hr class="clwhite"/>
                                <div class="row">
                                   <div class="col-md-6">
                                       <div class="box mnthl">
                                            <p>Complete Package</p>
                                            <p><b>$ 299.00</b><span><del>$ 399.00</del></span></p>
                                       </div>
                                   </div> 
                                   <div class="col-md-6">
                                       <div class="box mnthl">
                                           <p>Monthly Payment (per month)</p>
                                           <p><b>$ 149.00</b><span><del>$ 199.00</del></span></p>
                                       </div>
                                   </div>
                                   <div class="col-md-12">
                                       <br/>
                                       <p><span class="flleft"><i class="fa fa-chevron-circle-right"></i></span>Starting from 01 Dec 2020. Every Saturday & Sunday.</p>
                                    </div>
                                </div>
                              </div>
                            </div>
                            <Link class=" btn-cart divcentr" data-toggle="modal" data-target="#loginmodal"><i class="fa fa-shopping-cart"></i>Buy Now</Link> 
                        </div>
                        <div class="col-md-3">
                            <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
                              <div class="carousel-inner">
                                <div class="carousel-item">
                                  <img class="d-block mgauto" src={process.env.PUBLIC_URL+'/assets/img/layerslider.png'} alt="First slide"/>
                                  <p>Welcome to the Get Started with Photoshop tutorials that teach you the basic tools and techniques of Adobe Photoshop.</p>
                                </div>
                                <div class="carousel-item active">
                                  <img class="d-block mgauto" src={process.env.PUBLIC_URL+'/assets/img/layerslider.png'} alt="Second slide"/>
                                  <p>Welcome to the Get Started with Photoshop tutorials that teach you the basic tools and techniques of Adobe Photoshop.</p></div>
                                <div class="carousel-item">
                                  <img class="d-block mgauto" src={process.env.PUBLIC_URL+'/assets/img/layerslider.png'} alt="Third slide"/>
                                  <p>Welcome to the Get Started with Photoshop tutorials that teach you the basic tools and techniques of Adobe Photoshop.</p></div>
                                  <div class="carousel-item">
                                  <img class="d-block mgauto" src={process.env.PUBLIC_URL+'/assets/img/layerslider.png'} alt="Third slide"/>
                                  <p>Welcome to the Get Started with Photoshop tutorials that teach you the basic tools and techniques of Adobe Photoshop.</p></div>
                              </div>
                             <ol class="carousel-indicators">
                                <li data-target="#carouselExampleIndicators1" data-slide-to="0" class=""></li>
                                <li data-target="#carouselExampleIndicators1" data-slide-to="1" class="active"></li>
                                <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                                <li data-target="#carouselExampleIndicators1" data-slide-to="3"></li>
                              </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="acodian">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh... non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id.</p>
                           <h2>Course Content</h2>
                           <div id="accordion" class="accordion">
                                <div class="card mb-0">
                                    <div class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                                        <Link class="card-title"> 01 Lorem Ipsum </Link>
                                    </div>
                                    <div id="collapseOne" class="card-body collapse" data-parent="#accordion">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                                    </div><br/>
                                    <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                                        <Link class="card-title"> 02 Lorem Ipsum </Link>
                                    </div>
                                    <div id="collapseTwo" class="card-body collapse" data-parent="#accordion">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                                    </div><br/>
                                    <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                        <Link class="card-title"> 03 Lorem Ipsum </Link>
                                    </div>
                                    <div id="collapseThree" class="collapse" data-parent="#accordion">
                                        <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS. </div>
                                    </div><br/>
                                    <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                                        <Link class="card-title"> 04 Lorem Ipsum </Link>
                                    </div>
                                    <div id="collapseFour" class="collapse" data-parent="#accordion">
                                        <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS. </div>
                                    </div><br/>
                                    <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                                        <Link class="card-title"> 05 Lorem Ipsum </Link>
                                    </div>
                                    <div id="collapseFive" class="collapse" data-parent="#accordion">
                                        <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS. </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div> 
                        <div class="col-md-3">
                             <h2>Related Courses</h2>
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
                                      <p class=" card-rate text-center"><small>Starting From</small> $299.00</p>
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

export default CurriculumsDetail;