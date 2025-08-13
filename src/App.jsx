import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTweet from './components/CreateTweet'
import Tweet from './components/Tweet'
import API_KEY from "../apiKey.js"

function App() {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("") ;
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const baseUrl = "https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets?apikey="
  const userName = "John";

  const handleTextChange = (changedText) =>{
    setText(changedText)
    if(text.length > 140){
      setErrorMessage("The tweet can't contain more then 140 chars")
    }
    else setErrorMessage("");
  }

  const addTweet = () => {
    const newDate = new Date;
    postTweet({userName:userName, content:text, date:newDate.toLocaleString()});
    setText("");
  }

  const renderTweets = () => {
    return tweets.map((tweet,index) =>
       <Tweet key={index}
          userName={tweet.userName}
          content={tweet.content}
          date={tweet.date}/>)
  }

  async function postTweet(tweet){
    const response = await fetch(baseUrl+API_KEY, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tweet)
    })
    if(!response.ok){
      throw new Error("post response not ok")
    }
    setTweets(tweets.concat(tweet));
  }

  async function fetchTweets(){
    const response = await fetch(baseUrl+API_KEY);
    if(!response.ok){
      throw new Error("get response not ok");
    }
    const results = response.json();
    return results;
  }

  useEffect(() => {
    const getData = async function(){
      const newTweets = await fetchTweets();
      newTweets.sort((a,b) => b.date-a.date)
      setTweets(newTweets)
    }
    getData();
  },[])

  return (
    <>
      <CreateTweet text={text} handleChange={handleTextChange} errorMessage={errorMessage} submit={addTweet}/>
      {renderTweets()}
    </>
  )
}

export default App
