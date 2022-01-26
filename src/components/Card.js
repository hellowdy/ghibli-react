import React from 'react';

const Card = ({ movie}) => {

    return (
        <div className="card">
            <img 
            src={
                movie.movie_banner
                ? movie.movie_banner
                : "public\img\poster.jpg"} alt="affiche film "/>
            <h2>{movie.title}</h2>
            {
                movie.release_date ? (
                    <h5>Sorti le : {movie.release_date}</h5>
                ) : (
                    ""
                )}
                <h4>{movie.rt_score}/100 <span>⭐</span></h4>
                {movie.description ? <h3>Description</h3> : ""}
                <p>{movie.description}</p>

                <div className="btn">Ajouter aux coups de coeur</div>
        </div>
    );
};

export default Card;