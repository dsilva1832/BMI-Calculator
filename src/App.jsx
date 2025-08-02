import { TextField, Button } from "@mui/material"
import { useState } from "react"


function App() {
 
  const[bmi,setBmi]=useState(null)
  const[category,setCategory]=useState('')
  const [weight,setWeight]=useState(0)
  const [height,setHeight]=useState(0)

  const[invalidWeight,setInvalidWeight]=useState(false)
  const[invalidHeight,setInvalidHeight]=useState(false)

  const Validate=(input)=>{
    const{name, value}=input    //destructuring
    console.log(name, value);
    
    if(name=='weight'){
      setWeight(value)
      if(!!value.match(/^\d*.?\d+$/)){
        setInvalidWeight(false)
      }else{
        setInvalidWeight(true)
      }
    }else if(name=='height'){
      setHeight(value)
      if(!!value.match(/^\d*.?\d+$/)){
        setInvalidHeight(false)
      }else{
        setInvalidHeight(true)
      }
    }
  }


  const calculateBmi=(e)=>{
    e.preventDefault()
    if(height && weight){
      const bmii=(weight*10000)/(height*height)
      setBmi(bmii.toFixed(2));
   
      let ctg='';
      if(bmii<18.5){
        ctg="Underweight"
        
      }else if(bmii<25){
        ctg="Normal (Ideal weight)"
        
      }else if(bmii<30){
        ctg="Overweight"
      }else{
        ctg="Obese"
      }
    setCategory(ctg)
    }else{
      alert("Please fill the form completely")
    }
  }

  return (
    <>
      <div className="bg d-flex justify-content-center align-items-center" style={{width:"100%",minHeight:"100vh"}}>
          <div className="rounded-5 bgCrd p-5 text-center" style={{width:'400px'}} >
              {/* <i class="fa-solid fa-weight-scale icon"></i> */}
              <i class="fa-solid fa-heart-pulse icon"></i>
            <h2 className="txt mb-3">BMI Calculator</h2>
            <TextField name="weight" onChange={(e)=>Validate(e.target)}  id="standard-weight" label="Weight(kg)" variant="standard" className="w-100 mb-3"/>
             {/* invalid weight */}
            {invalidWeight &&
              <div className="text-danger mb-3 fw-bolder">
                Invalid weight!!
              </div>
            }
            <TextField name="height" onChange={(e)=>Validate(e.target)}  id="standard-height" label="Height(cm)" variant="standard" className="w-100 mb-3"/>
            {/* invalid height */}
            {invalidHeight &&
              <div className="text-danger mb-3 fw-bolder">
                Invalid Height!!
              </div>
            }
            <Button onClick={calculateBmi} variant="contained" className="mt-3 w-100 btnn py-3 mb-3" style={{backgroundColor:'#10b981'}}>Calculate BMI</Button>
            <div className="">
              <h1 className="bmi-result">{bmi}</h1>
              <h4 className="bmi-category">{category}</h4>
            </div>

          </div>        
      </div>
    </>
  )
}

export default App
