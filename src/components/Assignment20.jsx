import React, { useState } from "react";
import {Grid,Card,CardContent} from "@mui/material"
import { datas } from "../data";
export const Assignment20=()=>{
    const [data,setData]=useState([]);
    const [bgclr,setBgclr]=useState(datas[0]);
    return(
      <Card>
        <CardContent>
            <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </CardContent>
      </Card>
    )
}