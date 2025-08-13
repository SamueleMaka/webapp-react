import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import "./Details.css"
function Details (){

    const {id} = useParams()
    const URL_API = `http://localhost:3000/api/movies/${id}`

    const [singleFilm, setSingleFilm] = useState([])

    useEffect(() => {
        axios.get(URL_API).then(res => {
            setSingleFilm(res.data)
        })
    }, [])

    return(
        <>
            <div className="container">
                <div className="imgContainer">
                    <img src={singleFilm.image} alt={singleFilm.title} className="detailsImage"/>
                </div>
                <div className="dataContainer">
                    <h2 className="detailTitle">{singleFilm.title} {singleFilm.release_year}</h2>
                    <h2>{singleFilm.director}</h2>
                    <p>{singleFilm.abstract}</p>
                    <div className="reviewContainer">
                        <h1>Reviews</h1>
                        {
                            singleFilm.reviews && singleFilm.reviews.map((currRev) =>{
                                return(
                                    <p className="review">{currRev.text}</p>
                                )
                            }) 
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default Details