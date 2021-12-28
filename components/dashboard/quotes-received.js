import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { BsFillArrowDownCircleFill as ReceivedQuotesIcon } from 'react-icons/bs'

export const QuotesReceived = (props) => (
  <Card
    sx={{ height: '100%', backgroundColor: '#EAFFF7' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        sx={{ justifyContent: 'space-between' }}
      >
         <Grid xs={3} mt={10} item>
          <Avatar
            sx={{
              backgroundColor: '#0BC281',
              height: 36,
              width: 36
            }}
          >
            <ReceivedQuotesIcon />
          </Avatar>
        </Grid>
        <Grid direction="column" xs={9} mt={6} item>
          <Typography
          color="textPrimary"
          variant="h3"
          sx={{ lineHeight: '24px' }}
          >
            47
          </Typography>
          <Typography
            color="textSecondary"
            variant="overline"
          >
            Quotes Received
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
