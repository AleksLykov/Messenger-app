import React from 'react'
import { Paper, withStyles } from '@material-ui/core'
import FriendItem from '../friendItem/friendItem'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const styles = {
  wrapper: {
    padding: '.5em 1em !important',
    minHeight: '500px',
    width: '230px',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  add: {
    display: 'flex',
    marginTop: 'auto',
  },
  user: {
    textAlign: 'left',
    margin: '.2em 0',
    backgroundColor: '#aaa',
  },
  action: {
   marginTop: '.3em',
  },
  header: {
    margin: '.5em 0',
  },
};

function FriendsList(props) {
  const { classes, list, possibleFriends, currentFriend, setCurrentFriend, currentUserProfile, setCurrentUser, removeFriend, addFriend } = props;
  const [user, setUser] = React.useState('')

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const clearAfterAdd = () => {
    addFriend(user)
    setUser('')
  }

  return (
    <Paper elevation={4} className={classes.wrapper}>
      <Card className={classes.user} >
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {currentUserProfile.name.slice(0,1)}
            </Avatar>
          }
          title={currentUserProfile.name}
          action={<IconButton aria-label="delete" className={classes.action} onClick={() => setCurrentUser()} ><TransferWithinAStationIcon /></IconButton>}
        />
      </Card>
      <h4 className={classes.header}>Friend List:</h4>
      { list.map( item => <FriendItem key={item.id} friend={item} currentFriend={currentFriend} setCurrentFriend={setCurrentFriend} removeFriend={removeFriend} />) }
      <Paper elevation={2} className={classes.add}>
        <Select
          fullWidth
          value={user}
          disabled={!!!possibleFriends.length}
          onChange={handleChange}
        >{ possibleFriends.map(item => <MenuItem value={item.id}>{item.userName}</MenuItem>) }</Select>
        <IconButton onClick={clearAfterAdd}><PersonAddIcon/></IconButton>
      </Paper>
    </Paper>
  )
}

export default withStyles(styles)(FriendsList)
