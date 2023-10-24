import React, { useState } from "react";
import {Grid} from "@mui/material"
import { Coloritem } from "./Coloritem";

export const Colorlist=()=>{
    const [data,setData]=useState(["RED","GREEN","SKYBLUE","PINK","BLUE","BROWN","YELLOW","AQUA"])
    return(
       <Grid container spacing={2} padding={10} >
        {
        data.map((item)=>
         <Grid item xs={4}>
            <Coloritem item={item}/>
        </Grid>
        )
        }
       </Grid> 
    )
}