import React,{useState} from "react";
import {Grid,Button, Typography} from "@mui/material"
export const Assignment16=()=>{
    const [clr,setClr]=useState("Brown")
    return(
        <Grid container spacing={2}>
                       <Grid item xs={12}> 
                        <Typography variant="h1" sx={{color:clr ,textAlign:"center"}}>{clr}</Typography>
                     </Grid>
                       <Grid item xs={4}>
                        <Button variant="contained" color="warning" fullWidth onClick={()=>setClr("Orange")}>Orange</Button>
                       </Grid>
                       <Grid item xs={4}>
                        <Button variant="contained" color="warning" fullWidth onClick={()=>setClr("Green")}>Green</Button>
                       </Grid>
                       <Grid item xs={4}>
                        <Button variant="contained" color="warning" fullWidth onClick={()=>setClr("Purple")}>Purple</Button>
                       </Grid>
                       <Grid item xs={4}>
                        <Button variant="contained" color="warning" fullWidth onClick={()=>setClr("Black")}>Black</Button>
                       </Grid>
                       <Grid item xs={4}>
                       </Grid>
                       <Grid item xs={4}>
                        <Button variant="contained" color="warning" fullWidth onClick={()=>setClr("DarkBlue")}>DarkBlue</Button>
                       </Grid>
                       <Grid item xs={4}>
                        <Button variant="contained" color="warning" fullWidth onClick={()=>setClr("Gray")}>Gray</Button>
                       </Grid>
                       <Grid item xs={4}>
                        <Button variant="contained" color="warning" fullWidth onClick={()=>setClr("Maroon")}>Maroon</Button>
                       </Grid>
                       <Grid item xs={4}>
                        <Button variant="contained" color="warning" fullWidth onClick={()=>setClr("Violet")}>Violet</Button>
                       </Grid>

                       
                   </Grid>
    )
}