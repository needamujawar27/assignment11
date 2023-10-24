import { CardContent,Grid,Card, Typography, TextField } from "@mui/material";
import React, { useState } from "react";

export const Empolyee=()=>{
    const[first,setFirst]=useState("First Name")
    const[last,setLast]=useState("Last Name")
    const[mobile,setMobile]=useState("Mobile")
    const[city,setCity]=useState("City")
    const[add,setAdd]=useState("Address....")
    return(
     <Grid container spacing={2}>
        <Grid item xs={6}>
            <Card sx={{marginTop:"100px",marginLeft:"30px"}}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5" contained="h5" sx={{textAlign:"center",fontWeight:"bold"}} >Fill Employee Details</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant="outlined" label="First Name" fullWidth  onChange={(e)=>setFirst(e.target.value)}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant="outlined" label="Last Name" fullWidth onChange={(e)=>setLast(e.target.value)}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant="outlined" label="Enter Mobile Number" fullWidth onChange={(e)=>setMobile(e.target.value)}></TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant="outlined" label="Enter City Name" fullWidth onChange={(e)=>setCity(e.target.value)}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField variant="outlined" label="Enter Address" fullWidth onChange={(e)=>setAdd(e.target.value)}></TextField>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={6}>
            <Card sx={{marginTop:"100px",height:"300px"}}>
                <CardContent>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
               <Typography variant="h5" contained="h5" sx={{textAlign:"center",fontWeight:"bold"}}>Show Employee Details</Typography>
               </Grid>
                 <Grid item xs={6}>
                    <Typography variant="h5"  sx={{textAlign:"center"}}>{first}</Typography>
                 </Grid>
                 <Grid item xs={6}>
                    <Typography variant="h5"  sx={{textAlign:"center"}}>{last}</Typography>
                 </Grid>
                 <Grid item xs={6}>
                    <Typography variant="h5" sx={{textAlign:"center"}} >{mobile }</Typography>
                 </Grid>
                 <Grid item xs={6}>
                    <Typography variant="h5" sx={{textAlign:"center"}}>{city}</Typography>
                 </Grid>
                 <Grid item xs={12}>
                    <Typography variant="h5" sx={{textAlign:"center"}}>{add}</Typography>
                 </Grid>

               </Grid>
                </CardContent>
            </Card>
        </Grid>
     </Grid>
    )
}