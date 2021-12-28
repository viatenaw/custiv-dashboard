import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { QuotesReceived } from '../components/dashboard/quotes-received';
import { QuotesInProgress } from '../components/dashboard/quotes-in-progress';
import { QuotesRequested } from '../components/dashboard/quotes-requested';
import { PrototypingDemoQuote } from '../components/dashboard/prototyping-demo-quote';
import { SamplePrintsDemoQuote } from '../components/dashboard/sample-prints-demo-quote';
import { LatestQuotes } from '../components/dashboard/latest-quotes';

const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard | Custiv
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={2} direction='row'>
          <Grid
            xs={12}
            container
            spacing={4}
            direction='row'
            ml={0}
          >
            <Grid item xs={8} style={{ paddingLeft: 0, paddingBottom: '5px' }}>
            Recent Activity
            </Grid>
            <Grid item xs={4} style={{ paddingLeft: '16px', paddingBottom: '5px' }}>
            Recent Quotes
            </Grid>
          </Grid>
          <Grid
            xs={8}
            container
            spacing={2}
            direction='row'
          >
            <Grid
              item
              lg={4}
              sm={6}
              xl={3}
              xs={12}
            >
              <QuotesRequested />
            </Grid>
            <Grid
              item
              xl={3}
              lg={4}
              sm={6}
              xs={12}
            >
              <QuotesInProgress />
            </Grid>
            <Grid
              item
              xl={3}
              lg={4}
              sm={6}
              xs={12}
            >
              <QuotesReceived />
            </Grid>
          </Grid>
          <Grid ml={2} xs={4} container spacing={2}>
            <Grid
              item
              xl={3}
              lg={12}
              sm={6}
              xs={12}
              direction={'row'}
            >
              <PrototypingDemoQuote />
            </Grid>
            <Grid
              item
              xl={3}
              lg={12}
              sm={6}
              xs={12}
              direction={'row'}
            >
              <SamplePrintsDemoQuote />
            </Grid>
          </Grid>
          <Grid mt={5} container>
            <LatestQuotes />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
