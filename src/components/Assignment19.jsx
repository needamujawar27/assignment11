import { Button, CardContent,Grid,Card, Typography } from "@mui/material";
import React, { useState } from "react";

export const Assignment19=()=>{
const[clr,setClr]=useState("pink")

    return(
        <Card sx={{height:"100vh",bgcolor:clr,margin:"10px"}}>
            <CardContent>
        <Grid container spacing={4} sx={{marginTop:"50px"}}>
            <Grid item xs={12}>
                <Typography variant="h4" sx={{textAlign:"center",marginBottom:"100px",fontWeight:"bolder"}}>Assignment-19</Typography>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}><Button variant="contained" fullWidth onClick={()=>setClr("red")}>Red</Button></Grid>
            <Grid item xs={3}><Button variant="contained" fullWidth onClick={()=>setClr("yellow")}> Yellow</Button></Grid>
             <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}><Button variant="contained" fullWidth onClick={()=>setClr("Green")}>Green</Button></Grid>
            <Grid item xs={3}><Button variant="contained" fullWidth onClick={()=>setClr("Orange")}>Orange</Button></Grid>
            <Grid item xs={3}></Grid>
        </Grid>
        </CardContent>
        </Card>
    )
}