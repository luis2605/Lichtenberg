import React, {useState,useEffect} from 'react'
import postData from './postData';
import classes from './aktuelle.module.css'

const Aktuelles = () => {

    const [posts, setPosts] = useState(postData);
    const [myVariable, setMyVariable] = useState("");
   
   

   
    const postContainer = posts.map((post,index) => {
    
        return (
        
            <div className="fb-post" key={index}  data-href={`https://www.facebook.com/facebook/posts/${post.postNumber}`} 
            data-width={myVariable}
           
            data-tabs="timeline, events" 
            data-show-text="false" 
            data-colorscheme="dark"> 
            </div>
        )   
            })
            useEffect(() => {
              window.FB.XFBML.parse();
            }, []);
            useEffect(() => {
              const handleResize = () => {
                if (window.innerWidth <= '400') {
                  setMyVariable('300px');
                } else {
                  setMyVariable('400px');
                }
              };
              window.addEventListener('resize', handleResize);
              return () => window.removeEventListener('resize', handleResize);
              
            }, []);
            console.log(myVariable);
    return (
      <div className={classes["fb-post-container"]} >
        <h2>Aktuelles</h2>
        <h4>Hier finden Sie alles rund um <span  className={classes["fb-post-span"]} >Lichtenberg</span> . Anstehende Events, Neuigkeiten und aktuelle Termine<span  className={classes["fb-post-span"]} > :</span> </h4>
          <div className={classes["post"]}  > {postContainer}</div>
       
       
      </div>
    );
  }

export default Aktuelles