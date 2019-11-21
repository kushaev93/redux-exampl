import React, { Component } from 'react';
import PostItem from './PostItem';
import LinearProgress from '@material-ui/core/LinearProgress';

class Posts extends Component {
    constructor(props){
        super(props);

        this.state = {
            posts: [],
            isLoading: false
        }
    }

    componentWillMount(){
        this.setState({
            isLoading : !this.state.isLoading
        })
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => res.json())
        .then(data => this.setState({
            posts: data,
            isLoading : !this.state.isLoading
        }))
    }
    render() {
        
        return (
            <div>
                <h1>Posts</h1>
                {this.state.isLoading ? 
                <React.Fragment>
                <LinearProgress variant="query" />
                <LinearProgress variant="query" color="secondary" />
                </React.Fragment>:
               
                 <PostItem data={this.state.posts}/>
                }
               
               
            </div>
        )
    }
}

export default Posts;