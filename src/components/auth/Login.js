import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <div>
            <div class="modal fade greymodal" id="loginmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog" role="document">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><img src={process.env.PUBLIC_URL+'/assets/img/crossicon.png'} alt=""/></span>
                        </button>
                     </div>
                     <div class="modal-body">
                        <h3>Login to Continue</h3>
                        <div class="form-group">
                           <div class="col">
                              <label for="exampleInputEmail1" class="txtlabel">Your Email</label>
                              <input type="email" class="form-control txtinput" placeholder="Lorem Ipsum"/>
                              <label for="exampleInputEmail1" class="txtlabel">Password</label>
                              <input type="password" class="form-control txtinput" placeholder="********"/>
                           </div>
                        </div>
                        <button type="submit" class="btn btn-primary sndmsg">Login</button>
                     </div>
                     <div class="modal-footer">
                        <p>Do not have an account? <Link aria-hidden="true" data-toggle="modal" data-target="#register">Register</Link></p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );
    }
}

export default Login;