import { Link } from "react-router-dom"

function SingleCard ({image, title, release_year, id}) {
    return(
        <>
        <Link to={`/${id}`}>
            <div className="cardContainer">
                <img src={image} alt={image} />

                <div className="dataContainer">
                    <h2>{title} {release_year}</h2>
                </div>

            </div>
        </Link>
            
        </>
    )
}

export default SingleCard