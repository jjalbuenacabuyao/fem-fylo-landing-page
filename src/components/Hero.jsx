import illustration from '../assets/illustration-intro.png'
import Buttons from './Buttons';

const Hero = () => (
  <div className="relative text-center flex flex-col justify-center items-center px-8 md:px-[4.10rem] bg-dark-blue-intro bg-curvy-mobile bg-no-repeat bg-center sm:bg-[center_top_15rem] md:bg-[center_top_28rem] bg-[length:100%_auto] after:absolute after:w-full after:bg-dark-blue-main after:h-[14rem] sm:after:h-[12rem] md:after:h-[19rem] after:bottom-0 after:z-0">
    <img src={illustration} alt="" className='mt-6'/>
    <h1 className='font-bold text-[6.4vw] leading-8 md:text-[6.4vw] md:leading-[4rem] font-raleway z-10 pt-10'>
      All your files in one secure location, accessible anywhere.
    </h1>
    <p className='z-10 pt-5 md:pt-[5.33vw] pb-[1.875rem] md:pb-[8vw] md:text-[3.73vw] md:leading-9'>
      Fylo strores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family and co-workers.
    </p>
    <Buttons />
  </div>
)

export default Hero