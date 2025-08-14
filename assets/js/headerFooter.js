class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="header" class="header sticky-top">

            <div class="topbar d-flex align-items-center">
            <div class="container d-flex justify-content-center justify-content-md-between">
                <!-- <div class="contact-info d-flex align-items-center">
                <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
                <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                </div>
                <div class="social-links d-none d-md-flex align-items-center">
                <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                </div> -->
            </div>
            </div><!-- End Top Bar -->

            <div class="branding d-flex align-items-center">

            <div class="container position-relative d-flex align-items-center justify-content-between">
                <a href="index.html" class="logo d-flex align-items-center me-auto">
                <!-- Uncomment the line below if you also wish to use an image logo -->
                <!-- <img src="assets/img/logo.png" alt=""> -->
                <h1 class="sitename"><img src="assets/img/Logo 2.1.jpg" alt=""></h1>
                </a>

                <nav id="navmenu" class="navmenu">
                <ul>
                    <li><a href="index.html">Home<br></a></li>
                    <li class="dropdown"><a href="im-a-provider.html"><span>For Providers</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                        <!-- <li><a href="about.html">About</a></li>
                        <li><a href="how-it-works.html">How It Works</a></li>
                        <li><a href="sleep-apnea-care.html">Sleep Apnea Care</a></li> -->
                        <li class="dropdown"><a href="#"><span>Provider Types</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li><a href="new-primary-care.html">Primary Care</a></li>
                            <li><a href="new-dental-sleep-medicine.html">Dental Sleep Medicine</a></li>
                            <li><a href="new-sleep-surgery.html">Sleep Surgery</a></li>
                            <li><a href="new-neurostimulator-implant.html">Neurostimulator Implant</a></li>
                            <li><a href="new-durable-medical-equipment.html">Durable Medical Equipment</a></li>
                            <li><a href="new-weight-loss.html">Weight Loss</a></li>
                            <li><a href="new-sleep-specialist.html">Sleep Specialist</a></li>
                            <li><a href="new-sleep-testing-facility.html">Sleep Testing Facility</a></li>
                        </ul>
                        </li>
                        <li class="dropdown"><a href="order.html"><span>Orders</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li><a href="office-pick-up-hst.html">Office Pick-UP HST</a></li>
                            <li><a href="mail-out-hst.html">Mail Out HST</a></li>
                            <li><a href="in-lab-polysomnography.html">In Lab Polysomnography</a></li>
                            <li><a href="for-provider-login.html">PAP Therapy</a></li>
                        </ul>
                        </li>
                        <li class="dropdown"><a href="for-provider-login.html"><span>Referrals</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                        <ul>
                            <li><a href="for-provider-login.html">Sleep Specialist</a></li>
                            <li><a href="for-provider-login.html">DME</a></li>
                            <li><a href="for-provider-login.html">Dental Medicine</a></li>
                            <li><a href="for-provider-login.html">Neurostimulator Implant</a></li>
                            <li><a href="for-provider-login.html">Oronasal Surgery</a></li>
                            <li><a href="for-provider-login.html">Weight Loss</a></li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                    <li class="dropdown"><a href="im-a-patient.html"><span>For Patients</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                        <!-- <li><a href="im-a-patient.html">I'm A Patient</a></li>
                        <li><a href="im-a-provider.html">I'm A Provider</a></li>
                        <li><a href="for-provider-login.html">My Portal</a></li> -->
                        <li><a href="find-a-provider.html">Find a Provider</a></li>
                        <li><a href="pap-problem-and-solutions.html">PAP Problems and Solutions</a></li>
                        <li><a href="sleep-disorders.html">Sleep Disorders</a></li>
                        <li><a href="alternative-sleep-apnea-therapies.html">Alternative Sleep Apnea Therapies</a></li>
                        <li><a href="type-of-sleep-studies.html">Type Of Sleep Studies</a></li>
                    </ul>
                    </li>
                    <li><a href="stories.html">News</a></li>
                    <!-- <li><a href="find-a-provider.html">Find a Provider</a></li> -->
                    <li><a href="contact.html">Contact Us</a></li>
                    <!-- <li><a href="register.html">Register</a></li>|<li><a href="for-provider-login.html">Login</a></li> -->

                    <li class="dropdown-2"><a href="#"><span>Login</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                        <!-- <li><a href="im-a-patient.html">I'm A Patient</a></li>
                        <li><a href="im-a-provider.html">I'm A Provider</a></li>
                        <li><a href="for-provider-login.html">My Portal</a></li> -->
                        <li><a href="for-patient-login.html">For Patient</a></li>
                        <li><a href="for-provider-login.html">For Provider</a></li>
                    </ul>
                    </li>

                    <li class="dropdown-2"><a href="#"><span>Register</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                        <!-- <li><a href="im-a-patient.html">I'm A Patient</a></li>
                        <li><a href="im-a-provider.html">I'm A Provider</a></li>
                        <li><a href="for-provider-login.html">My Portal</a></li> -->
                        <li><a href="patient-register.html">As a Patient</a></li>
                        <li><a href="provider-register.html">As a Provider</a></li>
                    </ul>
                    </li>
                </ul>
                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
                
                <!-- <a class="cta-btn d-none d-sm-block org" href="login.html">Login</a> -->      

            </div>

            </div>

        </header>`;
        // Determine current path
        const path = window.location.pathname.split("/").pop();

        // Map of keywords to top-level menu link text
        const sectionMap = {
            "index.html": "Home",
            "im-a-provider.html": "For Providers",
            "new-": "For Providers",
            "order.html": "For Providers",
            "for-provider-login.html": "For Providers",
            "im-a-patient.html": "For Patients",
            "find-a-provider.html": "For Patients",
            "pap-problem-and-solutions.html": "For Patients",
            "sleep-disorders.html": "For Patients",
            "alternative-sleep-apnea-therapies.html": "For Patients",
            "stories.html": "News",
            "contact.html": "Contact Us",
            "for-patient-login.html": "Login",
            "provider-register.html": "Register",
            "patient-register.html": "Register"
        };

        const navLinks = this.querySelectorAll("#navmenu > ul > li > a");

        navLinks.forEach(link => {
            const linkText = link.textContent.trim();
            for (let key in sectionMap) {
                if (path.includes(key) && sectionMap[key] === linkText) {
                    link.classList.add("active");
                    break;
                }
            }
        });
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer" class="footer light-background">

            <div class="container footer-top">
            <div class="row gy-4">
                <div class="col-lg-4 col-md-6 footer-about">
                <a href="index.html" class="logo d-flex align-items-center">
                    <span class="sitename"><img src="assets/img/Footer Logo 2.1.png"></span>
                </a>
                <div class="footer-contact pt-3">
                    <p>1215 Kinwest Pkwy Ste 130</p>
                    <p>Irving TX 75063</p>
                    <br>
                    <!-- <p class="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p> -->
                    <p><strong>Email:</strong> <span>contactus@myapneapath.com</span></p>
                </div>
                <div class="social-links d-flex mt-4">
                    <a href=""><i class="bi bi-twitter-x"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                <h4>Menu</h4>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <!-- <li><a href="about.html">About</a></li> -->
                    <li><a href="im-a-provider.html">For Providers</a></li>
                    <li><a href="im-a-patient.html">For Patients</a></li>
                    <li><a href="stories.html">News</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
                </div>

                <!-- <div class="col-lg-2 col-md-3 footer-links">
                <h4>MyApneaPath</h4>
                <ul>
                    <li><a href="about.html">About</a></li>
                    <li><a href="how-it-works.html">How It Works</a></li>
                    <li><a href="sleep-apnea-care.html">Sleep Apnea Care</a></li>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>
                </div> -->

                <div class="col-lg-2 col-md-3 footer-links">
                <h4>For Patients</h4>
                <ul>
                    <li><a href="find-a-provider.html">Find a Provider</a></li>
                    <li><a href="pap-problem-and-solutions.html">PAP Problems and Solutions</a></li>
                    <li><a href="sleep-disorders.html">Sleep Disorders</a></li>
                    <li><a href="alternative-sleep-apnea-therapies.html">Alternative Sleep Apnea Therapies</a></li>
                    <li><a href="type-of-sleep-studies.html">Type Of Sleep Studies</a></li>
                </ul>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                <h4>For Providers</h4>
                <ul>
                    <li><a href="new-primary-care.html">Primary Care</a></li>
                    <li><a href="new-dental-sleep-medicine.html">Dental Sleep Medicine</a></li>
                    <li><a href="new-sleep-surgery.html">Sleep Surgery</a></li>
                    <li><a href="new-neurostimulator-implant.html">Neurostimulator Implant</a></li>
                    <li><a href="new-durable-medical-equipment.html">Durable Medical Equipment</a></li>
                </ul>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                <h4 style="color: #d6e2e7; cursor: default;">For Providers</h4>
                <ul>
                    <li><a href="new-weight-loss.html">Weight Loss</a></li>
                    <li><a href="new-sleep-specialist.html">Sleep Specialist</a></li>
                    <li><a href="new-sleep-testing-facility.html">Sleep Testing Facility</a></li>
                </ul>
                </div>

                <!-- <div class="col-lg-2 col-md-3 footer-links">
                <h4>My Path</h4>
                <ul>
                    <li><a href="im-a-patient.html">I'm A Patient</a></li>
                    <li><a href="im-a-provider.html">I'm A Provider</a></li>
                    <li><a href="for-provider-login.html">My Portal</a></li>
                </ul>
                </div> -->

            </div>
            </div>

            <div class="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong class="px-1 sitename">MyApneaPath</strong> <span>All Rights Reserved</span></p>
            <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you've purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
                Designed by <a href="https://maverickglobalresources.com/">Maverick Global Resources</a>
            </div>
            </div>

        </footer>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)