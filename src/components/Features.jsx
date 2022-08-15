import access from '../assets/icon-access-anywhere.svg'
import security from '../assets/icon-security.svg'
import collaboration from '../assets/icon-collaboration.svg'
import store from '../assets/icon-any-file.svg'

const Features = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-20 px-8 py-28 text-center'>
      
      <div className='flex flex-col items-center justify-center'>
        <img src={access} alt="" />
        <h2 className='text-xl font-bold font-raleway pt-8 pb-4'>Access your files, anywhere</h2>
        <p>
          The ability to access smartphone, tablet, or computer to access your account means your files follow you everywhere.
        </p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <img src={security} alt="" />
        <h2 className='text-xl font-bold font-raleway pt-8 pb-4'>Security you can trust</h2>
        <p>
          2-factor authentication and user-controlled encryption are just a couple of security features we allow to help secure your files.
        </p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <img src={collaboration} alt="" />
        <h2 className='text-xl font-bold font-raleway pt-8 pb-4'>Real-time collaboration</h2>
        <p>
          Securely share files and folders  with friends, family, and colleagues foe live collaboration. No email attachments required.
        </p>
      </div>

      <div className='flex flex-col items-center justify-center'>
        <img src={store} alt="" />
        <h2 className='text-xl font-bold font-raleway pt-8 pb-4'>Store any type of file</h2>
        <p>
          Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.
        </p>
      </div>
    </div>
  )
}

export default Features