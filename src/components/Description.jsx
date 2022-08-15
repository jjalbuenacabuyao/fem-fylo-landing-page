import descriptionImg from '../assets/illustration-stay-productive.png';
import arrow from '../assets/icon-arrow.svg';

const Description = () => (
  <div className='px-8 pb-28'>

    <img src={descriptionImg} alt="" />

    <h2 className='text-lg font-raleway font-bold pt-[2.8125rem] pb-5'>Stay productive, wherever you are</h2>

    <p className='pb-[1.125rem]'>
      Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
    </p>

    <p className='pb-[1.125rem]'>
    Securely share files and folders  with friends, family, and colleagues foe live collaboration. No email attachments required.
    </p>

    <button className='text-accent-cyan border-b-2 border-accent-cyan pb-1'>
      See how Fylo works
      <img className='inline ml-1' src={arrow} alt="" />
    </button>
  </div>
)

export default Description