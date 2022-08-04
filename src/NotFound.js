import { Link } from "react-router-dom";

const NotFound = () => {
  
    return ( 
        <div className="not-found">
          <h2>Sorry</h2>
          <p>That page cannot be found</p>
         <div className="back"> <Link to="/" ><img src="back.png" alt="back" width="70px"   />   Back to the homepage... </Link>
         </div>
        
        </div>
     );
}
 
export default NotFound;