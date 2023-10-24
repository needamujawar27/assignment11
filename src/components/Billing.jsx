import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material";
import React from "react";

export const Billing=()=>{
    return(
        
      <Grid container spacing={2} sx={{padding:10,backgroundColor:"#154c79",height:780}} >
        <Grid item xs={3}></Grid>
        <Grid item xs={6} >
        <Card>
            <CardContent>
            <Grid container spacing={2}>
            <Grid item xs={6}>
            <Typography variant="h5" component="h5">BILLING ADDRESS</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h5" component="h5">PAYMENT</Typography>
            </Grid>
            <Grid item xs={6}>
            <TextField variant="outlined" label="Full Name" fullWidth></TextField>
            </Grid>
            <Grid item xs={6}>
            <img height={60} src="img/visamaster.jpg" alt="" />
            <img height={60} src="img/visacard.png" alt="" />
            </Grid>
            <Grid item xs={6}>
                <TextField variant="outlined" label="Email" fullWidth></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField variant="outlined" label="Credit Card Number" fullWidth></TextField>
            </Grid>
            <Grid item xs={6}>
            <TextField variant="outlined" label="Address" fullWidth></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField variant="outlined" label="Type Number" fullWidth></TextField>
            </Grid>
            <Grid item xs={6}>
            <TextField variant="outlined" label="City" fullWidth></TextField>
            </Grid>
            <Grid item xs={3}>
            <TextField variant="outlined" label="Exp Year" fullWidth></TextField>
            </Grid>
            <Grid item xs={3}>
            <TextField variant="outlined" label="CVV" fullWidth></TextField>
            </Grid>
            <Grid item xs={3}>
                <TextField variant="outlined" label="State" fullWidth></TextField>
            </Grid>
            <Grid item xs={3}>
                <TextField variant="outlined" label="Zip code" fullWidth></TextField>
            </Grid>
            <Grid item xs={6}>
            <Button sx={{backgroundColor:"#154c76",height:50}}variant="contained" fullWidth >PROCEED TO CHECKOUT</Button>
            </Grid>
            </Grid>
            </CardContent>
        </Card>

        </Grid>
        <Grid item xs={3}></Grid>

      </Grid>
    )
}