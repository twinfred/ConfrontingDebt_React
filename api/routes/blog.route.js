const express = require('express');
const blogRoutes = express.Router();

let Blog = require('../models/blog.model');

// Add Blog to DB
blogRoutes.route('/add').post((req,res) => {
    let blog = new Blog(req.body);
    blog.save().then(
        blog => {
            res.status(200).json({
                'message': 'Blog added to database successfully',
                'data': blog,
            });
        }
    ).catch(
        err => {
            console.err(err);
            res.status(400).send('Unable to save to database');
        }
    );
});

// Get All Blogs from DB
blogRoutes.route('/archives').get((req,res) => {
    Blog.find((err,blogs) => {
        if(err){
            console.error(err);
            res.status(400).send('Unable to get blogs from database');
        }else if(!blogs){
            res.status(404).send('No blogs found in database');
        }else{
            res.status(200).json(blogs);
        }
    });
});

// Get One Blog from DB
blogRoutes.route('/post/:id').get((req,res) => {
    Blog.findById(req.params.id, (err,blog) => {
        if(err){
            console.error(err);
            res.status(400).send('Unable to get blog from database');
        }else if(!blog){
            res.status(404).send('No blog found in database');
        }else{
            res.status(200).json(blog);
        }
    });
});

// Edit Blog Page
blogRoutes.route('/edit/:id').get((req,res) => {
    Blog.findById(req.params.id, (err,blog) => {
        if(err){
            console.error(err);
            res.status(400).send('Unable to find blog from database');
        }else if(!blog){
            res.status(404).send('No blog found in database');
        }else{
            res.status(200).json(blog);
        }
    });
});

// Update Blog - POST
blogRoutes.route('/update/:id').post((req,res) => {
    Blog.findById(req.params.id, (err,blog) => {
        if(err){
            console.error(err);
            res.status(400).send('Unable to update blog in database');
        }else if(!blog){
            res.status(404).send('No blog found in database');
        }else{
            blog.blog_title = req.body.blog_title;
            blog.blog_content = req.body.blog_content;
            blog.blog_catetgories = req.body.blog_catetgories;
            blog.blog_tags = req.body.blog_tags;
            blog.blog_slug = req.body.blog_slug;

            blog.save().then(
                blog => {
                    res.status(200).json({
                        'message': 'Blog successfully updated',
                        'data': blog
                    });
                }
            ).catch(
                err => {
                    console.error(err);
                    res.status(400).send('Unable to update the database');
                }
            );
        }
    });
});

// Destroy Blog
blogRoutes.route('/destroy/:id').get((req,res) => {
    Blog.findByIdAndRemove({_id: req.params.id}, (err,blog) => {
        if(err){
            res.json(err);
        }else if(!blog){
            res.status(404).send('No blog found in database');
        }else{
            res.status(200).json({'message': 'Blog successfully destroyed'})
        }
    });
});

module.exports = blogRoutes;