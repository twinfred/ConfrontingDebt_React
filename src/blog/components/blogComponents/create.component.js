import React, { Component } from 'react';
import '../style/create.css';
import axios from 'axios';

export default class Create extends Component {
    constructor(props){
        super(props);
        this.onChangeBlogTitle = this.onChangeBlogTitle.bind(this);
        this.onChangeBlogContent = this.onChangeBlogContent.bind(this);
        this.onChangeBlogCategories = this.onChangeBlogCategories.bind(this);
        this.onChangeBlogTags = this.onChangeBlogTags.bind(this);
        this.onChangeBlogSlug = this.onChangeBlogSlug.bind(this);
        this.onChangeBlogMetaDescription = this.onChangeBlogMetaDescription.bind(this);
        this.onChangeBlogMetaKeywords = this.onChangeBlogMetaKeywords.bind(this);
        this.onChangeBlogFeaturedImage = this.onChangeBlogFeaturedImage.bind(this);
        this.onChangeBlogOgTitle = this.onChangeBlogOgTitle.bind(this);
        this.onChangeBlogOgDescription = this.onChangeBlogOgDescription.bind(this);
        this.onChangeBlogOgImage = this.onChangeBlogOgImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            blog_title: '',
            blog_content: '',
            blog_categories: '',
            blog_tags: '',
            blog_slug: '',
            blog_metaDescription: '',
            blog_metaKeywords: '',
            blog_featuredImage: '',
            blog_ogTitle: '',
            blog_ogDescription: '',
            blog_ogImage: '',
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
    onChangeBlogSlug(e){
        this.setState({
            blog_slug: e.target.value,
        });
    }
    onChangeBlogMetaDescription(e){
        this.setState({
            blog_metaDescription: e.target.value,
        });
    }
    onChangeBlogMetaKeywords(e){
        this.setState({
            blog_metaKeywords: e.target.value,
        });
    }
    onChangeBlogFeaturedImage(e){
        this.setState({
            blog_featuredImage: e.target.value,
        });
    }
    onChangeBlogOgTitle(e){
        this.setState({
            blog_ogTitle: e.target.value,
        });
    }
    onChangeBlogOgDescription(e){
        this.setState({
            blog_ogDescription: e.target.value,
        });
    }
    onChangeBlogOgImage(e){
        this.setState({
            blog_ogImage: e.target.value,
        });
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        const blogObj = {
            blog_title: this.state.blog_title,
            blog_content: this.state.blog_content,
            blog_categories: this.state.blog_categories,
            blog_tags: this.state.blog_tags,
            blog_slug: this.state.blog_slug,
            blog_metaDescription: this.state.blog_metaDescription,
            blog_metaKeywords: this.state.blog_metaKeywords,
            blog_featuredImage: this.state.blog_featuredImage,
            blog_ogTitle: this.state.blog_ogTitle,
            blog_ogDescription: this.state.blog_ogDescription,
            blog_ogImage: this.state.blog_ogImage,
        };
        axios.post('http://localhost:4000/blog/add', blogObj).then(
            res => {
                console.log(res.data);
            }
        );
        this.setState({
            blog_title: '',
            blog_content: '',
            blog_categories: '',
            blog_tags: '',
            blog_slug: '',
            blog_metaDescription: '',
            blog_metaKeywords: '',
            blog_featuredImage: '',
            blog_ogTitle: '',
            blog_ogDescription: '',
            blog_ogImage: '',
        });
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
                        <label htmlFor="blogSlug">Blog Slug</label>
                        <input
                            type="text"
                            className="form-control"
                            id="blogSlug"
                            value={this.state.blog_slug}
                            onChange={this.onChangeBlogSlug}/>
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
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="blogFeaturedImage">Featured Image</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="blogFeaturedImage"
                                    value={this.state.blog_featuredImage}
                                    onChange={this.onChangeBlogFeaturedImage}/>
                                <small>The feature image should be [insert size later]</small>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="blogOgImage">OG:Image</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="blogOgImage"
                                    value={this.state.blog_ogImage}
                                    onChange={this.onChangeBlogOgImage}/>
                                <small>The OG:Image should be [insert size later]</small>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="blogOgTitle">OG:Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="blogOgTitle"
                                    value={this.state.blog_ogTitle}
                                    onChange={this.onChangeBlogOgTitle}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="blogOgDescription">OG:Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="blogOgDescription"
                                    value={this.state.blog_ogDescription}
                                    onChange={this.onChangeBlogOgDescription}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="blogMetaDescription">Meta Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="blogMetaDescription"
                                    value={this.state.blog_metaDescription}
                                    onChange={this.onChangeBlogMetaDescription}/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="blogMetaKeywords">Meta Keywords</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="blogMetaKeywords"
                                    value={this.state.blog_metaKeywords}
                                    onChange={this.onChangeBlogMetaKeywords}/>
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