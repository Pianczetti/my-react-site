import cardback from '../../../images/bg-card-back.png';


function BackCard() {
    return (
        <>
        <div className="back-image-container">
        <img src= {cardback} alt="Card back" />
        <p className="cvc">000</p>
        </div>
        </>
    );
}

export default BackCard;