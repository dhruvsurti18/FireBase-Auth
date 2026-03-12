import { useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useNavigate } from "react-router-dom"

import { TextField, Button, Paper, Stack, Typography } from "@mui/material"

export default function Register(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleRegister = async () => {

try{

await createUserWithEmailAndPassword(auth,email,password)

alert("User Registered")

navigate("/")

}
catch(error){

alert(error.message)

}

}

return(

<Paper sx={{p:4,width:350,m:"auto",mt:10}}>

<Stack spacing={2}>

<Typography variant="h5">
Register
</Typography>

<TextField
label="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<TextField
label="Password"
type="password"
onChange={(e)=>setPassword(e.target.value)}
/>

<Button
variant="contained"
onClick={handleRegister}
>
Register
</Button>

</Stack>

</Paper>

)

}
