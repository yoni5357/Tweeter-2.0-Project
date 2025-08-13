import { createContext, useState } from "react";

export const TweetContext = createContext();

export function TweetProvider({children}){

    const [tweets,setTweets] = useState([]);

    return(
        <TweetContext.Provider value={{tweets,setTweets}}>
            {children}
        </TweetContext.Provider>
    )
}