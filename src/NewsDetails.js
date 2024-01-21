import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const NewsDetails = () => {
    const {id}= useParams()
    const navigate = useNavigate()
    const {data:news, loading , error} = useFetch('http://localhost:3000/news/' + id)
    const handleClick = ()=>{
        fetch('http://localhost:3000/news/' + news.id ,{
            method:'DELETE'
        }).then(()=>{
            navigate("/")
        })

    }
    return (  
        <div className="news-detail">
            <h3>News Details </h3>
            {error && <div>{error}</div>}
            {loading && <div>Loading ...</div>}
            {news && (
                <article>
                    <h2>{news.title}</h2>
                    <p>Source of News : {news.source} </p>
                    <div> {news.body}</div>
                <button onClick={handleClick}>delete</button>

                </article>
            )}
        </div>
    );
}
 
export default NewsDetails;