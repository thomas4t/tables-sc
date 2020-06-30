import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Typography from "@material-ui/core/Typography";

import BuildIcon from "@material-ui/icons/Build";

const Description = (props) => {
  return (
    <>
      <Typography variant="subtitle1" component="h2" gutterBottom>
        Tabulka níže slouží k výpočtu míchacího poměru epoxidové pryskyřice a
        tvrdidla.
      </Typography>
      <List component="nav" aria-label="contacts">
        <ListItem>
          <ListItemIcon>
            <BuildIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Pro výpočet jednoduše zadejte potřebnou hmotnost smíchané pryskyřice a následně poměr pryskyřice a tvrdidla." />
        </ListItem>
      </List>
    </>
  );
};

export default Description;
