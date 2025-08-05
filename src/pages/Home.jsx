import { useState, useEffect } from "react"
import axios from "axios"
import SingleCard from "../components/SingleCard"
function Home() {

    const [movie, setMovie] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:3000/api/movies").then(res=>{
            setMovie(res.data)
        })
    }, [])
    return(
        <>
            <ul>
                {movie.map((currMovie) =>{
                    return(
                        <SingleCard 
                            key={currMovie.id}
                            title={currMovie.title}
                            release_year={currMovie.release_year}
                            image={currMovie.image}
                            id={currMovie.id}
                        />
                    )
                })}
            </ul>
        </>
    )
}

export default Home