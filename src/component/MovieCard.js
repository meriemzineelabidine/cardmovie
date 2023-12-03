import Footer from "./Footer";
import React from "react";
import ReactStars from "react-rating-stars-component";



function MovieCard({data}){
    return(
        <div className="box">
            <div ><img className="img-film"src={data.img}></img></div>
            <div className="title">{data.title} </div>
            <div className="description">{data.description}</div>
            <div className="lien"><a href="https://i1.wp.com/www.vitav.fr/wp-content/uploads/2023/01/Screenshot-2023-01-18-17.38.11.png?fit=747%2C398&ssl=1">{data.url}</a></div>
            <div className="style-txt"><ReactStars count={5}
      onChange={data.rating}
     size={24}
     activeColor="#ffd700" />{data.rating}</div>

        </div>
    );
}
export default MovieCard ;