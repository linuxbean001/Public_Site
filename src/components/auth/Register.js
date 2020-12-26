import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Register extends Component {
    render() {
        return (
            <div>
            <div class="modal fade greymodal" id="register" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog" role="document">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Register</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><img src={process.env.PUBLIC_URL+'/assets/img/crossicon.png'} alt=""/></span>
                        </button>
                     </div>
                     <div class="modal-body">
                        <div class="row">
                           <div class="col-md-4">
                              <img src={process.env.PUBLIC_URL+'/assets/img/register.png'} alt="" class="w100 h100"/>
                           </div>
                           <div class="col-md-8">
                              <h3>Register & Start Learning</h3>
                              <div class="form-row">
                                 <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="txtlabel">Parent’s Email id</label>
                                    <input type="text" class="form-control txtinput" placeholder="lorem ipsum"/>
                                 </div>
                                 <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="txtlabel">Parent’s Name</label>
                                    <input type="text" class="form-control txtinput" placeholder="lorem ipsum"/>
                                 </div>
                              </div>
                              <div class="form-row">
                                 <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="txtlabel">Parent’s Mobile</label>
                                    <input type="text" class="form-control txtinput" placeholder="1234567890"/>
                                 </div>
                                 <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="txtlabel">Kid’s Name</label>
                                    <input type="text" class="form-control txtinput" placeholder="1234567890"/>
                                 </div>
                              </div>
                              <div class="form-row">
                                 <div class="form-group col-md-12">
                                    <label for="exampleInputEmail1" class="txtlabel">Parent’s Mobile</label>
                                    <div class="nbmrbx">
                                       <Link to="#">Grade<br/>1</Link>
                                       <Link to="#" class="active">Grade<br/>2 - 3</Link>
                                       <Link to="#">Grade<br/>4 - 6</Link>
                                       <Link to="#">Grade<br/>7 - 9</Link>
                                       <Link to="#">Grade<br/>10 - 12</Link>
                                    </div>
                                 </div>
                              </div>
                              <div class="form-row">
                                 <div class="form-group col-md-12">
                                    <label for="exampleInputEmail1" class="txtlabel">Area of interest</label>
                                    <select id="inputState" class="form-control txtinput mb40">
                                       <option selected="">Lorem Ipsum</option>
                                       <option>Lorem Ipsum</option>
                                       <option>Lorem Ipsum</option>
                                       <option>Lorem Ipsum</option>
                                    </select>
                                 </div>
                              </div>
                              <div class="form-row">
                                 <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="txtlabel">Password</label>
                                    <input type="text" class="form-control txtinput" placeholder="**********"/>
                                 </div>
                                 <div class="form-group col-md-6">
                                    <label for="exampleInputEmail1" class="txtlabel">Confirm Password</label>
                                    <input type="text" class="form-control txtinput" placeholder="**********"/>
                                 </div>
                              </div>
                              <button type="submit" class="btn btn-primary sndmsg">Register</button>
                              <p>By clicking Register, you agree to our <Link to="#">Terms of Use and Privacy Policy</Link></p>
                           </div>
                        </div>
                     </div>
                     <div class="modal-footer">
                        <p>Already have an account? <Link aria-hidden="true" data-toggle="modal" data-target="#loginmodal">Login</Link></p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );
    }
}

export default Register;