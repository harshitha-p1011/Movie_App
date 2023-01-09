import React, {useState, useEffect} from "react";
import Content from "../components/content";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home =()=>{
    const [loading, setLoading]=useState(true);
    const [movie, setMovie]= useState({});
    const [searchText, setSearchText]= useState("the Avengrer");
    useEffect(()=>{
        const fetchMovie= async()=>{
            try{
                const reponse= await fetch(`http://img.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`);
                const data= await Response.json();
                setMovie(data);
                setLoading(false);
            } catch(error) {
                console.log(error);
            }
        };
        fetchMovie();
    },[searchText]);
    if(loading){
        return(
            <section className="search loading">
                <h1>Loading...</h1>
            </section>
        );
    }
    return(
        <div>
            <Navbar/>
        <div className="search-container">
        <form className="search-from">
            <input type="text" className="search-field" value={searchText} onClick={(e)=>
                setSearchText(e.target.value)}  placeholder="search for your favarite movie here..."
        />
    </form>
        </div>
        {searchText? (
            <content movie={movie}/>
        ):( 
            <div className="content-container">
            <h4> Please type any movie of your wish to search...</h4>
        </div>
        )}
    <Footer/>
        </div>
    );
};

export default Home;