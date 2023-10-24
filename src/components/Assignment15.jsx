import React, { useState } from "react";
import {Grid,Button,TextField,Card,CardContent} from "@mui/material"

export const Assignment15=()=>{
    const[grid,setGrid]=useState("")
    const[data,setData]=useState([])
    return(
     <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField onChange={(e)=>setGrid(e.target.value)} variant="outlined" label="Enter Grid Item xs" fullWidth></TextField>
        </Grid>
        <Grid item xs={4}>
            <Button onClick={()=>setData([...data,grid])}variant="contained" color="warning" fullWidth sx={{height:"55px"}}>Submit</Button>
        </Grid>
        {
            data.map((item)=>
            <Grid item xs={item}>
                <Card sx={{height:"120", bgcolor:"orange",color:"white"}}>
                    <CardContent>
                    <h3>Grid item xs={item}</h3>
                    </CardContent>
                </Card>
            </Grid>

            )
        }
     </Grid>
    )
}