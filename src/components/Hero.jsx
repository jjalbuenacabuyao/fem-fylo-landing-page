import illustration from '../assets/illustration-intro.png'
import Buttons from './Buttons';
import flex from '../script'

const Hero = () => (
  <div className={`${flex.flexCenter} hero`}>
    <img src={illustration} alt=""/>
    <h1>
      All your files in one secure location, accessible anywhere.
    </h1>
    <p>
      Fylo strores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family and co-workers.
    </p>
    <Buttons />
  </div>
)

export default Hero