const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Blog = new Schema({
    blog_title: {
        type: String
    },
    blog_content: {
        type: String
    },
    blog_categories: {
        type: String
    },
    blog_tags: {
        type: String
    },
    blog_slug: {
        type: String
    },
},{
    collection: 'blog'
});

module.exports = mongoose.model('Blog', Blog)