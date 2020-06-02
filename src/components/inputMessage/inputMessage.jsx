import React from 'react'
import { Paper, TextField, IconButton, withStyles } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const styles = theme => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
  },
  field: {

  },
  input: {
    padding: '.5em',
  },
});

function InputMessage(props) {
  const { classes, setNewMessage, disabled } = props;

  const [message, setMessage] = React.useState('')

  const sendMessage = () => {
    setNewMessage(message)
    setMessage('')
  }

  return (
    <Paper className={classes.paper} elevation={0}>
      <TextField
        variant='outlined'
        fullWidth
        className={classes.field}
        disabled={disabled}
        inputProps={{ className:  classes.input}}
        onChange={ e => setMessage(e.target.value)}
        value={message}
      />
      <IconButton disabled={disabled} onClick={sendMessage}><SendIcon /></IconButton>
    </Paper>
  )
}

export default withStyles(styles)(InputMessage)
