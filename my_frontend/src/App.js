

import {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

const {API_URL} = window.wingEnv;


function App() {
  const [isThinking, setIsThinking] = useState(false);
  const [input, setInput] = useState("");
  const [allInteractions, setAllInteractions] = useState([])

  const retrieveAllInteractions = async () => {
    await axios ({
      method: "GET",
      url: `${API_URL}/assistant`,
    }).then(res => {
      console.log(res)
      console.log("data", res.data)
      setAllInteractions(res.data)
    })
  }

  //post user query to the backend

  const handleSubmit = async (e) => {
    
    e.preventDefault()
    
    setIsThinking(!isThinking)

    
    if(input.trim() === ""){
      alert("Chat cannot be empty")
      setIsThinking(true)
      
    }else{

        try{

          axios({
            method: "POST",
            url: `${API_URL}/assistant`,
            headers: {
              "Content-Type": "application/json"
            },
            data: input
          })
          .then((res) => {
             setInput("")
             setIsThinking(false)
             console.log("response from sending prompt", res)
          })
      
        }catch (error){
          alert("an error occured while fetching", error)
        }
          
    }
        
  }

  useEffect(() => {
    retrieveAllInteractions()
  }, [isThinking])
  return (
    <div className="container">
      <div className="header">
        <h1>My Assistant</h1>
        <p>Ask anything...</p>
      </div>

        <div className="chat-area">
          <div className="chat-area-content">

          
            {allInteractions.map((chat) =>{
                return(
                  <div key={chat.id} className="user-bot-chat">
                    
                    <p className='user-question'>{chat.question}</p>
                    <p className='response'>{chat.answer}</p>

    
                  </div>
                )
            })}

            <p className={isThinking ? "thinking" : "notThinking"}>Generating response...</p>
            
          </div>
          <div className="type-area">
            <input type="text" placeholder="Ask me any question" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={handleSubmit}>Send</button>
          </div>
        </div>
    </div>
  );
}

export default App;



