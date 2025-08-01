import { TextField, Button } from "@mui/material"

TextField

function App() {
 

  return (
    <>
      <div className="bg-dark d-flex justify-content-center align-items-center" style={{width:"100%",minHeight:"100vh"}}>
          <div className="rounded bg-danger p-5 text-center" style={{width:'400px'}} >
            {/* <div style={{display:'flex', justifyContent:'center', marginBottom:'10px'}}> */}
              <i class="fa-solid fa-weight-scale icon"></i>
            {/* </div> */}
            <h2 className="text-light ">BMI Calculator</h2>
            <TextField id="standard-weight" label="Weight(kg)" variant="standard" className="w-100"/>
            <TextField id="standard-height" label="Height(cm)" variant="standard" className="w-100"/>
            <Button variant="contained" className="mt-3 w-100 bg-light text-dark">Calculate BMI</Button>
          </div>        
      </div>
    </>
  )
}

export default App
