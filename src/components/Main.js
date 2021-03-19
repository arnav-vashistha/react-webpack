import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addMovies } from '../redux/ActionCreators';

//Components
import { Movie } from './Movie'

const mapStateToProps = (state) => {
    return {
        movies: state.movies,

    }
}

const mapDispatchToProps = dispatch => ({

    fetchMovies: () => { dispatch(addMovies()) }
});

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchMovies();
    }

    render() {
        let { movies } = this.props.movies;
        console.log(movies);

        return (
            <div className="container">
                <div className="row">
                    {
                        movies.map(movie => {
                            return (
                                <div className="col-6 col-md-3" key={movie.id}>

                                    <Movie movie={movie} />

                                </div>

                            )
                        })
                    }

                </div>
                
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
