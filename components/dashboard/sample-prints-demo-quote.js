import { Card, CardContent, Grid } from '@mui/material';
import StatusTile from '../status-tile'

export const SamplePrintsDemoQuote = (props) => (
    <Card
        sx={{  backgroundColor: '#FFFFFF', borderRadius: 0, boxShadow:'0px 3px 8px 0px #0E105333' }}
        {...props}
    >
        <CardContent>
            <Grid
                container
                spacing={2}
                direction='row'
                p={0}
            >
                <Grid item xs={8}>
                    <div style={{ fontSize: '14px', fontWeight: 600}}>
                        Sample Prints Demo Quote 
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <StatusTile/>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);
