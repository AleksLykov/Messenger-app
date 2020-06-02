import React from 'react'
import { Paper, withStyles } from '@material-ui/core'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import InputIcon from '@material-ui/icons/Input';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TextField from '@material-ui/core/TextField'

const styles = {
  wrapper: {
    padding: '1em !important',
    width: '400px',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  add: {
    display: 'flex',
    marginTop: 'auto',
  },
  field: {
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  inputNew: {
    marginLeft: '.5em',
  },
  input: {
    padding: '.5em',
  },
};

function Login(props) {
  const { classes, usersAll, setCurrentUser, addUser } = props;
  const [user, setUser] = React.useState('')
  const [newUserName , setNewUserName] = React.useState('')

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const clearAfterAdd = () => {
    setCurrentUser(user)
    setUser('')
  }

  const clearAfterNewUser = () => {
    addUser(newUserName)
    setNewUserName('')
  }

  return (
    <Paper elevation={4} className={classes.wrapper}>
      <h3>Login</h3>
      <Paper elevation={0} className={classes.field}>
        <span>Select&nbsp;user: </span>
        <Select
          fullWidth
          value={user}
          onChange={handleChange}
        > { usersAll.map(item => <MenuItem value={item.id}>{item.name}</MenuItem>) } </Select>
        <IconButton onClick={clearAfterAdd}><InputIcon/></IconButton>
      </Paper>
      <Paper elevation={0} className={classes.field}>
      <span>Create&nbsp;user: </span>
      <TextField
        fullWidth
        variant='outlined'
        className={classes.inputNew}
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        inputProps={{ className:  classes.input}}
      />
      <IconButton onClick={clearAfterNewUser} disabled={!!!newUserName} ><PersonAddIcon/></IconButton>
    </Paper>
    </Paper>
  )
}

export default withStyles(styles)(Login)