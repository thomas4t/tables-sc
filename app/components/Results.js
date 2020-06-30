import React from "react";

import Typography from "@material-ui/core/Typography";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Results = (props) => {
  return (
    <TableContainer
      style={{
        margin: "auto",
        marginBottom: "3%",
        paddingBottom: "0.01rem",
        width: "300px",
      }}
      component={Paper}
    >
      <Table aria-label="customized table">
        <TableHead style={{ backgroundColor: "rgba(25,32,71, 0.9)" }}>
          <TableRow>
            <TableCell style={{ color: "#fff" }}>
              Potřebné množství pro {props.desiredWeight} Kg při poměru{" "}
              {props.epoValue}:{props.hardenerValue}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography display="inline" variant="body2" component="p">
                Pryskyřice
              </Typography>
              <Typography display="inline" variant="subtitle2" component="p">
                {props.epoRatio} Kg
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography
                display="inline"
                variant="body2"
                component="p"
                gutterBottom
              >
                Tvrdidlo
              </Typography>
              <Typography
                display="inline"
                variant="subtitle2"
                component="p"
                gutterBottom
              >
                {props.hardenerRatio} Kg
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default Results;
