import "./Tweet.css"

export default function Tweet({userName, content, date}){
    return(
        <div className="tweet-container">
            <div className="top-section">
                <p>{userName}</p>
                <p>{date.toLocaleString()}</p>
            </div>
            <div className="tweet">{content}</div>
        </div>
    )
}