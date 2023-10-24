import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

export const Weather=()=>{
    const [city,setcity]=useState('')
    const [weather,setWeather]=useState('')

    const handleClick=()=>{
        setWeather(city)
        
    }
    return(

        <Grid container spacing={2}>
            <Grid item xs={4} ></Grid>
            <Grid item xs={4} >
            
            <Grid item xs={12}><h2>Assignment 11</h2></Grid>
                <Card sx={{backgroundColor:"#e3dfc",border:"2px solid black"}}>
                    <CardContent >
                        <Grid container spacing={3}>
                        <Grid item xs={12}><h4>Weather App</h4></Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" label="Enter City"fullWidth onChange={(e)=>setcity(e.target.value)}></TextField>
                            </Grid>
                           <Grid item xs={12}> <Button color="secondary" variant="contained" fullWidth onClick={handleClick}>Search</Button></Grid>
                           </Grid>
                    </CardContent>
                </Card>
                <Grid container spacing={2}>
                <Grid item xs={8}><h3>City Name:{weather}</h3></Grid>
                <Grid item xs={6}><h3>Weather:🌦️</h3></Grid>
                </Grid>
                </Grid>
        </Grid>
             

    )
}