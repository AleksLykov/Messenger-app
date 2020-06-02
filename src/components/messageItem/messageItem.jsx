import React from 'react'
import { Paper, withStyles } from '@material-ui/core'

const styles = theme => ({
  paperleft: {
    backgroundColor: '#efefef',
    alignSelf: 'flex-start',
    padding: '.3em .5em',
    margin: '.5em',
  },
  paperright: {
    backgroundColor: '#efefef',
    alignSelf: 'flex-end',
    padding: '.3em .5em',
    margin: '.5em',
  },
  root: {
    margin: '.5em 0',
    backgroundColor: '#eee',
    cursor: 'pointer',
  },

});

function MessageItem(props) {
  const { classes, message, currentUser } = props;

  return (
    <Paper className={ message.fromId === currentUser ? classes.paperright : classes.paperleft}>
      {message.text}
    </Paper>
  )
}

export default withStyles(styles)(MessageItem)