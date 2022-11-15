import React from 'react'
import {useNavigate} from 'react-router-dom'


function Home() {
    const navigate = useNavigate()

    const handleClick = ()=> {
        const id = Math.floor(Math.random() * 100);
        navigate(`/product/${id}`);
    }

    const handleClickRedux = ()=>{
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