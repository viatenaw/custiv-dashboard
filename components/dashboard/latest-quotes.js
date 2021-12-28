import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import StatusTile from '../status-tile'

const orders = [
  {
    id: uuid(),
    ref: '987 123 4567',
    customer: {
      email: 'sanjaykumar@gmail.com'
    },
    uploads: 3,
    name: 'Prototyping Demo Quote',
    createdAt: '10 Oct 2020 06.30 PM',
    status: 'requested'
  },
  {
    id: uuid(),
    ref: '987 123 4567',
    amount: 25.1,
    customer: {
      email: 'sanjaykumar@gmail.com'
    },
    uploads: 22,
    name: 'Sample Prints Demo Quote',
    createdAt: '09 Oct 2020 08.45 AM',
    status: 'in-progress'
  },
  {
    id: uuid(),
    ref: '887 467 3490',
    amount: 10.99,
    customer: {
      email: 'Kartik21@gmail.com'
    },
    uploads: 2,
    name: 'Machine sample Demo Quote',
    createdAt: '08 Oct 202 06.11 PM',
    status: 'received'
  },
  {
    id: uuid(),
    ref: '887 467 3490',
    amount: 96.43,
    name: '4 Parts Demo Quote',
    customer: {
      email: 'Kartik21@gmail.com'
    },
    uploads: 12,
    createdAt: '05 Oct 2020 07.30 PM',
    status: 'received'
  },
  {
    id: uuid(),
    ref: '987 123 4567',
    amount: 32.54,
    name: 'Parts new Demo Quote',
    customer: {
      email: 'sanjaykumar@gmail.com'
    },
    uploads: 7,
    createdAt: '31 Sept 2020 01.30 PM',
    status: 'requested'
  },
  {
    id: uuid(),
    ref: '987 123 4567',
    amount: 16.76,
    customer: {
      email: 'sanjaykumar@gmail.com'
    },
    uploads: 9,
    name: 'CnC Prints Demo Quote',
    createdAt: '10 Sept 2020 06.31 PM',
    status: 'processing'
  }
];
const NUM_OF_QUOTES = 292
export const LatestQuotes = (props) => (
  <Card {...props} sx={{ width: '100%'}}>
    <CardHeader title={`${NUM_OF_QUOTES} Total Quotes Found`} />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>
                QUOTE NAME
              </TableCell>
              <TableCell>
                MAIL ID
              </TableCell>
              <TableCell>
                NUMBER
              </TableCell>
              <TableCell sortDirection="desc">
                <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    REQUESTED DATE
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>
                UPLOADS
              </TableCell>
              <TableCell>
                STATUS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                hover
                key={order.id}
              >
                <TableCell>
                  <FormControlLabel control={<Checkbox/>} label={order.name} />
                </TableCell>
                <TableCell>
                  {order.customer.email}
                </TableCell>
                <TableCell>
                  {order.ref}
                </TableCell>
                <TableCell>
                  {order.createdAt}
                </TableCell>
                <TableCell>
                  {order.uploads + ' Files'}
                </TableCell>
                <TableCell>
                  <StatusTile status={order.status}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
  </Card>
);
