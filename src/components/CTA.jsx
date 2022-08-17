import ButtonFull from './ButtonFull';

const CTA = () => (
  <div className='cta'>
    <h2>Get early access today</h2>
    <p>
      It only takes minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.
    </p>
    <input type="email" name="email" id="email" placeholder='email@example.com'/>
    <ButtonFull />
  </div>
)

export default CTA