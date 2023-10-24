import React, { useState } from "react";
import { Card,CardContent,Grid,Typography } from "@mui/material";

export const Fruitslist=()=>{
    const [data,setData]=useState(["Apple","Mango","Banana","Orange","Kiwi","Cherry"])
    return(
        <Card sx={{height:"150px",borderRadius:"25px 0 25px 0"}}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" sx={{color:"red",fontWeight:"bold", textAlign:"center"}} >Fruits Name</Typography>
                    </Grid>
                    {
                        data.map((item)=>
                        <Grid item xs={2}>
                            <Typography variant="h6" textAlign="center" sx={{padding:"20px"}}>{item}</Typography>
                        </Grid>
                        )
                    }
                    </Grid>

            </CardContent>
        </Card>
    )
}