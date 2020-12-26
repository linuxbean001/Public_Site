import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MyCart extends Component {
    render() {
        return (
            <div>
            <section class="banner" id="mycart">
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <h2>My Cart</h2>
                     </div>
                  </div>
               </div>
            </section>
            <section>
               <div class="container">
                  <div class="row">
                     <div class="col-md-12">
                        <p class="crttxt pd50 mb40">You have the following items pending for checkout !</p>
                     </div>
                  </div>
                  <div class="row cartrow mb40">
                     <div class="col-md-6">
                        <p class="inlinetext"><img src={process.env.PUBLIC_URL+'/assets/img/ps.png'} class="profile-avatar" alt=""/> Adobe Photoshop Advanced : Level 1</p>
                     </div>
                     <div class="col-md-3">
                        <p class="inlinetext pt10"><span>Total Payable:</span>$309.00</p>
                     </div>
                     <div class="col-md-3">
                        <p class="inlinetext pt10"><Link to="/checkout"><button type="button" class="btn btn-info btn-cart">Checkout</button></Link></p>
                     </div>
                  </div>
                  <div class="row cartrow mb40">
                     <div class="col-md-6">
                        <p class="inlinetext"><img src={process.env.PUBLIC_URL+'/assets/img/ps.png'} class="profile-avatar" alt=""/> Adobe Photoshop Advanced : Level 2</p>
                     </div>
                     <div class="col-md-3">
                        <p class="inlinetext pt10"><span>Total Payable:</span>$309.00</p>
                     </div>
                     <div class="col-md-3">
                        <p class="inlinetext pt10"><Link to="/checkout"><button type="button" class="btn btn-info btn-cart">Checkout</button></Link></p>
                     </div>
                  </div>
                  <div class="row cartrow mb40">
                     <div class="col-md-6">
                        <p class="inlinetext"><img src={process.env.PUBLIC_URL+'/assets/img/ps.png'} class="profile-avatar" alt=""/> Adobe Photoshop Advanced : Level 3</p>
                     </div>
                     <div class="col-md-3">
                        <p class="inlinetext pt10"><span>Total Payable:</span>$309.00</p>
                     </div>
                     <div class="col-md-3">
                        <p class="inlinetext pt10"><Link to="/checkout"><button type="button" class="btn btn-info btn-cart">Checkout</button></Link></p>
                     </div>
                  </div>
                  <div class="row cartrow mb40">
                     <div class="col-md-6">
                        <p class="inlinetext"><img src={process.env.PUBLIC_URL+'/assets/img/ps.png'} class="profile-avatar" alt=""/> Adobe Photoshop Advanced : Level 4</p>
                     </div>
                     <div class="col-md-3">
                        <p class="inlinetext pt10"><span>Total Payable:</span>$309.00</p>
                     </div>
                     <div class="col-md-3">
                        <p class="inlinetext pt10"><Link to="/checkout"><button type="button" class="btn btn-info btn-cart">Checkout</button></Link></p>
                     </div>
                  </div>
               </div>
            </section>
          </div>
        );
    }
}

export default MyCart;