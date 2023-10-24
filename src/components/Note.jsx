import { Button, Grid } from "@mui/material";
import React from "react";

export const Note=()=>{
    return(
        <Grid container spacing={2}>
        <Grid item xs={5}></Grid>
        <Grid item xs={2}><Button color="success" variant="contained" fullWidth>1</Button></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}><Button color="secondary" variant="contained"fullWidth>2</Button></Grid>
        <Grid item xs={3}><Button color="secondary" variant="contained"fullWidth>3</Button></Grid>
        <Grid item xs={3}></Grid>
        <Grid  item xs={4}><Button color="error" variant="contained" fullWidth>4</Button></Grid>
        <Grid  item xs={4}><Button color="error" variant="contained" fullWidth>5</Button></Grid>
        <Grid  item xs={4}><Button color="error" variant="contained" fullWidth>6</Button></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}><Button color="secondary" variant="contained" fullWidth>7</Button></Grid>
        <Grid item xs={3}><Button color="secondary"variant="contained"fullWidth>8</Button></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={2}><Button color="success" variant="contained" fullWidth>9</Button></Grid>
        <Grid item xs={5}></Grid>
        </Grid>
    )
}