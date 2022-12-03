
import './App.css';
import Navbar from './Navbar';
import Card from './components/CardSite/Card/Card';
import Home from './Home';
import {Route, Routes} from 'react-router-dom';





function App() {
  // const confirmBtn = document.querySelector('#confirm');
// const inputs = document.querySelectorAll('input[type="text"]');
// const placeholdersArr = [];


// inputs.forEach( input => {
//   placeholdersArr.push(input.getAttribute("placeholder"));
// })


// function eventKeyUp(inputs)
// {
// inputs.forEach(input => {    
//   input.addEventListener('input', e => {
//     const attr = input.id.split('-')[1];
//     const cardElement = document.querySelector(`.${attr}`);


//     if(attr === 'date'){
//       e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/g, '$1 ').trim().replace(' ', '/');
//       var position = e.target.selectionEnd, length = e.target.value.length;
//       e.target.selectionEnd = position += ((e.target.value.charAt(position - 1) === ' ' && e.target.value.charAt(length - 1) === ' ' && length !== e.target.value.length) ? 1 : 0);
//       }
    
    

//       cardElement.innerHTML = e.target.value;
    
//   });
// });
// }

// eventKeyUp(inputs);



  
  return (<>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/card" element={<Card/>} />
  </Routes>


</>
  );
}

export default App;
