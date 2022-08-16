import logo from '../assets/logo.svg';
import location from '../assets/icon-location.svg';
import phone from '../assets/icon-phone.svg';
import email from '../assets/icon-email.svg';


const Footer = () => (
  <div className='grid pt-[14.0625rem] bg-dark-blue-footer px-8'>
    <a href="#">
      <img className='w-[10.125rem] h-12' src={logo} alt="" />
    </a>

    <div className='flex items-start gap-6 mb-[1.4375rem] mt-10'>
      <img src={location} alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod modi ullam ea, accusantium distinctio recusandae voluptates odio rem blanditiis.
      </p>
    </div>

    <div className='flex flex-col gap-[1.4375rem]'>
      <div className='flex gap-6'>
        <img className='w-3' src={phone} alt="" />
        <p>
          +1-543-123-4567
        </p>
      </div>

      <div className='flex gap-6'>
        <img className='w-4 h-4' src={email} alt="" />
        <p>
          example@fylo.com
        </p>
      </div>
    </div>

    <ul className='flex flex-col gap-3 mb-[3.125rem] mt-20'>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Jobs</a></li>
      <li><a href="#">Press</a></li>
      <li><a href="#">Blog</a></li>
    </ul>

    <ul className='flex flex-col gap-3 mb-20'>
      <li><a href="#">Contact Us</a></li>
      <li><a href="#">Terms</a></li>
      <li><a href="#">Privacy</a></li>
    </ul>

    <div className='flex items-center justify-center gap-5 pb-10'>
      <i class="fa-brands fa-facebook fa-xl"></i>
      <i class="fa-brands fa-twitter fa-xl"></i>
      <i class="fa-brands fa-instagram fa-xl"></i>
    </div>
  </div>
)

export default Footer