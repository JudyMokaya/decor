import React from "react"
import Head from "next/head"
import Script from "next/script"
import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js';
    script.async = true;
    script.onload = () => {
      const isotopeScript = document.createElement('script');
      isotopeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js';
      isotopeScript.async = true;
      isotopeScript.onload = () => {
        // Initialize Isotope after the script is loaded
        const $ = window.jQuery;
        const $grid = $('.portfolio-item').isotope({
          itemSelector: '.item',
          layoutMode: 'fitRows'
        });

        $('.portfolio-menu ul li').click(function () {
          $('.portfolio-menu ul li').removeClass('active');
          $(this).addClass('active');

          const selector = $(this).attr('data-filter');
          $grid.isotope({ filter: selector });
          return false;
        });
      };
      document.body.appendChild(isotopeScript);
    };
    document.body.appendChild(script);
  }, []);

  return (
<>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>PATRICK EVENTS & DECOR</title>
  <link rel="icon" type="image/x-icon" href="assets/images/pic1.JPG" />
  {/* Font Awesome icons (free version)*/}
  {/* Google fonts*/}
  <link
    href="https://fonts.googleapis.com/css?family=Varela+Round"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
    rel="stylesheet"
  />
 {/*<!-- Add this in the head section -->*/}
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

  {/* Core theme CSS (includes Bootstrap)*/}
  <link href="css/styles.css" rel="stylesheet" />
  {/* Navigation*/}
  <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div className="container px-4 px-lg-5">
      <a className="navbar-brand" href="#page-top">
        PATRICK EVENTS & DECOR
      </a>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallery">
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#signup">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Masthead*/}
  <header className="masthead">
    <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <h1 className="mx-auto my-0 text-uppercase">PED</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            WE'RE EVENTS!
          </h2>
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
            Welcome to Patrick Events and Decor, where we transform events into unforgettable experiences through our exceptional
            decor services. With a passion for creativity and an unwavering commitment to excellence, 
            we take pride in making every occasion special.

            <a href="https://startbootstrap.com/theme/grayscale/">
              the preview page.
            </a>
          </p>
        </div>
      </div>
      <img className="img-fluid" src="assets/images/landing2.jpg" alt="..." />
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
          <li data-bs-target="#testimonial-slider" data-bs-slide-to={1} />
          <li data-bs-target="#testimonial-slider" data-bs-slide-to={2} />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item ">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=768&fit=crop&ixid=eyJhcHBfaWQiOjM3ODR9"
              alt="Photo by Christopher Campbell"
            />
            <div className="carousel-caption text-white">
              <p editable="inline">
              At Patrick Events & Decor, we specialize in delivering top-notch 
              launch services tailored to make your product or service introduction unforgettable. Our comprehensive launch services ensure every aspect of your event is meticulously planned and executed, creating a 
              lasting impression on your audience. Here's what our launch services include:
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
            <img
              src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=768&fit=crop&ixid=eyJhcHBfaWQiOjM3ODR9"
              alt="Photo by averie woodard"
            />
            <div className="carousel-caption text-white">
              <p editable="inline">
              <ul>
            <li><strong>Concept Development:</strong> We work closely with you to understand your vision and develop a unique concept that aligns with your brand's identity and objectives.</li>
            <li><strong>Event Planning and Management:</strong> From selecting the perfect venue to coordinating with vendors, our team handles all the logistics to ensure your launch event runs smoothly.</li>
            <li><strong>Creative Design:</strong> Our expert designers create stunning visuals and themes that captivate your audience and effectively communicate your brand message.</li>
          </ul>
              </p>
              <h5 editable="inline">
                <strong>Lauch Service</strong>
              </h5>
              <small editable="inline" style={{ letterSpacing: 1 }}>
                PED.&nbsp;
              </small>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src="https://images.unsplash.com/photo-1471017851983-fc49d89c57c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&h=768&fit=crop&ixid=eyJhcHBfaWQiOjM3ODR9"
              alt="Photo by Jens Lindner"
            />
            <div className="carousel-caption text-white">
              <p editable="inline">
              <ul>
            <li><strong>Technical Support:</strong> We provide cutting-edge technical solutions, including audio-visual equipment, lighting, and stage setups, to enhance the overall experience of your launch event.</li>
            <li><strong>Promotional Activities:</strong> We assist in developing and executing effective marketing strategies to generate buzz and attract the right audience for your launch.</li>
            <li><strong>On-site Coordination:</strong> Our experienced coordinators are on-site to manage every detail, ensuring your event is seamless and successful.</li>
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
  {/* /col */}
{/*</div>*/}

      {/* Project One Row*/}
      <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
        <div className="col-lg-6">
          <img
            className="img-fluid"
            src="assets/images/decor5.jpg"
            alt="..."
          />
        </div>
        <div className="col-lg-6">
          <div className="bg-dark text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">TENT & CHAIRS</h4>
                <p className="mb-0 text-white-50">
                  We create the perfect atmosphere for your eventwith our extensive range of
                  tents and chairs. Whether it's an intimate gathering or a grand celebration,
                   we have the right selection to meet your needs.
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
            src="assets/images/demo-image-02.jpg"
            alt="..."
          />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-dark text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">LIGHTING SERVICES</h4>
                <p className="mb-0 text-white-50">
                  Illuminate your event with our breathtaking lighting solutions.
                  From elegant ambient lighting to vibrant color display, we bring your
                   vision to life and set the mood for an enchanting experience!
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
            src="assets/images/demo-image-01.jpg"
            alt="..."
          />
        </div>
        <div className="col-lg-6">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-left">
                <h4 className="text-white">AUDIO VISUAL SERVICES</h4>
                <p className="mb-0 text-white-50">
                  Ensure your message is heard and clear with our state-of-art public address systems. 
                  Elevate your event with captivating visual solutions, including screens and 
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
            src="assets/images/demo-image-02.jpg"
            alt="..."
          />
        </div>
        <div className="col-lg-6 order-lg-first">
          <div className="bg-black text-center h-100 project">
            <div className="d-flex h-100">
              <div className="project-text w-100 my-auto text-center text-lg-right">
                <h4 className="text-white">PHOTOGRAPH & VIDEOGRAPHY</h4>
                <p className="mb-0 text-white-50">
                  Capture the moments that matter with our professional photography and videography services. Our skilled 
                  team ensures every detail is preserved, allowing you to relive the magic of your event for tears to come!
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
        <li className="btn btn-outline-dark" data-filter=".gts">
          Girls T-shirt
        </li>
        <li className="btn btn-outline-dark" data-filter=".lap">
          Laptops
        </li>
        <li className="btn btn-outline-dark text" data-filter=".selfie">
          selfie
        </li>
      </ul>
    </div>
    <div className="portfolio-item row">
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/stylish-young-woman-with-bags-taking-selfie_23-2147962203.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/pretty-girl-near-car_1157-16962.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/pretty-girl-near-car_1157-16962.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/blonde-tourist-taking-selfie_23-2147978899.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/blonde-tourist-taking-selfie_23-2147978899.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/cute-girls-oin-studio_1157-18211.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/stylish-pin-up-girls_1157-18451.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/stylish-pin-up-girls_1157-18451.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/stylish-pin-up-girl_1157-18940.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/stylish-pin-up-girl_1157-18940.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/digital-laptop-working-global-business-concept_53876-23438.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/digital-laptop-working-global-business-concept_53876-23438.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-psd/set-digital-devices-screen-mockup_53876-76507.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-psd/set-digital-devices-screen-mockup_53876-76507.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/young-brunette-woman-with-sunglasses-urban-background_1139-893.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/young-brunette-woman-with-sunglasses-urban-background_1139-893.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-psd/laptop-digital-device-screen-mockup_53876-76509.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-psd/laptop-digital-device-screen-mockup_53876-76509.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/young-woman-holding-pen-hand-thinking-while-writing-notebook_23-2148029424.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/young-woman-holding-pen-hand-thinking-while-writing-notebook_23-2148029424.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-psd/female-fashion-concept_23-2147643598.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-psd/female-fashion-concept_23-2147643598.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/girl-city_1157-16454.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/girl-city_1157-16454.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/elegant-lady-with-laptop_1157-16643.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/elegant-lady-with-laptop_1157-16643.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-psd/laptop-mock-up-lateral-view_1310-199.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-psd/laptop-mock-up-lateral-view_1310-199.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/portrait-young-woman_1303-10071.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/portrait-young-woman_1303-10071.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/beautiful-girl-near-wall_1157-16401.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/beautiful-girl-near-wall_1157-16401.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/woman-taking-photograph-her-boyfriend-enjoying-piggyback-ride-his-back_23-2147841613.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/woman-taking-photograph-her-boyfriend-enjoying-piggyback-ride-his-back_23-2147841613.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/girl-smiling-making-auto-photo-with-her-friends-around_1139-593.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/girl-smiling-making-auto-photo-with-her-friends-around_1139-593.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/multiracial-group-young-people-taking-selfie_1139-1032.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/multiracial-group-young-people-taking-selfie_1139-1032.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/business-woman-working-laptop_1388-67.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/business-woman-working-laptop_1388-67.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-psd/group-people-holding-laptop-mockup-charity_23-2148069565.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-psd/group-people-holding-laptop-mockup-charity_23-2148069565.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/portrait-young-cheerful-woman-headphones-sitting-stairs_1262-17488.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/portrait-young-cheerful-woman-headphones-sitting-stairs_1262-17488.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/celebration-concept-close-up-portrait-happy-young-beautiful-african-woman-black-t-shirt-smiling-with-colorful-party-balloon-yellow-pastel-studio-background_1258-934.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/celebration-concept-close-up-portrait-happy-young-beautiful-african-woman-black-t-shirt-smiling-with-colorful-party-balloon-yellow-pastel-studio-background_1258-934.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/pretty-woman-showing-arm-muscles_23-2148056021.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/pretty-woman-showing-arm-muscles_23-2148056021.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/blank-colorful-adhesive-notes-against-wooden-wall-with-office-stationeries-laptop_23-2148052717.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/blank-colorful-adhesive-notes-against-wooden-wall-with-office-stationeries-laptop_23-2148052717.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/happy-woman-having-video-call-using-laptop-office_23-2148056211.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/happy-woman-having-video-call-using-laptop-office_23-2148056211.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-psd/laptop-mockup-table-with-plants_23-2147955548.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-psd/laptop-mockup-table-with-plants_23-2147955548.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/blank-colorful-adhesive-notes-against-wooden-wall-with-office-stationeries-laptop_23-2148052717.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/blank-colorful-adhesive-notes-against-wooden-wall-with-office-stationeries-laptop_23-2148052717.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-psd/woman-using-laptop-smartphone_53876-76350.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-psd/woman-using-laptop-smartphone_53876-76350.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/attractive-young-woman-with-curly-hair-takes-selfie-posing-looking-camera_8353-6636.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/attractive-young-woman-with-curly-hair-takes-selfie-posing-looking-camera_8353-6636.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/young-couple-taking-selfie-mobile-phone-against-blue-background_23-2148056292.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/young-couple-taking-selfie-mobile-phone-against-blue-background_23-2148056292.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/close-up-blonde-woman-sitting-sofa-using-laptop-with-blank-white-screen_23-2148028738.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/close-up-blonde-woman-sitting-sofa-using-laptop-with-blank-white-screen_23-2148028738.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/group-happy-friends-taking-selfie-cellphone_23-2147859575.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/group-happy-friends-taking-selfie-cellphone_23-2147859575.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/joyful-pretty-girl-with-curly-hair-takes-selfie-mobile-phone_8353-6635.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/joyful-pretty-girl-with-curly-hair-takes-selfie-mobile-phone_8353-6635.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/attractive-young-woman-with-curly-hair-takes-selfie-posing-looking-camera_8353-6636.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/attractive-young-woman-with-curly-hair-takes-selfie-posing-looking-camera_8353-6636.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/multiracial-group-young-people-taking-selfie_1139-1032.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/multiracial-group-young-people-taking-selfie_1139-1032.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/two-smiling-girls-take-selfie-their-phones-posing-with-lollipops_8353-5600.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/two-smiling-girls-take-selfie-their-phones-posing-with-lollipops_8353-5600.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/female-friends-sitting-car-hood-taking-self-portrait_23-2147855623.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/female-friends-sitting-car-hood-taking-self-portrait_23-2147855623.jpg"
            alt=""
          />
        </a>
      </div>
      <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
        <a
          href="https://image.freepik.com/free-photo/two-smiling-girls-take-selfie-their-phones-posing-with-lollipops_8353-5600.jpg"
          className="fancylight popup-btn"
          data-fancybox-group="light"
        >
          <img
            className="img-fluid"
            src="https://image.freepik.com/free-photo/two-smiling-girls-take-selfie-their-phones-posing-with-lollipops_8353-5600.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  </section>
  {/* Signup*/}
  <section className="signup-section" id="signup">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5">
        <div className="col-md-10 col-lg-8 mx-auto text-center">
          <i className="far fa-paper-plane fa-2x mb-2 text-white" />
          <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
          {/* * * * * * * * * * * * * * * **/}
          {/* * * SB Forms Contact Form * **/}
          {/* * * * * * * * * * * * * * * **/}
          {/* This form is pre-integrated with SB Forms.*/}
          {/* To make this form functional, sign up at*/}
          {/* https://startbootstrap.com/solution/contact-forms*/}
          {/* to get an API token!*/}
          <form
            className="form-signup"
            id="contactForm"
            data-sb-form-api-token="API_TOKEN"
          >
            {/* Email address input*/}
            <div className="row input-group-newsletter">
              <div className="col">
                <input
                  className="form-control"
                  id="emailAddress"
                  type="email"
                  placeholder="Enter email address..."
                  aria-label="Enter email address..."
                  data-sb-validations="required,email"
                />
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-primary disabled"
                  id="submitButton"
                  type="submit"
                >
                  Notify Me!
                </button>
              </div>
            </div>
            <div
              className="invalid-feedback mt-2"
              data-sb-feedback="emailAddress:required"
            >
              An email is required.
            </div>
            <div
              className="invalid-feedback mt-2"
              data-sb-feedback="emailAddress:email"
            >
              Email is not valid.
            </div>
            {/* Submit success message*/}
            {/**/}
            {/* This is what your users will see when the form*/}
            {/* has successfully submitted*/}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center mb-3 mt-2 text-white">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">
                  https://startbootstrap.com/solution/contact-forms
                </a>
              </div>
            </div>
            {/* Submit error message*/}
            {/**/}
            {/* This is what your users will see when there is*/}
            {/* an error submitting the form*/}
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3 mt-2">
                Error sending message!
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* Contact*/}
  <section className="contact-section bg-black">
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5">
        <div className="col-md-4 mb-3 mb-md-0">
          <div className="card py-4 h-100">
            <div className="card-body text-center">
              <i className="fas fa-map-marked-alt text-primary mb-2" />
              <h4 className="text-uppercase m-0">Address</h4>
              <hr className="my-4 mx-auto" />
              <div className="small text-black-50">
                Mountain View
              </div>
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
  {/* Footer*/}
  <footer className="footer bg-black small text-center text-white-50">
    <div className="container px-4 px-lg-5">Copyright © Your Website 2023</div>
  </footer>
  {/* Bootstrap core JS*/}
  {/* Core theme JS*/}
  {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
  {/* * *                               SB Forms JS                               * **/}
  {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
  {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
</>
  )
}

export default Home