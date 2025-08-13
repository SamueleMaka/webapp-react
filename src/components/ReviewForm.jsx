import "./ReviewForm.css"
import axios from "axios"
import { useState } from "react"

function ReviewForm({movieId}){
    const [userRev, setUserRev] = useState({
        movie_id: movieId,
        name : "",
        text : "",
        vote : ""
    })
    const URL_API = `http://localhost:3000/api/movies/${movieId}/reviews`

    function handleFormData(e){
        setUserRev({
            ...userRev,
            [e.target.name]: e.target.value
        })
    }

    function formSubmit(e){
        e.preventDefault();

        axios.post(URL_API, userRev).then(res =>{
            console.log(res.data)
        })
    }

    return(
        <>
          <div className="revContainer">
            <div className="inputContainer">
              <form onSubmit={formSubmit}>
    
                <div className="authorInput">
                  <input type="text" placeholder="Inserisci il nome utente" name="name" value={userRev.name} onChange={handleFormData}/>
                </div>
    
                <div className="voteInput">
                  <input type="text" placeholder="Inserisci il voto da 1 a 5" name="vote" value={userRev.vote} onChange={handleFormData}/>
                </div>
    
                <div className="bodyInput">
                  <textarea placeholder="Inserisci la recensione" name="text" value={userRev.text} onChange={handleFormData}/>
                </div>
    
    
                <div className="submitInput">
                  <button type="submit"> Invia </button>
                </div>
    
              </form>
            </div>
          </div>
        </>
    )
}

export default ReviewForm