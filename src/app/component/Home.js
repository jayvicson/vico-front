import React from "react";

const Home = () => {
  return (
    <div>
      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h1>Creating websites that make you stop &amp; stare</h1>
              <h2>
                Accusantium quam, aliquam ultricies eget tempor id, aliquam eget
                nibh et. Maecen aliquam, risus at semper. Proin iaculis purus
                consequat sem cure digni ssim. Donec porttitora entum.
              </h2>
              <div>
                <a href="#about" class="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 hero-img">
              <img src="assets/img/hero-img.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
