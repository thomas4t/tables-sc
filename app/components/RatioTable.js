import React from "react";

import TextField from "@material-ui/core/TextField";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

const RatioTable = (props) => {
  return (
    <TableContainer
      style={{ margin: "auto", marginBottom: "3%" }}
      component={Paper}
    >
      <Table aria-label="customized table">
        <TableHead style={{ backgroundColor: "rgba(25,32,71, 0.9)" }}>
          <TableRow>
            <TableCell style={{ color: "#fff" }}>Výpočet poměru</TableCell>
            <TableCell>
              <span></span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">Chtěná celková váha</TableCell>
            <TableCell>
              <form autoComplete="off">
                <TextField
                  value={props.desiredWeight}
                  onChange={props.handleDesiredWeightChange}
                  onKeyPress={(ev) => {
                    if (ev.key === "Enter") {
                      ev.preventDefault();
                      document.getElementById("epox").focus();
                    }
                  }}
                  type="number"
                  id="weight"
                  size="small"
                  label="Kg"
                />
              </form>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">Poměr</TableCell>
            <TableCell>
              <form autoComplete="off">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <TextField
                      value={props.epoValue}
                      onChange={props.handleEpoValueChange}
                      onKeyPress={(ev) => {
                        if (ev.key === "Enter") {
                          ev.preventDefault();
                          document.getElementById("hardener").focus();
                        }
                      }}
                      type="number"
                      id="epox"
                      size="small"
                      label="Pryskyřice"
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      display="inline"
                      variant="h6"
                      component="p"
                      fontWeight="400"
                    >
                      :
                    </Typography>
                  </Grid>
                  <Grid item>
                    <TextField
                      value={props.hardenerValue}
                      onChange={props.handleHardenerValueChange}
                      onKeyPress={(ev) => {
                        if (ev.key === "Enter") {
                          ev.preventDefault();
                          document.getElementById("hardener").blur();
                        }
                      }}
                      type="number"
                      id="hardener"
                      size="small"
                      label="Tvrdidlo"
                    />
                  </Grid>
                </Grid>
              </form>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RatioTable;
