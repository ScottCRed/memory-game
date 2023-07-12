
const Card = (props) => {
    const { id, onClick, src, name} = props
    return (
        <div className="card" id={id} onClick={onClick}>
        <img src={src} alt={name} id={id}/>
        {name}
    </div>
    );
};

export default Card;