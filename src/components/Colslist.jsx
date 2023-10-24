import { Grid,Card,CardContent, Typography } from "@mui/material";
import React, { useState } from "react";

export const Colslist=()=>{
    const [data,setData]=useState(["Yellow","Skyblue","Brown","Green"])
    return(
        <Card sx={{bgcolor:"lightseagreen", marginTop:"50px",color:"white",textAlign:"center",borderRadius:"25px 0 25px 0"}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" >Color's Name</Typography>
                    </Grid>
                {
                    data.map((item)=>
                    <Grid item xs={3}>
                        <Card sx={{height:100}}>
                            <CardContent>
                               <h3>{item}</h3>
                            </CardContent>
                        </Card>
                    </Grid>
                    )
                }
                </Grid>
            </CardContent>
        </Card>
                
            

    )
}