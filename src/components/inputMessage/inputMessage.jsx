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

const oldMessages = new Map()

function InputMessage(props) {
  const { classes, setNewMessage, disabled, currentFriend, currentUser } = props;

  const [message, setMessage] = React.useState('')

  const sendMessage = () => {
    setNewMessage(message)
    setMessage('')
  }
  
  React.useEffect(() => {
    oldMessages.has(currentFriend) ? setMessage(oldMessages.get(currentFriend)) : setMessage('')
  }, [currentFriend])
  React.useEffect(() => { oldMessages.clear() }, [currentUser])

  return (
    <Paper className={classes.paper} elevation={0}>
      <TextField
        variant='outlined'
        fullWidth
        className={classes.field}
        disabled={disabled}
        inputProps={{ className:  classes.input}}
        onChange={ e => {setMessage(e.target.value); oldMessages.set(currentFriend, e.target.value);}}
        value={message}
      />
      <IconButton disabled={disabled} onClick={sendMessage}><SendIcon /></IconButton>
    </Paper>
  )
}

export default withStyles(styles)(InputMessage)
