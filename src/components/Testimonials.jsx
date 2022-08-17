import { profile1, profile2, profile3, quotes } from "../assets"

const Testimonials = () => (
  <div className='testimonials'>
    <img className='testimonials__quote' src={quotes} alt="" />

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