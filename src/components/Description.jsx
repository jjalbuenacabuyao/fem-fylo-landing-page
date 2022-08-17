import { arrow, descriptionImg } from "../assets";

const Description = () => (
  <div className='description'>

    <img className='description__img' src={descriptionImg} alt="" />

    <h2>Stay productive, wherever you are</h2>

    <p>
      Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
    </p>

    <p>
    Securely share files and folders  with friends, family, and colleagues foe live collaboration. No email attachments required.
    </p>

    <button>
      See how Fylo works
      <img src={arrow} alt="" />
    </button>
  </div>
)

export default Description