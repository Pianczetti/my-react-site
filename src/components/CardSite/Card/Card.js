import FrontCard from '../FrontCard/FrontCard';
import BackCard from '../BackCard/BackCard';
import CardDetailsForm from '../CardDetailsForm/CardDetailsForm';
import {useState} from 'react';
import complete from '../../../images/icon-complete.svg';

export default function Card(){
  const [isToggled, setIsToggled] = useState(false);
  return (
    <>
    <div className="div-cont">
  <button className="btn" onClick={() => { setIsToggled(!isToggled)}}>Toggle</button>
  </div>
    { isToggled && <Buttonshowcard /> }
    </>
  )
}

function Buttonshowcard(){
  let [currentState, setState] = useState({
    name: "e.g. Jane Appleseed",
    number: "1234 5678 9123 0000"
  })

  function handleChangeName(e){
    if(!e.target.value == '')
    setState({name: e.target.value, number: currentState.number})
    else
    setState({name: "e.g. Jane Appleseed", number: currentState.number})
  }

  function handleChangeNumber(e){
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    var position = e.target.selectionEnd, length = e.target.value.length;
    e.target.selectionEnd = position += ((e.target.value.charAt(position - 1) === ' ' && e.target.value.charAt(length - 1) === ' ' && length !== e.target.value.length) ? 1 : 0);
    if(!e.target.value == '')
    setState({name: currentState.name, number: e.target.value})
    else
    setState({name: currentState.name, number: "1234 5678 9123 0000"})
   
  }


  return(<>
<div className="container">
<div className="left">

    <FrontCard name={currentState.name} number ={currentState.number}/>

    <BackCard />

</div>
<div className="right" >

    <CardDetailsForm handleChangeName={handleChangeName} handleChangeNumber={handleChangeNumber} />

  <div className="submit-container hide">
    <img src={complete} alt="" />
    <div>
      <h2>Thank you!</h2>
      <p>We've added your card details</p>
    </div>
    <button type="button" className="continue-button" id="continue-btn">
      Continue
    </button>
  </div>
</div>
</div>
</>
  )
}