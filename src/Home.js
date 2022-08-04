import useFetch from './useFetch';
import BlogList from './BlogList';


const Home = ({setLoginUser}) => {
 
       const { data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
       
   
       return ( 
         
     <div className="home">
    
        <div className="button" onClick={() => setLoginUser({})} >Logout</div>
         
        {error && <div>{ error } </div>}
        
        { isPending && <div>Loading...</div> }
        { blogs && <BlogList  blogs ={blogs } title="All Blogs!" />}
         { blogs && <BlogList  blogs={blogs.filter((blog)=>blog.author==='Ankit') } title="Ankit's blogs" /> }
         <div><br /></div>
         { blogs && <BlogList  blogs={blogs.filter((blog)=>blog.author==='Ashish') } title="Ashish's blogs" /> }
         <div><br /></div>
         { blogs && <BlogList  blogs={blogs.filter((blog)=>blog.author==='Anurag') } title="Anurag's blogs" /> }
         
  </div>

    );
}
 
export default Home;