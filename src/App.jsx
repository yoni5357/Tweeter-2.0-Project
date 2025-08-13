import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTweet from './components/CreateTweet'
import Tweet from './components/Tweet'
import Profile from './pages/Profile.jsx'
import { fetchTweets, postTweet } from './dataProvider.jsx'

function App() {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("") ;
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("")

  const handleTextChange = (changedText) =>{
    setText(changedText)
    if(text.length > 140){
      setErrorMessage("The tweet can't contain more then 140 chars")
    }
    else setErrorMessage("");
  }

  const addTweet = async () => {
    const newDate = new Date;
    let results;
    try{
      await postTweet({userName:userName, content:text, date:newDate.toLocaleString()});
      setIsLoading(true);
      results = await fetchTweets();
    }catch(e){
      return <div>Error:{e.message}</div> // TODO: make this work
    }
    setIsLoading(false);
    setTweets(results.sort((a,b) => b.id-a.id));
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
    const getData = async function(){
      setIsLoading(true);
      const newTweets = await fetchTweets();
      newTweets.sort((a,b) => b.id-a.id)
      setIsLoading(false);
      setTweets(newTweets)
    }
    getData();
    setUserName(localStorage.getItem('userName'));
  },[])

  const handleNameSave = (value) => {
    localStorage.setItem('userName', value);
    setUserName(value)
  }

  return (
    <>
      <Profile handleSave={handleNameSave}/>
      <CreateTweet text={text} handleChange={handleTextChange} errorMessage={errorMessage} submit={addTweet}/>
      {isLoading ? <div>Loading...</div> : renderTweets()}
    </>
  )
}

export default App
