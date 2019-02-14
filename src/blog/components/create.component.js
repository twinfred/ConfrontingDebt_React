import React, { Component } from 'react';
import './style/create.css';

export default class Create extends Component {
    constructor(props){
        super(props);
        this.onChangeBlogTitle = this.onChangeBlogTitle.bind(this);
        this.onChangeBlogContent = this.onChangeBlogContent.bind(this);
        this.onChangeBlogCategories = this.onChangeBlogCategories.bind(this);
        this.onChangeBlogTags = this.onChangeBlogTags.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            blog_title: '',
            blog_content: '',
            blog_categories: '',
            blog_tags: '',
        }
    }
    onChangeBlogTitle(e){
        this.setState({
            blog_title: e.target.value,
        });
    }
    onChangeBlogContent(e){
        this.setState({
            blog_content: e.target.value,
        });
    }
    onChangeBlogCategories(e){
        this.setState({
            blog_categories: e.target.value,
        });
    }
    onChangeBlogTags(e){
        this.setState({
            blog_tags: e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({
            blog_title: '',
            blog_content: '',
            blog_categories: '',
            blog_tags: '',
        })
    }

    render(){
        return (
            <div>
                <h4>Create New Blog Post</h4>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="blogTitle">Blog Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="blogTitle"
                            value={this.state.blog_title}
                            onChange={this.onChangeBlogTitle}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="blogContent">Blog Content</label>
                        <textarea
                            className="form-control"
                            id="blogContent"
                            rows="10"
                            value={this.state.blog_content}
                            onChange={this.onChangeBlogContent}/>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="blogCategories">Blog Categories</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="blogCategories"
                                    value={this.state.blog_categories}
                                    onChange={this.onChangeBlogCategories}/>
                                <small>Separate each category with a comma (Example: "Money, Debt, Finances, Debt Free Journey")</small>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="blogTags">Blog Tags</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="blogTags"
                                    value={this.state.blog_tags}
                                    onChange={this.onChangeBlogTags}/>
                                <small>Separate each tag with a comma (Example: "money, debt, finances, debt free journey")</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group" id="publishBtnContainer">
                        <input
                            type="submit"
                            value="Publish"
                            className="btn btn-primary"
                            id="publishBtn"/>
                    </div>
                </form>
            </div>
        )
    }
}