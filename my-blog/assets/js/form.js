// document.addEventListener("DOMContentLoaded", => {

    const form = document.getElementById('blogPostForm')
    const usernameInput = document.getElementById('username');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('postContent');
    const submitBtn = document.getElementById('submit');
    
    const savedUsername = localStorage.getItem('username')
    const savedTitle = localStorage.getItem('title')
    const savedContent = localStorage.getItem('content')
    
    let allBlogPosts = JSON.parse(localStorage.getItem("allBlogPosts")) || []
    
    // })
    
    
    submitBtn.addEventListener('click',function (event){
        event.preventDefault(); 
    
        const blogPost = {
            title: titleInput.value,
            content: contentInput.value,
            username: usernameInput.value,
    }

        console.log(blogPost)
        // let allBlogPosts = JSON.parse(localStorage.getItem("allBlogPosts")) || []
        allBlogPosts.push(blogPost)
        localStorage.setItem('allBlogPosts', JSON.stringify(allBlogPosts))
        window.location.href = "blog.html"
    });