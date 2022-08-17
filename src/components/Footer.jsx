import { logo, location, phone, email} from '../assets';
import flex from '../script';


const Footer = () => (
  <footer className='footer'>
    <a href="#">
      <img className='footer__logo' src={logo} alt="" />
    </a>

    <div className='footer__location'>
      <img src={location} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod modi ullam ea, accusantium distinctio recusandae voluptates odio rem blanditiis.
      </p>
    </div>

    <div className='footer__phone__email'>
      <div className='footer__phone'>
        <img className='w-3' src={phone} alt="" />
        <p>
          +1-543-123-4567
        </p>
      </div>

      <div className='footer__email'>
        <img className='w-4 h-4' src={email} alt="" />
        <p>
          example@fylo.com
        </p>
      </div>
    </div>

    <ul className='footer__list__first'>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Press</a></li>
      <li><a href="#">Blog</a></li>
    </ul>

    <ul className='footer__list__second'>
      <li><a href="#">Contact Us</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Privacy</a></li>
    </ul>

    <div className={`${flex.flexCenter} footer__socials`}>
      <i class="fa-brands fa-facebook fa-xl"></i>
      <i class="fa-brands fa-twitter fa-xl"></i>
      <i class="fa-brands fa-instagram fa-xl"></i>
    </div>
  </footer>
)

export default Footer