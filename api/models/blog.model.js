const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Blog = new Schema({
    blog_title: {
        type: String,
        required: [true, "A blog title is required."]
    },
    blog_content: {
        type: String,
        required: [true, "You cannot create a blog without content."]
    },
    blog_categories: {
        type: String,
        required: [true, "At least one blog category is required."]
    },
    blog_tags: {
        type: String,
        required: [true, "At least one blog tag is required."]
    },
    blog_slug: {
        type: String,
        required: [true, "A blog slug is required."]
    },
    blog_metaDescription: {
        type: String,
        required: [true, "A blog meta description is required."]
    },
    blog_metaKeywords: {
        type: String,
        required: [true, "At least one blog metakeyword is required."]
    },
    blog_featuredImage: {
        type: String,
        required: [true, "A featured image is required."]
    },
    blog_ogTitle: {
        type: String,
        required: [true, "An og:title is required."]
    },
    blog_ogDescription: {
        type: String,
        required: [true, "An og:description is required."]
    },
    blog_ogImage: {
        type: String,
        required: [true, "An og:image is required."]
    },
},{
    collection: 'blog',
    timestamps: true,
});

module.exports = mongoose.model('Blog', Blog)