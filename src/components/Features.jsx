import { access, security, collaboration, anyFile } from '../assets'
import flex from '../script'

const Features = () => {
  return (
    <div className={`${flex.flexCenter} features`}>
      
      <div className={`${flex.flexCenter}`}>
        <img src={access} alt="" />
        <h2>Access your files, anywhere</h2>
        <p>
          The ability to access smartphone, tablet, or computer to access your account means your files follow you everywhere.
        </p>
      </div>

      <div className={`${flex.flexCenter}`}>
        <img src={security} alt="" />
        <h2>Security you can trust</h2>
        <p>
          2-factor authentication and user-controlled encryption are just a couple of security features we allow to help secure your files.
        </p>
      </div>

      <div className={`${flex.flexCenter}`}>
        <img src={collaboration} alt="" />
        <h2>Real-time collaboration</h2>
        <p>
          Securely share files and folders  with friends, family, and colleagues foe live collaboration. No email attachments required.
        </p>
      </div>

      <div className={`${flex.flexCenter}`}>
        <img src={anyFile} alt="" />
        <h2>Store any type of file</h2>
        <p>
          Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
        </p>
      </div>
    </div>
  )
}

export default Features