import React from "react";
import { CardContent,Card, Grid, Typography} from "@mui/material";
export const Coloritem=({item})=>{
    return(
    
        <Card sx={{bgcolor:`${item}`,height:"160px"}}>
            <CardContent>
            <Grid container spacing={3}>
                <Grid item xs={12} align="center"  >
                    <Typography sx={{marginTop:"25px", fontWeight:"bolder"}} variant="h5" gutterBottom>
                        {item}
                        </Typography>
                     </Grid>
             </Grid>
            </CardContent>
        </Card>

    )
}