import { supabase } from "./supabase";

export async function postTweet(tweet) {
  await supabase
    .from("Tweets")
    .insert([
      { date: tweet.date, userName: tweet.userName, content: tweet.content },
    ]);
}

export async function fetchTweets() {
  const { data: tweets, error } = await supabase
    .from("Tweets")
    .select("*")
    .order("date", { ascending: false })
    .limit(20);
  if (error) {
    throw new Error("get response not ok");
  }
  return tweets;
}
