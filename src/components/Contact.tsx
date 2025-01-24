import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="section" id="contact">
      <div className="container has-background-grey-lighter">
        <h2 className="title has-text-centered">Open for Opportunities</h2>
        

        <div className="columns is-centered">
          <div className="column is-half">
           

              <div className="content">
              <p>
                  <strong>Location: Middletown, Delaware.</strong>
                </p>
                <p>
                  <strong>Email:</strong> 
                  <a href="mailto:lakshmipriya.skm@gmail.com">lakshmipriya.skm@gmail.com</a>
                </p>

                <p>
                  <strong>LinkedIn:</strong> 
                  <a href="https://www.linkedin.com/in/lakshmipriya-sivakumar" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/lakshmipriya-sivakumar
                  </a>
                </p>

                <p>
                  <strong>GitHub:</strong> 
                  <a href="https://github.com/PriyaSentil20" target="_blank" rel="noopener noreferrer">
                    github.com/PriyaSentil20
                  </a>
                </p>
              </div>
            </div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;
