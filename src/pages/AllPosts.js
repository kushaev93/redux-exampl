import React, { Component } from 'react';
import Posts from '../components/Posts';
import Header from '../components/Header';

const AllPosts = (props) => {
        return (
            <div className="container">
                <Header />
                <Posts />
            </div>
        )
    }


export default AllPosts;