import React from "react";
import emailjs from "@emailjs/browser"

const CalltoActionSection = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4a8mpyb', 'template_1m31dbn', e.target, 'gj57GC2WEQCAz4jER')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>NEWS LETTER</h2>
              <p>Sign up free and get the latest tips.</p>
              <form className="form-section" onSubmit={sendEmail}>
                <input placeholder="Your Email..." name="email" type="email" />
                <input value="SUBMIT !" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
