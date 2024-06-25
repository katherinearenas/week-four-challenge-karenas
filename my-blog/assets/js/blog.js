



 // Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to dark
let mode = 'dark';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});



const allBlogPosts = JSON.parse(localStorage.getItem('allBlogPosts')) || []
console.log(allBlogPosts)

for (let i = 0;  i < allBlogPosts.length; i++) {
    const allPosts = allBlogPosts[i];
    console.log(allPosts)
    // let allPostsEL = document.createElement('section')
    // document.querySelector(".inputcard").appendChild(allPostsEl)

    let titleEl = document.createElement('h3')
    titleEl.textContent = allPosts.title
    document.querySelector(".displayBlogPosts").appendChild(titleEl)
    
    let contentEl = document.createElement('p')
    contentEl.textContent = allPosts.content
    document.querySelector(".displayBlogPosts").appendChild(contentEl)

    let usernameEl = document.createElement('p')
    usernameEl.textContent = "Username: " + allPosts.username
    document.querySelector(".displayBlogPosts").appendChild(usernameEl)
}

