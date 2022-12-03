import cardfront from '../../../images/bg-card-front.png';

function FrontCard(props) {

    return (
        <>
  <div className="front-image-container">  
    <img src={cardfront} alt="Card front" />
    <p className="number">{props.number}</p>
    <p className="holder">{props.name}</p>
    <p className="date">00/00</p>
  </div>
        </>
    );
}

export default FrontCard;