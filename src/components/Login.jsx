import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/firebase"
import { useNavigate, Link } from "react-router-dom"

import { TextField, Button, Paper, Stack, Typography } from "@mui/material"

export default function Login(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleLogin = async () => {

try{

await signInWithEmailAndPassword(auth,email,password)

alert("Login Successful")

navigate("/dashboard")

}

catch(error){

alert(error.message)

}

}

return(

<Paper sx={{p:4,width:350,m:"auto",mt:10}}>

<Stack spacing={2}>

<Typography variant="h5">
Login
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
onClick={handleLogin}
>
Login
</Button>

<Button
variant="outlined"
component={Link}
to="/register"
>
Go to Register
</Button>

</Stack>

</Paper>

)

}
