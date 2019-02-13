import React, { Component } from 'react';
import './style/create.css';

export default class Create extends Component {
    render(){
        return (
            <div>
                <h4>Create New Blog Post</h4>
                <form>
                    <div className="form-group">
                        <label for="blogTitle">Blog Title</label>
                        <input type="text" className="form-control" id="blogTitle"/>
                    </div>
                    <div className="form-group">
                        <label for="blogContent">Blog Content</label>
                        <textarea className="form-control" id="blogContent" rows="10"></textarea>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="blogCategories">Blog Categories</label>
                                <input type="text" className="form-control" id="blogCategories"/>
                                <small>Separate each category with a comma (Example: "Money, Debt, Finances, Debt Free Journey")</small>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="blogTags">Blog Tags</label>
                                <input type="text" className="form-control" id="blogTags"/>
                                <small>Separate each tag with a comma (Example: "money, debt, finances, debt free journey")</small>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group" id="publishBtnContainer">
                        <input type="submit" value="Publish" className="btn btn-primary" id="publishBtn"/>
                    </div>
                </form>
            </div>
        )
    }
}