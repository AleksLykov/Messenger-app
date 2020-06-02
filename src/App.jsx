import React from 'react';
import './styles/App.css';
import { Grid } from '@material-ui/core';

import FriendsList from './components/friendsList/friendsList'
import ListMessages from './components/listMessages/listMessages'
import Login from './components/Login/login'

function App() {

  const messengerDataInit = [
    {
      id: 111,
      name: 'John',
      friends: [222, 333],
      messages: [
        {
          id: 10,
          fromId: 222,
          text: 'Hello'
        },
        {
          id: 21,
          fromId: 222,
          text: 'How are you?'
        },
        {
          id: 16,
          fromId: 333,
          text: 'Hej!'
        },
        {
          id: 27,
          fromId: 333,
          text: 'Hur må du?'
        },
        {
          id: 19,
          fromId: 444,
          text: 'Hej, hej!'
        },
        {
          id: 25,
          fromId: 444,
          text: 'Vad gör du?'
        },
      ]
    },
    {
      id: 222,
      name: 'Kate',
      friends: [111, 444],
      messages: [
        {
          id: 11,
          fromId: 111,
          text: 'Hi'
        },
        {
          id: 23,
          fromId: 111,
          text: `I'm fine. And you?`
        },
      ]
    },
    {
      id: 333,
      name: 'Alice',
      friends: [444, 111],
      messages: [
        {
          id: 17,
          fromId: 111,
          text: 'Hi. Glad to see you!'
        },
        {
          id: 28,
          fromId: 111,
          text: 'Super. I am working'
        },
      ]
    },
    {
      id: 444,
      name: 'Margo',
      friends: [222, 333, 111],
      messages: [
        {
          id: 13,
          fromId: 111,
          text: 'Hello, Margo. I am busy'
        },
        {
          id: 27,
          fromId: 111,
          text: 'I drive to North.'
        },
      ]
    },
  ]

  const [currentUser, setCurrentUser] = React.useState()
  const [currentFriend, setCurrentFriend] = React.useState()
  const [messengerData, setMessengerData] = React.useState(messengerDataInit)

  const currentUserProfile = messengerData.find(item => item.id === currentUser)
  const usersAll = React.useMemo(() => messengerData.filter(item => messengerData.map(item => { return { id: item.id, userName: item.name, messagesCount: item.messages.length }})), [messengerData])
  const friendsList = React.useMemo(() => messengerData.filter(item => messengerData.find(item => item.id === currentUser)?.friends.includes(item.id)).map(item => { return { id: item.id, userName: item.name, messagesCount: item.messages.length }}), [messengerData, currentUser])
  const possibleFriends = React.useMemo(() => messengerData.filter(item => item.id !== currentUser).map(item => { return { id: item.id, userName: item.name, messagesCount: item.messages.length }}).filter(item => item.id !== friendsList.find(val => val.id === item.id)?.id), [messengerData,friendsList, currentUser])
  const messagesFriend = React.useMemo(() => messengerData.find(item => item.id === currentFriend)?.messages.filter(item => item.fromId === currentUser), [currentFriend, messengerData, currentUser])
  const messagesUser = React.useMemo(() => messengerData.find(item => item.id === currentUser)?.messages.filter(item => item.fromId === currentFriend), [messengerData, currentFriend, currentUser]) 

  const setNewMessage = (message) => {
    setMessengerData(messengerData.map(item =>  
      item.id === currentFriend ? {...item, messages: [...item.messages, {id: Date.now(), fromId: currentUser, text: message}]} : item
    ))
  }
  const removeFriend = (id) => {
    setMessengerData(messengerData.map(item => item.id === currentUser ? {...item, friends: item.friends.filter(item => item !== id)} : item))
    setCurrentFriend(null)
  }

  const addFriend = (id) => {
    setMessengerData(messengerData.map(item => item.id === currentUser ? {...item, friends: [...item.friends, id]} : item))
  }

  const addUser = (name) => {
    setMessengerData([...messengerData, { id: Date.now(), name: name, friends: [], messages: []}])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Cool mini messenger using React and MaterialUI</h3>
      </header>
      { !!!currentUser ? <Grid container justify="center" spacing={2}>
        <Grid item>
          <Login
            usersAll={usersAll}
            setCurrentUser={setCurrentUser}
            addUser={addUser}
          />
        </Grid>
      </Grid> :
      <Grid container justify="center" spacing={2}>
        <Grid item xs />
        <Grid item xs >
          <FriendsList
            possibleFriends={ possibleFriends }
            list={ friendsList }
            currentFriend={currentFriend}
            currentUserProfile={currentUserProfile}
            setCurrentUser={setCurrentUser}
            setCurrentFriend={setCurrentFriend}
            removeFriend={removeFriend}
            addFriend={addFriend}
          />
        </Grid>
        <Grid item xs={7}>
          <ListMessages
            messagesFriend={messagesFriend}
            messagesUser={messagesUser}
            setNewMessage={setNewMessage}
            currentUser={currentUser}
            currentFriend={currentFriend}
          />
        </Grid>
        <Grid item xs />
      </Grid> }
    </div>
  );
}

export default App;
