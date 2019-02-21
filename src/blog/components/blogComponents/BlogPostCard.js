import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogPostCard extends Component {
    render(){
        return (
            <Link to={"/post/" + this.props.obj.blog_slug}>
                <div style={{"width" : "300px", "display" : "inline-block", "verticalAlign" : "top"}} className="blogPostCard">
                    <img style={{"width" : "300px"}} alt={ this.props.obj.blog_title } src={ this.props.obj.blog_featuredImage || "https://s.hswstatic.com/gif/money-world-360x240.jpg" } />
                    <h5>{ this.props.obj.blog_title }</h5>
                    <p>{ this.props.obj.blog_content.substring(0,100) }...</p>
                </div>
            </Link>
        )
    }
}

export default BlogPostCard;