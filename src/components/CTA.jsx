import ButtonFull from './ButtonFull';

const CTA = () => (
  <div className='absolute bottom-[760px] mx-8 md:mx-[4.10rem] bg-dark-blue-intro rounded-lg text-center py-10 px-6'>
    <h2 className='text-base font-bold'>Get early access today</h2>
    <p className='pt-5 pb-[1.875rem] leading-5'>
      It only takes minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
    </p>
    <input className='rounded-full mb-5 w-full h-[2.75rem] pl-5 text-xs' type="email" name="email" id="email" placeholder='email@example.com'/>
    <ButtonFull />
  </div>
)

export default CTA