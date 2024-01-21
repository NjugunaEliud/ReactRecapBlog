
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    // const [news , setNews] = useState([
    //     {title:'Goverment Saga' , body:"Crisies as G to G deal fails to stabalize ksh aganist dolar",source:"Standard plc",id:1},
    //     {title:'Hoeism Femicide' , body:"Roysabu massacre" ,source:"Nation",id:3},
    //     {title:'Elnino rains' , body:"variu parts of the country are expiriencing heavy floods " ,source:"Nation",id:2}
    //    ]);
    // const [news , setNews] = useState(null)
    // const [loading , setLoading] = useState(true)
    // const [error , setError] = useState(null)
    // const handleDelete = (id) =>{
    //     const newitems = news.filter(newitem => newitem.id !== id);
    //     setNews(newitems);
    // }

    const {data:news, loading , error} = useFetch('http://localhost:3000/news')
    return (  
        <div className="home">
        {error && <div>{error}</div>}
        {loading && <div>Loading ...</div>}
       {news && <BlogList news = {news} title = "Breaking News"/>}
       {/* <BlogList news = {news.filter((newitem) => newitem.source === 'Nation')} title = "Nation meadia Group News" /> */}
        </div>
     
    );
}
 
export default Home;