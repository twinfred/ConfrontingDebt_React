import React, { Component } from 'react';
import axios from 'axios';
import BlogPostCard from './BlogPostCard';

export default class Archive extends Component {

    constructor(props){
        super(props);
        this.state = {blog: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/blog/archives').then(
            response => {
                this.setState({ blog: response.data });
            }
        ).catch(
            error => {
                console.log(error);
            }
        );
    }

    blogPostCard(){
        return this.state.blog.map((object,i) => {
            return <BlogPostCard obj={object} key={i} />;
        });
    }

    render(){
        return (
            <div>
                <h4>Blog Post Archives</h4>
                <div id="blogArchivesContainer">
                    { this.blogPostCard() }
                </div>
            </div>
        );
    }
}