import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BookFreeTrail extends Component {
    render() {
        return (
            <div>
            <section class="banner">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h2>Book a free trial</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut facilisis nulla, non aliquam libero. Nunc pretium massa<br/> nec massa consectetur.ullamcorper nunc laoreet.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="banner-sec" id="booking">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card-info">
                                <div class="card-bg pb-4">
                                  <div class="profile_pic text-center frst">
                                    <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/booking1.png'} alt="card image1"/>
                                  </div>
                                  <div class="card-body">  
                                    <h3 class="media-heading text-center">Parent Details</h3>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="txtlabel">Parent’s Email ID</label>
                                        <input type="email" class="form-control txtinput" placeholder="Lorem Ipsum"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="txtlabel">Parent’s Name</label>
                                        <input type="text" class="form-control txtinput" placeholder="Lorem Ipsum"/>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-3">
                                          <select id="inputState" class="form-control txtinput">
                                            <option selected>+1</option>
                                            <option>+91</option>
                                          </select>
                                        </div>
                                        <div class="form-group col-md-9">
                                          <input type="text" class="form-control txtinput" placeholder="1234567890"/>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card-info">
                                <div class="card-bg pb-4">
                                  <div class="profile_pic text-center frst">
                                    <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/booking2.png'} alt="card image2"/>
                                  </div>
                                  <div class="card-body">  
                                    <h3 class="media-heading text-center">Kid’s Details</h3>
                                    <div class="form-group mb40">
                                        <label for="exampleInputEmail1" class="txtlabel">Kid’s Name</label>
                                        <input type="text" class="form-control txtinput" placeholder="Lorem Ipsum"/>
                                    </div>
                                    <div class="nbmrbx">
                                        <Link to="#">1</Link>
                                        <Link to="#" class="active">2 - 3</Link>
                                        <Link to="#">4 - 6</Link>
                                        <Link to="#">7 - 9</Link>
                                        <Link to="#">10 - 12</Link>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card-info">
                                <div class="card-bg pb-4">
                                  <div class="profile_pic text-center frst">
                                    <img class=" img-fluid img-circle" src={process.env.PUBLIC_URL+'/assets/img/booking3.png'} alt="card image3"/>
                                  </div>
                                  <div class="card-body">  
                                    <h3 class="media-heading text-center">Kid’s Details</h3>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1" class="txtlabel">Area of interest</label>
                                        <select id="inputState" class="form-control txtinput mb40">
                                            <option selected>Lorem Ipsum</option>
                                            <option>Lorem Ipsum</option>
                                            <option>Lorem Ipsum</option>
                                            <option>Lorem Ipsum</option>
                                         </select>
                                    </div>
                                    <div class="spanlist">
                                        <p>UI Design Tools&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fas fa-times"></i></span></p>
                                        <p>Testing&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fas fa-times"></i></span></p>
                                        <p>Mean Stack Development&nbsp;&nbsp;&nbsp;&nbsp;<span><i class="fas fa-times"></i></span></p>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 text-center py-4">
                            <button type="button" class="btn btn-info btn-cart btnbokk" data-toggle="modal" data-target="#bookedfree">Request a free trial</button>
                        </div>
                    </div>
                </div>
            </section>
            <div class="modal fade greymodal" id="bookedfree" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog" role="document">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Success</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><img src={process.env.PUBLIC_URL+'/assets/img/crossicon.png'} alt=""/></span>
                        </button>
                     </div>
                     <div class="modal-body">
                        <h3>Booked a free trial<br/> successfully !!</h3>
                        <p>You will get an email confirmation<br/> from us soon.</p>
                        <button type="submit" class="btn btn-primary sndmsg">OK</button>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );
    }
}

export default BookFreeTrail;