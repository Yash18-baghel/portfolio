import React, { Suspense, useState } from 'react'
import emailjs from "@emailjs/browser";
import { Canvas } from '@react-three/fiber';
import Animal from '../components/Animal';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import { arrow } from '../assets/icons';
import { NavLink } from 'react-router-dom';
const Contact = () => {

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {

    e.preventDefault()
    setCurrentAnimation('hit')
    setIsLoading(true)

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: import.meta.env.VITE_APP_EMAILJS_TO_NAME,
        from_email: form.email,
        to_email: import.meta.env.VITE_APP_EMAILJS_TO_EMAIL,
        message: form.message,
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).
      then(() => {

        setIsLoading(false)
        showAlert({
          text: 'Message sent successfully',
          type: 'success'
        })

        setTimeout(() => {
          hideAlert()
          setCurrentAnimation('idle')
          setForm({ name: '', email: '', message: '' })
        }, [3000]);

      })
      .catch((error) => {
        showAlert({
          text: 'I didn\'t received your message',
          type: 'danger'
        })

        setTimeout(() => {
          hideAlert()
        }, [3000]);

        setCurrentAnimation('idle')
        setIsLoading(false)
        console.log(error);
      })

  }

  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation('idle')

  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex flex-col flex-1 max-w-[50%]">
        <h1 className="head-text">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7 mt-14">
          <label htmlFor="name" className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              placeholder='John'
              className="input"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </label>
          <label htmlFor="email" className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              placeholder='John@gmail.com'
              className="input"
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </label>

          <label htmlFor="message" className="text-black-500 font-semibold">
            Your Message
            <textarea
              name="message"
              placeholder='Let me know how I can help you!'
              className="textarea"
              rows={4}
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </label>

          <button
            className="btn"
            type='submit'
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Animal
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
      <NavLink to='/' className="fixed bottom-5 right-5">
        <img
          src={arrow}
          alt="sound"
          className="w-8 h-8 p-[5px] object-contain cursor-pointer rotate-180 rounded-full bg-white" />
      </NavLink>
    </section>
  )
}

export default Contact