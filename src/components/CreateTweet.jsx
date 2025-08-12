import "./CreateTweet.css"

export default function CreateTweet({text, handleChange, errorMessage, submit}){
    const isDisabled = () =>{
        if(errorMessage){
            return true
        }
        return false
    }

    const toggleErrorClass = () =>{
        if(!errorMessage){
            return "bottom-section"
        }
        else return "bottom-section-error"
    }

    return(
        <div className="tweet-creator">
            <textarea
                id="tweet-creation"
                placeholder="What do you have in mind..."
                value={text}
                onChange={(e) =>handleChange(e.target.value)}>
            </textarea>
            <div className={toggleErrorClass()}>
                {errorMessage && <div className="error"><span>{errorMessage}</span></div>}
                <button onClick={submit} className='tweet-button' disabled={isDisabled()}>Tweet</button>
            </div>
        </div>
    )
}