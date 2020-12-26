import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
class Vission extends Component {
    render() {
        return (
            <div>
            <section class="banner" id="vission">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12">
                          <ul class="nav nav-tabs" role="tablist">
                              <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#ourvision">Our Vision</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#ourmission">Our Mission</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#ourvalues">Our Values</a>
                              </li>
                          </ul>
                          <div class="tab-content">
                              <div id="ourvision" class="container tab-pane active"><br/>
                                  <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                      <div class="carousel-item active">
                                        <img class="d-block mgauto" src={process.env.PUBLIC_URL+'/assets/img/vission.png'} alt="First slide"/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh... non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id.</p>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div id="ourmission" class="container tab-pane fade"><br/>
                                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                      <div class="carousel-item active">
                                        <img class="d-block mgauto" src={process.env.PUBLIC_URL+'/assets/img/mission.png'} alt="First slide"/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh... non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id.</p>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                              <div id="ourvalues" class="container tab-pane fade"><br/>
                                <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                      <div class="carousel-item active">
                                        <img class="d-block mgauto" src={process.env.PUBLIC_URL+'/assets/img/value.png'} alt="First slide"/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id velit veh... non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id non aliquam libero. Nunc pretium massa nec massa consectetur, vel ullamcorper nunc laoreet. Pellentesque at turpis id.</p>
                                      </div>
                                    </div>
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

export default Vission;