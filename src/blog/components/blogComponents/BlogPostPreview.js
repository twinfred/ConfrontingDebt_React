import React, { Component } from 'react';

class BlogPostPreview extends Component {
    render(){
        return (
            <a href={"/blog/post/" + this.props.obj.blog_slug} >
                <div style={{"width" : "300px", "display" : "inline-block", "vertical-align" : "top"}} className="blogPostPreview">
                    <img style={{"width" : "300px"}} src={ this.props.obj.blog_featuredImage || "https://s.hswstatic.com/gif/money-world-360x240.jpg" } />
                    <h5>{ this.props.obj.blog_title }</h5>
                    <p>{ this.props.obj.blog_content.substring(0,100) }...</p>
                </div>
            </a>
        )
    }
}

export default BlogPostPreview;