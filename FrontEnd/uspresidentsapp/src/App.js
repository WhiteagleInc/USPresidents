import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './App.css';

const url_uspresidents_base = 'https://uspresidentswebapp.azurewebsites.net/api/presidents?orderByEnum=';

class App extends Component {
  constructor() {
    super();
    this.state = {
      orderByEnum : 'ascending',
      presidents: []
    }
  }

  changeOrderByAscending = () => {
    fetch(`${url_uspresidents_base}${this.state.orderByEnum}`).then(resolve => {
      return resolve.json();
    }).then(data => {
      this.setState({
        presidents: data
      });
      this.setState({
        orderByEnum: 'ascending'
      });
    });
  }

  changeOrderByDescending = () => {
    fetch(`${url_uspresidents_base}${this.state.orderByEnum}`).then(resolve => {
      return resolve.json();
    }).then(data => {
      this.setState({
        presidents: data
      });
      this.setState({
        orderByEnum: 'descending'
      });
    });
  }

  render () {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="h6" color="inherit">
                Presidents of United States of America
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={2}>
            Order By Name:
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={this.changeOrderByAscending}>
              Ascending
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={this.changeOrderByDescending}>
              Descending
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Birthday</TableCell>
                <TableCell align="right">Birth Place</TableCell>
                <TableCell align="right">Death Day</TableCell>
                <TableCell align="right">Death Place</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.presidents.map(function(item, index) {
                return (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell align="right">{item.birthday}</TableCell>
                    <TableCell align="right">{item.birthPlace}</TableCell>
                    <TableCell align="right">{item.deathDay}</TableCell>
                    <TableCell align="right">{item.deathPlace}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Grid>
      </div>
    );
  }
}

export default App;