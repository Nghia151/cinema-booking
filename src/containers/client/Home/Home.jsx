
import React, { Component } from 'react'
import HomeCarousel from './Carousel/HomeCarousel'
import MovieList from './MovieList/MovieList'

export default class Home extends Component {
    render() {
        return (
            <div>
               
                <HomeCarousel />
                <MovieList />
              
            </div>
        )
    }
}
