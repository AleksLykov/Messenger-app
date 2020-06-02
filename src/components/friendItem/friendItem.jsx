import React from 'react'
import { withStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/DeleteForever';

const styles = theme => ({
  avatar: {
    backgroundColor: '#282c34',
  },
  root: {
    textAlign: 'left',
    margin: '.2em 0',
    backgroundColor: '#eee',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#ddd',
    },
  },
  selected: {
    backgroundColor: '#ccc'
  },

});

function FriendItem(props) {
  const { classes, friend: { id, userName, messagesCount}, currentFriend, setCurrentFriend, removeFriend } = props;

  return (
    <Card className={`${classes.root} ${currentFriend===id && classes.selected}`} onClick={(e) => !!e.target.innerText ? setCurrentFriend(id) : removeFriend(id)} >
    <CardHeader
      avatar={
        <Avatar aria-label="recipe" className={classes.avatar}>
          {userName.slice(0,1)}
        </Avatar>
      }
      title={userName}
      subheader={`messages: ${messagesCount}`}
      action={<IconButton aria-label="delete" ><DeleteIcon /></IconButton>}
    />
    </Card>
  )
}

export default withStyles(styles)(FriendItem)