import React from 'react'
import { Paper, withStyles } from '@material-ui/core'

import InputMessage from '../inputMessage/inputMessage'
import MessageItem from '../messageItem/messageItem'

const styles = {
  wrapper: {
    padding: '.5em 1em !important',
    minHeight: '500px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
  },
  messages: {
    margin: '.5em 0',
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'column nowrap',
  },
};

function ListMessages(props) {
  const { classes, messagesFriend, messagesUser, setNewMessage, currentUser, currentFriend } = props;
  const list = messagesFriend?.concat(messagesUser).sort((a ,b) => a.id - b.id)
  
  return (
    <Paper elevation={4} className={classes.wrapper}>
      <h4>Message List:</h4>
      <Paper elevation={2} className={classes.messages}>
        {list && list.map(item => <MessageItem key={item.fromId+item.text} message={item} currentUser={currentUser} />)}
      </Paper>
      <InputMessage
        disabled={!!!currentFriend}
        setNewMessage={setNewMessage}
        currentFriend={currentFriend}
        currentUser={currentUser}
      />
    </Paper>
  )
}

export default withStyles(styles)(ListMessages)
