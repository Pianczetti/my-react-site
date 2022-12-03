function CardDetailsForm(props){
    return(
    <form id="card-details-form" >
    <label>Cardholder name</label>
    <input onChange={props.handleChangeName} type="text" id = "input-holder" className="inp" placeholder="e.g. Jane Appleseed" maxLength="22" />

    <p className="error">Can't be blank</p>
    <label>Card number</label>
    <input onChange={props.handleChangeNumber}type="text" id = "input-number" className="inp" placeholder ="1234 5678 9123 0000" maxLength="19" />
    
    <p className="error">Can't be blank</p>
    <div className="date-cvc">
      <div className="labels">
      <p>Exp. date (MM/YY)</p>
      <p>CVC</p>
      </div>
      <div className="inputs">
        <div>
        <input type="text" id="input-date" className="inp" placeholder="MM/YY" maxLength="5" />
        <p className="error">Can't be blank</p>
        </div>
        <div>
        <input type="text" id="input-cvc" className="inp" placeholder="CVC" maxLength="3" />
        <p className="error">Can't be blank</p>
        </div>
      </div>
    </div>
    <input type="button" id="confirm" value="Confirm" />
  </form>
    )
}

export default CardDetailsForm;