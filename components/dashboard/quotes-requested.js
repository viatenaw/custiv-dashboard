import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { BsFillArrowUpCircleFill as RequestedQuotesIcon } from 'react-icons/bs'

export const QuotesRequested = (props) => (
  <Card
    sx={{ height: '100%', backgroundColor: '#ECFBFF' }}
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
              backgroundColor: '#00B1ED',
              height: 36,
              width: 36
            }}
          >
            <RequestedQuotesIcon />
          </Avatar>
        </Grid>
        <Grid direction="column" xs={9} mt={6} item>
          <Typography
          color="textPrimary"
          variant="h3"
          sx={{ lineHeight: '24px' }}
          >
            209
          </Typography>
          <Typography
            color="textSecondary"
            variant="overline"
          >
            Quotes Requested
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
