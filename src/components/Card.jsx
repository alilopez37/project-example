import '../assets/styles/card.css'

function Card(props) {
    return (
        <section className='container-character'>
            <div className="container-character--item">
                <img src={props.character.image} alt={props.character.name} />
                <div>Name: {props.character.name}</div>
                <div>Status: {props.character.status}</div>
            </div>
        </section>
      );
}

export default Card;