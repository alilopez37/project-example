import React from 'react'
import img from '../assets/imgs/bunny-net-icon.svg'
import '../assets/styles/landing.css'

function Landing() {
  return (
    <>
        <main>
          <section className='container'>
            <div className="container--img">
              <img src={img} alt="Logo" />
            </div>
            <div className="container--text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla magnam aliquid quisquam asperiores a mollitia fuga impedit assumenda sequi consequatur nihil veniam, quo id et illo. Similique, rerum voluptatibus?
              </p>
            </div>
          </section>
        </main>
    </>
  )
}

export default Landing