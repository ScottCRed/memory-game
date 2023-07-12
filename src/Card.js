
const Card = ({ id, onClick, src, name}) => {
    return (
        <div className="card" id={id} onClick={onClick}>
        <img src={src} alt={name} id={id}/>
        {name}
    </div>
    );
};

export default Card;