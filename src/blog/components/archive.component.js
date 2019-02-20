import React, { Component } from 'react';
import axios from 'axios';
import BlogPostPreview from './blogComponents/BlogPostPreview';

export default class Archive extends Component {

    constructor(props){
        super(props);
        this.state = {blog: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/blog/archives').then(
            response => {
                this.setState({ blog: response.data });
                console.log(this.state.blog);
            }
        ).catch(
            error => {
                console.log(error);
            }
        );
    }

    blogPostPreview(){
        return this.state.blog.map((object,i) => {
            return <BlogPostPreview obj={object} key={i} />;
        });
    }

    render(){
        return (
            <div>
                <h4>Blog Post Archives</h4>
                <div id="blogArchivesContainer">
                    { this.blogPostPreview() }
                </div>
            </div>
        );
    }
}