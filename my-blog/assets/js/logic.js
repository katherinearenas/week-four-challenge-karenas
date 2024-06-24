let username = document.getElementById('username');
let title = document.getElementById('title');
let content = document.getElementsByName('content');
let submitBtn = document.getElementById('submit');
console.log(title)

submitBtn.addEventListener('click',function (event){
    event.preventDefault();

    const blogPost = {
        title: title.textContent,
        content: content.textContent,
        username: username.textContent,

    }
    console.log(blogPost)

    localStorage.setItem('blogPost', JSON.stringify(blogPost))

});
