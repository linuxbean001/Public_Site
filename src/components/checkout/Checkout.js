import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Checkout extends Component {
   constructor(props) {  
        super(props);  
        this.state = {  
            open: false,  
        };  
        this.togglebutton = this.togglebutton.bind(this);  
   }  
   togglebutton() {  
        const { open } = this.state;  
        this.setState({  
            open: !open,  
        });  
   }
    render() {
        return (
            <div>
            <section class="banner" id="mycart">
                  <div class="container">
                     <div class="row">
                  <div class="col-md-2">
                     <Link to="/curriculums" class="backbutton" style={{'margin-top': '10px'}}><span><img src={process.env.PUBLIC_URL+'/assets/img/backarrow.png'} alt=""/></span>All Curriculums</Link>
                  </div>
                  <div class="col-md-10">
                    <h2>Buy a Curriculum</h2>
                  </div>
                     </div>
                  </div>
               </section>
               <section>
                  <div class="container">
                  <div class="row">
                     <div class="col-md-9">
                        <div class="checkoutrow">
                           <div class="row">
                              <div class="col-md-4">
                                 <p><span>1</span>LOGIN <i class="fa fa-check-circle"></i><b>James Manchester</b></p>
                              </div>
                              <div class="col-md-3">
                                 <p>James_Manchester@gmail.com</p>
                              </div>
                              <div class="col-md-5">
                                 <button type="button" class="btn btn-info btn-checkout">Change</button>
                              </div>
                           </div>
                        </div>
                        <div class={(this.state.open) ? 'checkoutrow circulam paymentoption':'checkoutrow circulam'}>
                           <div class="row">
                              <div class="col-md-12 activecheck">
                                 <p><span>2</span>CURRICULUM DETAILS</p>
                              </div>
                              <div class="col-md-12 hiddenrw" style={{display:(this.state.open? 'none':'block')}}>
                                 <div class="flexbox">
                                    <div class="checkphtshp">
                                       <img src={process.env.PUBLIC_URL+'/assets/img/checkphtshp.png'} alt=""/>
                                    </div>
                                    <div class="headings">
                                       <p><b>Adobe Photoshop Basics : Level 1</b></p>
                                       <p><img src={process.env.PUBLIC_URL+'/assets/img/face.png'} alt=""/> 8-15 Years</p>
                                       <p>Class Type: <b>Individual Session</b></p>
                                    </div>
                                    <div class="bgtext">
                                       <p>Complete Package</p>
                                       <p><b>$ 299.00</b>&nbsp;<del>$ 399.00</del></p>
                                    </div>
                                 </div>
                                 <button type="button" class="btn btn-info btn-cart" id="cntnue" onClick={this.togglebutton}>Continue</button>
                              </div>
                           </div>
                        </div>
                        <div class={(this.state.open) ? 'checkoutrow':'checkoutrow paymentoption'}>
                           <div class="row">
                              <div class="col-md-12 activecheck">
                                 <p><span>3</span>PAYMENT OPTIONS</p>
                              </div>
                              <div class="col-md-12 pymnt" style={{display:(this.state.open? 'block':'none')}}>
                                 <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>&nbsp;
                                    <label class="form-check-label chcklbl" for="inlineRadio1">Wallets</label>
                                 </div>
                                 <hr/>
                                 <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked/>&nbsp;
                                    <label class="form-check-label chcklbl" for="inlineRadio1">Credit / Debit / ATM Card</label>
                                 </div>
                                 <div class="form-row">
                                    <div class="form-group col-md-6">
                                       <label for="exampleInputEmail1" class="txtlabel">Name on card</label>
                                       <input type="text" class="form-control txtinput" placeholder="lorem ipsum"/><br/>
                                       <div class="form-row">
                                          <div class="form-group col-md-3">
                                             <label for="exampleInputEmail1" class="txtlabel">Valid Till</label>
                                             <select id="inputState" class="form-control txtinput">
                                                <option selected="">MM</option>
                                                <option>MM</option>
                                             </select>
                                          </div>
                                          <div class="form-group col-md-3">
                                             <select id="inputState" class="form-control txtinput mt30">
                                                <option selected="">YY</option>
                                                <option>YY</option>
                                             </select>
                                          </div>
                                          <div class="form-group col-md-6">
                                          </div>
                                       </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                       <label for="exampleInputEmail1" class="txtlabel">Card Number</label>
                                       <input type="text" class="form-control txtinput" placeholder="lorem ipsum"/><br/>
                                       <div class="form-row">
                                          <div class="form-group col-md-3">
                                             <label for="exampleInputEmail1" class="txtlabel">CVV</label>
                                             <select id="inputState" class="form-control txtinput">
                                                <option selected="">XXX</option>
                                                <option>XXX</option>
                                             </select>
                                          </div>
                                          <div class="form-group col-md-9">
                                             <div class="form-check mt30">
                                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked/>
                                                <label class="form-check-label txtlabel" for="defaultCheck1">
                                                Remember this card
                                                </label>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <button type="button" class="btn btn-info btn-cart btnbokk" data-toggle="modal" data-target="#orderplaced">Place Order</button>
                                    <hr/>
                                    <div class="form-check form-check-inline "> 
                                       <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>&nbsp;
                                       <label class="form-check-label chcklbl" for="inlineRadio1">PayPal</label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-3">
                           <div class="checkoutrow price_detalis">
                              <div class="row">
                                 <div class="col-md-12">
                                    <h2>Price Details</h2>
                                    <hr/>
                                    <p>Curriculum Price<span>$299.00</span></p>
                                    <p>Tax<span>$10.00</span></p>
                                    <p>Discount<span>$00.00</span></p>
                                    <hr/>
                                    <p>Total Payable<span>$309.00</span></p>
                                 </div>
                              </div>
                           </div>
                           <div class="flexbox detailprce">
                              <div class="checkphtshp">
                                 <img src={process.env.PUBLIC_URL+'/assets/img/verified.png'} alt=""/>
                              </div>
                              <p>Safe and secure payments<br/>Need Help? Visit <Link to="/contact-us">Contact Us</Link></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <div class="modal fade greymodal" id="orderplaced" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                     <div class="modal-content">
                        <div class="modal-header">
                           <h5 class="modal-title" id="exampleModalLabel">Success</h5>
                           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true"><img src={process.env.PUBLIC_URL+'/assets/img/crossicon.png'} alt=""/></span>
                           </button>
                        </div>
                        <div class="modal-body">
                           <h3>Curriculum Purchased<br/> Successfully !!</h3>
                           <p>Please check your Email for the details</p>
                           <button type="submit" class="btn btn-primary sndmsg">OK</button>
                        </div>
                     </div>
                  </div>
               </div>
          </div>
        );
    }
}

export default Checkout;