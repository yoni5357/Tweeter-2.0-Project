import API_KEY from "../apiKey.js"
const baseUrl = "https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets?apikey="

export async function postTweet(tweet){
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
}

export async function fetchTweets(){
    const response = await fetch(baseUrl+API_KEY);
    if(!response.ok){
        throw new Error("get response not ok");
    }
    const results = response.json()
    return results;
}