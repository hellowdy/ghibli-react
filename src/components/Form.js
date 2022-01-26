import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState([]);

    
    useEffect(() => {
        axios
        .get(`https://ghibliapi.herokuapp.com/films/${search}`
        )
        .then((res) => setMoviesData(res.data))
    }, [search]);
    fetch ({
        méthode: 'post',
        url: '/title',
      });

    

    return (
        <div className="form-component">
            <div className="form-container">
                <form>
                    <input type="text" placeholder="Entrez le titre d'un film" 
                    id="search-input" onChange={(e) => setSearch(e.target.value)}/>
                    <input type="submit" value="Rechercher"  />
                </form>

                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad">
                        Top<span>➜</span>
                        </div>
                    <div className="btn-sort" id="badToGood">
                        Flop<span>➜</span>
                        </div>
                </div>
            </div>
            <div className="result">
            {moviesData.slice(0, 12).map((movie) => (
            <Card key={movie.id} movie={movie}/>
            ))}
            </div>
        </div>
        
    );
};

export default Form;

/*
movie.id == movie.title

if input.value == movie.title
return movie.title
else
....


*/