import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const [title ,setTittle] = useState('')
  const [body ,setBody] = useState('')
  const [source ,setSource] = useState('')
  const [upload ,setUpload] = useState(false)

  const navigate = useNavigate()
 
  const handleSubmit = (e) =>
  {
    e.preventDefault() 
    const news = {title , body , source}

    setUpload(true);
    // console.log(news)
    fetch('http://localhost:3000/news', {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(news)
      
    }).then(()=>
    {
      setUpload(false);
      console.log('News Uploaded')
      navigate('/')
    })
   }
    return (  
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input type="text" 
           required 
           value={title}
           onChange={(e)=>setTittle(e.target.value)}
           />
  
          <label htmlFor="body">Body:</label>
          <textarea 
           name="body" rows="4"
            required
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            ></textarea>
  
          <label htmlFor="source">Source:</label>
          <select 
           value={source}
           onChange={(e)=>setSource(e.target.value)}
          >
            <option value="Nation">Nation</option>
            <option value="Standard plc">Standard plc</option>
            <option value="Royal Media">Royal Media</option>
          </select><br />
  
          
          <p>{source}</p>
          {!upload && <button type="submit">Upload News</button>}
          {upload && <button type="submit" disabled>UPLOADING NEWS...</button>}

        </form>
        
   
    );
  }
  
  export default Create;
  