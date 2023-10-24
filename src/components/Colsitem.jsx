import { CardContent,Grid,Card, Typography} from "@mui/material";

import React from "react";

export const Colsitem=({item})=>{
    return(
       < Card>
       <CardContent>
        <Grid container>
            <Grid item xs={12}>
                <h2>{item}</h2>
            </Grid>
        </Grid>

       </CardContent>
       </Card>
    )
}