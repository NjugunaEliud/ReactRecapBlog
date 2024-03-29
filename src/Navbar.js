import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <div className="navbar">
            <h1>Breaking News</h1>
            <div className="links">
                <Link to= "/">Home</Link>
                <Link to= "/create">Add News</Link>
            </div>
        </div>
    );
}
 
export default Navbar;