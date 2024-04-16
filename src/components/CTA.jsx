import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { arrow } from '../assets/icons'

const CTA = () => {
    return (
        <section className="cta">
            <p className="cta-text">
                Have a Project in mind?
                <br className="sm:block hidden" />
                Let's build something together!
            </p>
            <Link to='/contact' className='btn'>
                Contact
            </Link>
            <NavLink to='/' className="fixed bottom-5 right-5">
                <img
                    src={arrow}
                    alt="sound"
                    className="w-8 h-8 p-[5px] object-contain cursor-pointer rotate-180 rounded-full bg-white" />
            </NavLink>
        </section>
    )
}

export default CTA