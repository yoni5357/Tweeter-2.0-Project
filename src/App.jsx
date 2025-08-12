import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTweet from './components/CreateTweet'
import Tweet from './components/Tweet'

function App() {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("") ;
  const [tweets, setTweets] = useState([]);
  const [firstMount, setFirstMount] = useState(true);
  const userName = "John";

  const handleTextChange = (changedText) =>{
    setText(changedText)
    if(text.length > 140){
      setErrorMessage("The tweet can't contain more then 140 chars")
    }
    else setErrorMessage("");
  }

  const addTweet = () => {
    setTweets(tweets.concat({userName:userName, content:text, date:new Date}));
    setText("");
  }

  const renderTweets = () => {
    return tweets.map((tweet,index) =>
       <Tweet key={index}
          userName={tweet.userName}
          content={tweet.content}
          date={tweet.date}/>)
  }

  useEffect(() => {
    if(firstMount && localStorage.getItem('tweets')){
      setTweets(JSON.parse(localStorage.getItem('tweets')));
      setFirstMount(false);
    }
    else{
      localStorage.setItem('tweets', JSON.stringify(tweets));
    }
  },[tweets])

  return (
    <>
      <CreateTweet text={text} handleChange={handleTextChange} errorMessage={errorMessage} submit={addTweet}/>
      {renderTweets()}
    </>
  )
}

export default App
