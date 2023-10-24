import { CardContent,Grid,Card,Button, Input} from "@mui/material";
import React,{useState} from "react";

export const Calculator=()=>{
    const[value,setValue]=useState("")
    
    return(
              <Card sx={{height:"330px",width:"300px",marginTop:"150px",marginLeft:"600px",bgcolor:"grey"}}>
                    <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Input type="text" value={value}/>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" color="warning" onClick={(e)=>setValue()}>AC</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" color="warning" onClick={(e)=>setValue(value.slice(0,-1))}>DE</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" color="warning" onClick={(e)=>setValue(value+e.target.value)} >.</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" color="warning" onClick={(e)=>setValue(value+e.target.value)} >%</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={(e)=>setValue(value+e.target.value)} >7</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained"onClick={(e)=>setValue(value+e.target.value)}>8</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained"onClick={(e)=>setValue(value+e.target.value)}>9</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" color="warning"onClick={(e)=>setValue(value+e.target.value)}>*</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained"onClick={(e)=>setValue(value+e.target.value)}>4</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained"onClick={(e)=>setValue(value+e.target.value)}>5</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained"onClick={(e)=>setValue(value+e.target.value)}>6</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" color="warning" onClick={(e)=>setValue(value+e.target.value)}>+</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" onClick={(e)=>setValue(value+e.target.value)}>1</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained"onClick={(e)=>setValue(value+e.target.value)}>2</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained"onClick={(e)=>setValue(value+e.target.value)}>3</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained" color="warning" onClick={(e)=>setValue(value+e.target.value)}>-</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained"onClick={(e)=>setValue(value+e.target.value)}>00</Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button variant="contained"onClick={(e)=>setValue(value+e.target.value)}>0</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" color="warning" fullWidth onClick={(e)=>setValue(eval(value))}>=</Button>
                        </Grid>


                    </Grid>
                </CardContent>
            </Card>
    )
}