import { useState } from "react"
import { auth } from "../firebase/firebase"
import { updateProfile, signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"

import {
TextField,
Button,
Paper,
Stack,
Typography,
Avatar
} from "@mui/material"

export default function Dashboard(){

const user = auth.currentUser
const navigate = useNavigate()

const [name,setName] = useState("")
const [photo,setPhoto] = useState("")

const updateUserProfile = async () => {

try{

await updateProfile(user,{
displayName:name,
photoURL:photo
})

await auth.currentUser.reload()

alert("Profile Updated")

window.location.reload()

}
catch(error){

alert(error.message)

}

}

const handleLogout = async () => {

await signOut(auth)

navigate("/")   // login page

}

return(

<Paper sx={{p:4,width:400,m:"auto",mt:10}}>

<Stack spacing={2} alignItems="center">

<Typography variant="h5">
Dashboard
</Typography>

<Avatar
src={user?.photoURL}
sx={{width:80,height:80}}
/>

<Typography>
Name: {user?.displayName}
</Typography>

<Typography>
Email: {user?.email}
</Typography>

<TextField
label="Display Name"
onChange={(e)=>setName(e.target.value)}
/>

<TextField
label="Profile Image URL"
onChange={(e)=>setPhoto(e.target.value)}
/>

<Button
variant="contained"
onClick={updateUserProfile}
>
Update Profile
</Button>

<Button
variant="contained"
color="error"
onClick={handleLogout}
>
Logout
</Button>

</Stack>

</Paper>

)

}
