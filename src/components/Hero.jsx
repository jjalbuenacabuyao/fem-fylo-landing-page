import illustration from '../assets/illustration-intro.png'
import Buttons from './Buttons';

const Hero = () => (
  <div className="relative text-center flex flex-col justify-center items-center px-8 bg-dark-blue-intro bg-curvy-mobile bg-no-repeat bg-center after:absolute after:w-full after:bg-dark-blue-main after:h-[14rem] after:bottom-0 after:z-0">
    <img src={illustration} alt="" className='mt-6'/>
    <h1 className='font-bold text-2xl font-raleway z-10 pt-10'>
      All your files in one secure location, accessible anywhere.
    </h1>
    <p className='z-10 pt-5 pb-[1.875rem]'>
      Fylo strores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family and co-workers.
    </p>
    <Buttons />
  </div>
)

export default Hero