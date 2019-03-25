import React, { Fragment } from "react";
import { withStyles } from '@material-ui/core/styles';
import { List, Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const scheduleStyles = {
  time: {
    fontSize: "20px",
    color: "#5dfdff"
  },
  listItem: {
    fontSize: "30px",
    color: "#5dfdff"
  }
}

const Schedule = ({...props}) => {
  const { messages, classes } = props
  var msg=[];

  messages.forEach(item => {
    if(item.time >= new Date())
    msg.push(item)
  })
  return (
    <List>
      { msg.slice(0, 7).map((msg, key) => (
        <ListItem key={key}>
          <ListItemText secondary={
            <Fragment>
              <Typography component="span" className={classes.listItem}>
               {msg.text && msg.text.replace(/(:[^:\s]*:)|(<[^>\s]*>)/g, '').trim()}
              </Typography>
              <Typography className={classes.time}>
                {msg.time.toLocaleTimeString()}
              </Typography>
            </Fragment>
          }/>
        </ListItem>
      )) }
    </List>
  );
}


export default withStyles(scheduleStyles)(Schedule);
