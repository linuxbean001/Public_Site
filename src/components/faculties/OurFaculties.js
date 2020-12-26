import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class OurFaculties extends Component {
    render() {
        return (
            <div>
            <section class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Our Faculties</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa<br/> nec massa consectetur.ullamcorper nunc laoreet.</p>
                            <div class="input-group mb-3">
                              <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></span>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="banner-sec" id="faculties">
                <div class="container">
                    <div class="row mb100">
                        <div class="col-md-4">
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
                        <div class="col-md-4">
                            <div class="card-info">
                                <div class="card-bg pb-4">
                                  <div class="profile_pic text-center frst">
                                    <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/img2.jpg'} alt="card image2"/>
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
                        <div class="col-md-4">
                            <div class="card-info">
                                <div class="card-bg pb-4">
                                  <div class="profile_pic text-center frst">
                                    <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/img3.jpg'} alt="card image3"/>
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
                    </div>
                    <div class="row mb100">
                        <div class="col-md-4">
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
                        <div class="col-md-4">
                            <div class="card-info">
                                <div class="card-bg pb-4">
                                  <div class="profile_pic text-center frst">
                                    <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/img2.jpg'} alt="card image5"/>
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
                        <div class="col-md-4">
                            <div class="card-info">
                                <div class="card-bg pb-4">
                                  <div class="profile_pic text-center frst">
                                    <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/img3.jpg'} alt="card image6"/>
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
                    </div>
                    <div class="row mb100">
                        <div class="col-md-4">
                            <div class="card-info">
                                <div class="card-bg pb-4">
                                  <div class="profile_pic text-center frst">
                                    <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/team1.jpg'} alt="card image7"/>
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
                        <div class="col-md-4">
                            <div class="card-info">
                                <div class="card-bg pb-4">
                                  <div class="profile_pic text-center frst">
                                    <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/img2.jpg'} alt="card image8"/>
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
                                      <Link class="btn-cart float-right" to="/jrcodebees/faculties-detail.html">View Profile <img src={process.env.PUBLIC_URL+'/assets/img/icn.png'} class="icn" alt=""/></Link>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card-info">
                                <div class="card-bg pb-4">
                                  <div class="profile_pic text-center frst">
                                    <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/img3.jpg'} alt="card image9"/>
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
                    </div>
                    <div class="row">
                        <div class="col-12 text-center py-4">
                            <button type="button" class="btn btn-info bg-purple btnbokk">Load More <i class="fa fa-arrow-down"></i></button>
                        </div>
                    </div>
                </div>
            </section>
          </div>
        );
    }
}

export default OurFaculties;