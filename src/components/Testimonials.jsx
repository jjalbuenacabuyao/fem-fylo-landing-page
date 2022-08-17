import profile1 from '../assets/profile-1.jpg';
import profile2 from '../assets/profile-2.jpg';
import profile3 from '../assets/profile-3.jpg';
import quotes from '../assets/bg-quotes.png';

const Testimonials = () => (
  <div className='testimonials'>
    <img className='absolute w-5 h-4 top-[-1rem] left-10 md:left-20' src={quotes} alt="" />

    <div className='testimonials__inner'>
      <p>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team our team has become a well-oiled collaboration machiine.
      </p>
      <div className='testimonials__person'>
        <img src={profile1} alt="" />
        <div>
          <p className='testimonials__name'>
              Satish Patel
          </p>
          <p className='testimonials__position'>
              Founder & CEO, Huddle
          </p>
        </div>
      </div>
    </div>

    <div className='testimonials__inner'>
      <p>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team our team has become a well-oiled collaboration machiine.
      </p>
      <div className='testimonials__person'>
        <img src={profile2} alt="" />
        <div>
          <p className='testimonials__name'>
            Bruce McKenzie
          </p>
          <p className='testimonials__position'>
              Founder & CEO, Huddle
          </p>
        </div>
      </div>
    </div>

    <div className='testimonials__inner'>
      <p>
          Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team our team has become a well-oiled collaboration machiine.
      </p>
      <div className='testimonials__person'>
        <img src={profile3} alt="" />
        <div>
          <p className='testimonials__name'>
            Iva Boyd
          </p>
          <p className='testimonials__position'>
              Founder & CEO, Huddle
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Testimonials