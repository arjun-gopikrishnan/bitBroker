import React from 'react';
import {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const axios = require('axios');

const columns = [
  { id: 'name', label: 'Index', minWidth: '25%' },
  { id: 'code', label: 'Stock\u00a0ID', minWidth: '25%' },
  {
    id: 'population',
    label: 'Shares',
    minWidth: '25%',
    align: 'right',
    
  },
  {
    id: 'size',
    label: 'Avg. Value',
    minWidth: '25%',
    align: 'right',
    
  },
];

function createData(name, code, population, size) {
  return { name, code, population, size };
}

//var rows = [];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function Holdings(props) {

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows,setRows] = React.useState([]);
  async function fetchData(){
    const data = {
        username: props.props.currentUser.username,
        apiKey: props.props.currentUser.apiKey,
    }

    var config = {
        method: 'post',
        url: 'http://localhost:8080/GetHoldings',
        headers: { 
            'Content-Type': 'application/json'
          },
        data : JSON.stringify(data)
    };

    try{
        const response = await axios(config);
        const data = response.data.holdings;
        data.forEach(element =>{
            setRows(rows.concat(createData(element.holdingsId, element.stockId, element.numberOfStocks, element.averagePrice)))
        })
    }catch(error){  
        console.log(error);
    }
}
    useEffect(()=>{
        fetchData();
        console.log(rows)
    });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log(rows)}
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
