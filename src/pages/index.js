import React from "react";
import Head from "next/head";
import Script from "next/script";


const Home = () => {
 

  return (
    <>
      {/* Masthead*/}
      <header className="masthead">
        <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-0 text-uppercase bg-warning">PED</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">WE'RE EVENTS!</h2>
              <a className="btn btn-primary" href="#about">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* About*/}
      <section className="about-section text-center" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8">
              <h2 className="text-white mb-4">About Us</h2>
              <p className="text-white-50">
                Welcome to Patrick Events and Decor, where we transform events
                into unforgettable experiences through our exceptional decor
                services. With a passion for creativity and an unwavering
                commitment to excellence, we take pride in making every occasion
                special.
                <a href="https://startbootstrap.com/theme/grayscale/">
                  the preview page.
                </a>
              </p>
            </div>
          </div>
          <img
            className="img-fluid"
            src="assets/images/landing2.jpg"
            alt="..."
          />
        </div>
      </section>
      {/* Projects*/}
      <section className="projects-section bg-light" id="projects">
        {/*<div className="container px-4 px-lg-5">*/}
        {/* Featured Project Row*/}
        {/*
      <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
        <div className="col-xl-8 col-lg-7">
          <img
            className="img-fluid mb-3 mb-lg-0"
            src="assets/images/decor1.jpg"
            alt="..."
          />
        </div>
        <div className="col-xl-4 col-lg-4">
        <img
          className="img-fluid mb-3 mb-lg-0"
          src="assets/images/decor2.jpg"
          alt="Service 2"
        />
      </div>
        <div className="col-xl-4 col-lg-5">
          <div className="featured-text text-center text-lg-left">
            <h4>OUR SERVICES</h4>
            <p className="text-black-50 mb-0">
            At Patrick Events & Decor, we specialize in delivering top-notch 
            launch services tailored to make your product or service introduction unforgettable. Our comprehensive launch services ensure every aspect of your event is meticulously planned and executed, creating a lasting impression on your audience. Here's what our launch services include:
            </p>
          </div>
        </div>
      </div>
  */}
        <div className="row mt-4">
          <div className="col-md-8 offset-md-2">
            <div className="lc-block">
              <div
                id="testimonial-slider"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                {/* Indicators */}
                <ul className="carousel-indicators list-unstyled">
                  <li
                    data-bs-target="#testimonial-slider"
                    data-bs-slide-to={0}
                    className="active"
                  />
                  <li
                    data-bs-target="#testimonial-slider"
                    data-bs-slide-to={1}
                  />
                  <li
                    data-bs-target="#testimonial-slider"
                    data-bs-slide-to={2}
                  />
                </ul>
                {/* The slideshow */}
                <div className="carousel-inner">
                  <div className="carousel-item ">
                    <img src="assets/images/decor-event3.jpg" alt="" />
                    <div className="carousel-caption text-white">
                      <p editable="inline">
                        At Patrick Events & Decor, we specialize in delivering
                        top-notch launch services tailored to make your product
                        or service introduction unforgettable. Our comprehensive
                        launch services ensure every aspect of your event is
                        meticulously planned and executed, creating a lasting
                        impression on your audience. Here's what our launch
                        services include:
                      </p>
                      <h5 editable="inline">
                        <strong>Our Service</strong>
                      </h5>
                      <small editable="inline" style={{ letterSpacing: 1 }}>
                        PED.&nbsp;
                      </small>
                    </div>
                  </div>
                  <div className="carousel-item active">
                    <img src="assets/images/decor-launch3.jpg" alt=" " />
                    <div className="carousel-caption text-white">
                      <p editable="inline">
                        <ul>
                          <li>
                            <strong>Concept Development:</strong> We work
                            closely with you to understand your vision and
                            develop a unique concept that aligns with your
                            brand's identity and objectives.
                          </li>
                          <li>
                            <strong>Event Planning and Management:</strong> From
                            selecting the perfect venue to coordinating with
                            vendors, our team handles all the logistics to
                            ensure your launch event runs smoothly.
                          </li>
                          <li>
                            <strong>Creative Design:</strong> Our expert
                            designers create stunning visuals and themes that
                            captivate your audience and effectively communicate
                            your brand message.
                          </li>
                        </ul>
                      </p>
                      <h5 editable="inline">
                        <strong>Launch Service</strong>
                      </h5>
                      <small editable="inline" style={{ letterSpacing: 1 }}>
                        PED.&nbsp;
                      </small>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <img src="assets/images/corporate-lighting.jpg" alt="" />
                    <div className="carousel-caption text-white">
                      <p editable="inline">
                        <ul>
                          <li>
                            <strong>Technical Support:</strong> We provide
                            cutting-edge technical solutions, including
                            audio-visual equipment, lighting, and stage setups,
                            to enhance the overall experience of your launch
                            event.
                          </li>
                          <li>
                            <strong>Promotional Activities:</strong> We assist
                            in developing and executing effective marketing
                            strategies to generate buzz and attract the right
                            audience for your launch.
                          </li>
                          <li>
                            <strong>On-site Coordination:</strong> Our
                            experienced coordinators are on-site to manage every
                            detail, ensuring your event is seamless and
                            successful.
                          </li>
                        </ul>
                      </p>
                      <h5 editable="inline">
                        <strong>Launching Services</strong>
                      </h5>
                      <small editable="inline" style={{ letterSpacing: 1 }}>
                        PED.&nbsp;
                      </small>
                    </div>
                  </div>
                </div>
                {/* Left and right controls */}
                <a
                  className="carousel-control-prev"
                  href="#testimonial-slider"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" />
                </a>
                <a
                  className="carousel-control-next"
                  href="#testimonial-slider"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Project One Row*/}
          <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="assets/images/chairs2.jpg"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <div className="bg-danger text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">TENT & CHAIRS</h4>
                    <p className="mb-0 text-white-50">
                      We create the perfect atmosphere for your event with our
                      extensive range of tents and chairs. Whether it's an
                      intimate gathering or a grand celebration, we have the
                      right selection to meet your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Project Two Row*/}
          <div className="row gx-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="assets/images/light5.jpg"
                alt="..."
              />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-danger text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">LIGHTING SERVICES</h4>
                    <p className="mb-0 text-white-50">
                      Illuminate your event with our breathtaking lighting
                      solutions. From elegant ambient lighting to vibrant color
                      display, we bring your vision to life and set the mood for
                      an enchanting experience!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*project 3 */}
          <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="assets/images/gallery-event.jpg"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <div className="bg-danger text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">AUDIO VISUAL SERVICES</h4>
                    <p className="mb-0 text-white-50">
                      Ensure your message is heard and clear with our
                      state-of-art public address systems. Elevate your event
                      with captivating visual solutions, including screens and
                      display, to engage and entertain your audience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*project 4 */}
          <div className="row gx-0 justify-content-center">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="assets/images/gallery-wed2.jpg"
                alt="..."
              />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-danger text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">PHOTOGRAPH & VIDEOGRAPHY</h4>
                    <p className="mb-0 text-white-50">
                      Capture the moments that matter with our professional
                      photography and videography services. Our skilled team
                      ensures every detail is preserved, allowing you to relive
                      the magic of your event for tears to come!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery grid */}
      <section className="gallery-section" id="gallery">
        <div className="row">
          <div className="col-lg-12 text-center my-2">
            <h4>Our Gallery</h4>
          </div>
        </div>
        <div className="portfolio-menu mt-2 mb-4">
          <ul>
            <li className="btn btn-outline-dark active" data-filter="*">
              All
            </li>
            <li className="btn btn-outline-dark" data-filter=".prop">
              Proposal
            </li>
            <li className="btn btn-outline-dark" data-filter=".chair">
              Chairs-Setup
            </li>
            <li className="btn btn-outline-dark text" data-filter=".corp">
              Corporate
            </li>
          </ul>
        </div>
        <div className="portfolio-item row">
          <div className="item corp col-lg-3 col-md-4 col-6 col-sm">
            <img
              className="img-fluid"
              src="/assets/images/corporate-landing.jpg"
            />
          </div>
          <div className="item corp col-lg-3 col-md-4 col-6 col-sm">
            <img className="img-fluid" src="/assets/images/corp3.jpg" alt="" />
          </div>
          <div className="item corp col-lg-3 col-md-4 col-6 col-sm">
            <img className="img-fluid" src="/assets/images/corp4.jpg" alt="" />
          </div>
          <div className="item corp col-lg-3 col-md-4 col-6 col-sm">
            <img className="img-fluid" src="/assets/images/corp5.jpg" alt="" />
          </div>
          <div className="item prop col-lg-3 col-md-4 col-6 col-sm">
            <img
              className="img-fluid"
              src="/assets/images/proposal.jpg"
              alt=""
            />
          </div>
          <div className="item prop col-lg-3 col-md-4 col-6 col-sm">
            <img className="img-fluid" src="/assets/images/wed.jpg" alt="" />
          </div>
          <div className="item prop col-lg-3 col-md-4 col-6 col-sm">
            <img
              className="img-fluid"
              src="/assets/images/gallery-wed2.jpg"
              alt=""
            />
          </div>
          <div className="item prop col-lg-3 col-md-4 col-6 col-sm">
            <img className="img-fluid" src="/assets/images/wed5.jpg" alt="" />
          </div>
          <div className="item chair col-lg-3 col-md-4 col-6 col-sm">
            <img className="img-fluid" src="/assets/images/chairs.jpg" alt="" />
          </div>
          <div className="item chair col-lg-3 col-md-4 col-6 col-sm">
            <img className="img-fluid" src="/assets/images/chair1.jpg" alt="" />
          </div>
          <div className="item chair col-lg-3 col-md-4 col-6 col-sm">
            <img className="img-fluid" src="/assets/images/chair2.jpg" alt="" />
          </div>
          <div className="item chair col-lg-3 col-md-4 col-6 col-sm">
            <img className="img-fluid" src="/assets/images/chair3.jpg" alt="" />
          </div>
          <div className="item corp col-lg-3 col-md-4 col-6 col-sm">
            <img className="img-fluid" src="/assets/images/chair3.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="contact-section bg-gold">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">Mountain View</div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">
                    <a href="#!">patrickevents2020@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2" />
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4 mx-auto" />
                  <div className="small text-black-50">+254 728 697 000</div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href="#!">
              <i className="fab fa-twitter" />
            </a>
            <a className="mx-2" href="#!">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="mx-2" href="#!">
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
