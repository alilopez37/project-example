import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import Card from '../components/Card';

function Product() {
    const [character, setCharacter] = useState(null)
    const {id} = useParams()

    const handleClick = ()=>{
        const id = Math.floor(Math.random() * 100);
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(responde => responde.json())
        .then (data => setCharacter(data))
    }

    useEffect(()=> {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(responde => responde.json())
        .then (data => setCharacter(data))
    },[])

    return (
        character && (
            <>
                <Card character={character}/> 
                <button onClick={handleClick}>Nuevo personaje</button>    
            </> 
        )
      );
}


export default Product;