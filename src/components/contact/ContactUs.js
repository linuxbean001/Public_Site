import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
class ContactUs extends Component {
    render() {
        return (
            <div>
            <section class="banner" id="cntctbanner">
              <div class="container">
                  <div class="row mb40">
                      <div class="col-md-12">
                          <h2>Contact Us</h2>
                          <p>Connect with dedicated experts | Get immediate assistance | Raise all your queries</p>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-6 boxcntct">
                          <img src={process.env.PUBLIC_URL+'/assets/img/phone.png'} alt=""/>
                          <p><span>Call us at</span><br/><b>+1 123345667788</b></p>
                      </div>
                      <div class="col-md-6 boxcntct">
                          <img src={process.env.PUBLIC_URL+'/assets/img/msg.png'} alt=""/>
                          <p><b>Write to us</b><br/><span>Response time: less than 24 hours</span></p>
                      </div>
                  </div>
              </div>
          </section>
          <section class="formsec">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12">
                          <h2>Send us a message</h2>
                          <form>
                            <div class="form-row">
                              <div class="col">
                                 <label for="exampleInputEmail1" class="txtlabel">Your Name</label>
                                 <input type="text" class="form-control txtinput" placeholder="Lorem Ipsum"/>
                                 <label for="exampleInputEmail1" class="txtlabel">Your Email</label>
                                 <input type="email" class="form-control txtinput" placeholder="Lorem Ipsum"/>
                                 <label for="exampleInputEmail1" class="txtlabel">Your Contact Number</label>
                                 <input type="email" class="form-control txtinput" placeholder="Lorem Ipsum"/>
                              </div>
                              <div class="col">
                                  <label for="exampleFormControlTextarea1" class="txtlabel">Your Message</label>
                                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                              </div>
                            </div>
                            <button type="submit" class="btn btn-primary sndmsg">Send Message</button>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
          </div>
        );
    }
}

export default ContactUs;