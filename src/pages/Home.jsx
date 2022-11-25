import React from 'react'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'



function Home() {
    const navigate = useNavigate()

    const handleClick = ()=> {
        const id = Math.floor(Math.random() * 100);
        navigate(`/product/${id}`);
    }

    const handleClickRedux = ()=>{
      Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: 'https://unsplash.it/400/200',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
        navigate('/redux')
    }



  return (
    <>
        <h2>Page Home (private)</h2>
        <button onClick={handleClick}>Ver personaje</button>
        <button onClick={handleClickRedux}>Redux</button>
    </>
  )
}

export default Home