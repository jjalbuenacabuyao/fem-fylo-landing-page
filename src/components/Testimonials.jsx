import profile1 from '../assets/profile-1.jpg';
import profile2 from '../assets/profile-2.jpg';
import profile3 from '../assets/profile-3.jpg';
import quotes from '../assets/bg-quotes.png';

const Testimonials = () => (
  <div className='relative px-8 md:px-[4.10rem] flex flex-col gap-[1.375rem] pb-[19.0625rem]'>
    <img className='absolute w-5 h-4 top-[-1rem] left-10 md:left-20' src={quotes} alt="" />
    <div className='bg-dark-blue-intro p-5 rounded-md'>
      <p className='text-xs leading-5'>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team our team has become a well-oiled collaboration machiine.
      </p>
      <div className="flex items-center gap-3 pt-5">
        <img className='rounded-full w-[2rem]' src={profile1} alt="" />
        <div className="flex flex-col">
          <p className='font-bold leading-3'>
              Satish Patel
          </p>
          <p className='text-[0.625rem]'>
              Founder & CEO, Huddle
          </p>
        </div>
      </div>
    </div>

    <div className='bg-dark-blue-intro p-5 rounded-md'>
      <p className='text-xs leading-5'>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team our team has become a well-oiled collaboration machiine.
      </p>
      <div className="flex items-center gap-3 pt-5">
        <img className='rounded-full w-[2rem]' src={profile2} alt="" />
        <div className="flex flex-col">
          <p className='font-bold leading-3'>
            Bruce McKenzie
          </p>
          <p className='text-[0.625rem]'>
              Founder & CEO, Huddle
          </p>
        </div>
      </div>
    </div>

    <div className='bg-dark-blue-intro p-5 rounded-md'>
      <p className='text-xs leading-5'>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team our team has become a well-oiled collaboration machiine.
      </p>
      <div className="flex items-center gap-3 pt-5">
        <img className='rounded-full w-[2rem]' src={profile3} alt="" />
        <div className="flex flex-col">
          <p className='font-bold leading-3'>
            Iva Boyd
          </p>
          <p className='text-[0.625rem]'>
              Founder & CEO, Huddle
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Testimonials