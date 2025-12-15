import React , {useState} from 'react'

const useState12 = () => {
    // const [Led,setLed]=useState({
    //     brand:"Samsung",
    //     model : "xyz",
    //     color:"Black",
    //     price:2500
    // })
    const [numbers,AddNumbers]=useState([1,2,3,4,5])

    const Add = ()=>{
        var a= prompt("Enter a number to add:");
        return AddNumbers([...numbers,parseInt(a)]);
    // const changeColor = ()=>{
    //     return setLed({...Led,color:"blue"})
    // }
}
  return (
    <div>
      {/* <h2>My LED Details : </h2>
      <h2>
        My led brand is {Led.brand}, model is {Led.model}, color is {Led.color} and price is {Led.price}
      </h2>
      <button onClick={changeColor}>Update color</button> */}
      <h2>My numbers are :</h2>
      {numbers.join(", ")}
      <br />
      <br />
      <button onClick={Add}>Add numbers</button>
     
    </div>
  )
}

export default useState12
