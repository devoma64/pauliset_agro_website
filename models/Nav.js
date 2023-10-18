const Nav =  () =>`

   <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
     <div class="site-wrap">
      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close mt-3">
            <span class="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>

      <div class="header-top bg-light">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-6 col-lg-3">
              <a href="index.html" class="logo">
                <img
                  src="images/utilties/logo_pauliset.png"
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>
            <div class="col-lg-3 d-none d-lg-block">
              <div class="quick-contact-icons d-flex align-items-center">
                <div class="icon align-self-center mt-3">
                  <span class="icon-room text-primary"></span>
                </div>
                <div class="text">
                  <span class="h4 d-block">Cross River State</span>
                  <span class="caption-text">Okundi Boki, LGA.</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 d-none d-lg-block">
              <div class="quick-contact-icons d-flex align-items-center">
                <div class="icon align-self-center mt-3">
                  <span class="icon-phone text-primary"></span>
                </div>
                <div class="text">
                  <span class="h4 d-block"> +234-8105674403 </span>
                  <span class="h4 d-block"> +234-9152141254 </span>
                  <span class="caption-text">Call us</span>
                </div>
              </div>
            </div>

            <div class="col-lg-3 d-none d-lg-block">
              <div class="quick-contact-icons d-flex align-items-center">
                <div class="icon align-self-center mt-3">
                  <span class="icon-envelope text-primary"></span>
                </div>
                <div class="text">
                  <span class="h4 d-block">paulisetagro@gmail.com</span>
                  <span class="caption-text">Email us</span>
                </div>
              </div>
            </div>

            <div class="col-6 d-block d-lg-none text-right">
              <a
                href="#"
                class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
                ><span class="icon-menu h3"></span
              ></a>
            </div>
          </div>
        </div>

        <div
          class="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
          role="banner"
        >
          <div class="container">
            <div class="d-flex align-items-center">
              <div class="mx-auto">
                <nav
                  class="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul
                    class="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block"
                  >
                    <li class="active">
                      <a href="index.html" class="nav-link text-left">Home</a>
                    </li>
                    <li>
                      <a href="about.html" class="nav-link text-left"
                        >About Us</a
                      >
                    </li>
                    <li>
                      <a href="services.html" class="nav-link text-left"
                        >Our Services</a
                      >
                    </li>
                    <li>
                      <a href="testimonials.html" class="nav-link text-left"
                        >Testimonials</a
                      >
                    </li>
                    <li>
                      <a href="contact.html" class="nav-link text-left"
                        >Contact</a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
`;
export default Nav;