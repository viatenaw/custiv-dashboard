import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import { AiOutlineMessage as InProgressQuotesIcon } from 'react-icons/ai'

export const QuotesInProgress = (props) => (
  <Card
    sx={{ height: '100%', backgroundColor: '#FFF6EA' }}
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
              backgroundColor: '#FF8C04',
              height: 36,
              width: 36
            }}
          >
            <InProgressQuotesIcon />
          </Avatar>
        </Grid>
        <Grid direction="column" xs={9} mt={6} item>
          <Typography
          color="textPrimary"
          variant="h3"
          sx={{ lineHeight: '24px' }}
          >
            36
          </Typography>
          <Typography
            color="textSecondary"
            variant="overline"
            sx={{ letterSpacing: 0 }}
          >
            Quotes In Progress
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
