import { Link } from "react-router-dom";

const BlogList = ({news , title }) => {
  
    return ( 
        <div className="home">
        <h1>{title}</h1>
        {news.map((newitem) => (
            
            <div className="new" key={newitem.id}>
                <Link to={`/news/${newitem.id}`}>
                <h1>{newitem.title}</h1>
                <p>{newitem.source}</p>
                </Link>
                {/* <button onClick={() => handleDelete(newitem.id) }>Delete news</button> */}
            </div>
        ))}
    </div>
     );
}
 
export default BlogList;