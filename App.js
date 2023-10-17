import Footer from "./models/Footer.js";
import Nav from "./models/Nav.js";
import Slider from "./models/Slider.js";
import About from "./models/About.js";
import Service from "./models/Service.js";
import Opportunities from "./models/Opportunities.js";
import Become_Factor from "./models/Become_Factor.js";
import HowITWorks from "./models/HowITWorks.js";
import Testimonial from "./models/Testimonial.js";
import WhyChooseUs from "./models/WhyChooseUs.js";
import Subscriber from "./models/Subscriber.js";







const App = () => {
     
     return `
          ${Nav()}
          ${Slider()}
          ${About()}
          ${Service()}
          ${Opportunities()}
          ${Become_Factor()}
          ${HowITWorks()}
          ${WhyChooseUs()}
          ${Testimonial()}
          ${Subscriber()}
          ${Footer()}
     `;
}
document.getElementById('root').innerHTML = App();