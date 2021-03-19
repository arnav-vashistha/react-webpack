import React from 'react'

export const Movie = ({ movie }) => {
    console.log(movie)
    return (
        <div className="card border-dark mb-3">
            <div className="card-header">{movie.title}</div>
            <div className="card-body text-dark">
                <h5 className="card-title">Rating : {movie.rank}</h5>
                <p className="card-text">
                    Summary : Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
        </div>
    )
}

