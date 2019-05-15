import React, { Component } from 'react';
import Form from "./form";

class Main extends Component {
  render() {
    return (
      <main>
       
     
        <section className="intro">
            <h2>About Us</h2>
            <div>
             <p>Jatin Cinemas is an Australian-based film exhibition brand that mainly shows blockbuster, mainstream, children and family films and some arthouse, foreign language and documentary films.</p>
            </div>
        </section>

        <div>
             <div className="services">
                <div className="service-one">
                <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                <p className="service-title">Session Timings</p>
                <p>Please check the session timings and booking availability before heading towards theater for convinience.</p>
                </div>
                <div className="service-two">
                <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                <p className="service-title">Booking</p>
                <p>Now you can pay online to avoid queuing. </p>
            
                </div>
                <div className="service-three">
                <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                <p className="service-title">Car Park</p>
                <p>We have 3 levels of basement car park which is filled on first come first serve basis.</p>
              
          </div>
        </div>

            </div>


        
        <div className="gallery">
         <div className="gallery-item-one"></div>
         <div className="gallery-item-two"></div>
         <div className="gallery-item-three"></div>
         <div className="gallery-item-four"></div>
         <div className="gallery-item-five"></div>
         <div className="gallery-item-six"></div>
         
        </div>

        <section>
            <h2>Our Shows</h2>
            <div>
              <p>Comedy, Thriller, Action, Romance,Horror, Fantasy, Historical, Drama, Crime, Adventure. You name it, we have it all.  </p>
              <p>We have best quality of surround sound Audio with 4K HDR digital video projection.</p>
              </div>
        </section>


        <section>
            <h2>Contact Us</h2>
            <Form />
          
        </section>

       
      </main>
    );
  }
}

export default Main;
