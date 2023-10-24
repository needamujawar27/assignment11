import React,{useState} from "react";
import {Grid,TextField,Button, CardContent,Card} from "@mui/material"

export const Assignment17=()=>{
    const [grid,setGrid]=useState("")
    const [data,setData]=useState([])
    return(
     <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField variant="outlined" label="Enter Border Radius"fullWidth onChange={((e)=>setGrid(e.target.value))}></TextField>
        </Grid>
        <Grid item xs={4}>
            <Button variant="contained" fullWidth color="info" sx={{height:"55px"}} onClick={()=>setData([...data,grid])}>Submit</Button>
        </Grid>
        {
            data.map((item)=>
            <Grid item xs={12}>
             <Card sx={{height:"200px",width:"400px",borderStyle:"dashed",borderRadius:item,marginLeft:"500px",textAlign:"center"}}>
                <CardContent>
                    <h4>{item}</h4>
                </CardContent>
             </Card>
            </Grid>
            )
        }
     </Grid>
    )
}