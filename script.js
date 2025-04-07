const toggleThemeBtn = document.querySelector(".header__theme-button");
const storiesContent = document.querySelector('.stories__content');
const storiesLeftButton = document.querySelector('.stories__left-button');
const storiesrightButton = document.querySelector('.stories__right-button');
const posts = document.querySelectorAll('.post');
const postsContent = document.querySelectorAll('.post__content');



//TEMA DARK/LIGHT
//Definir tema 
document.onload = setInitialTheme(localStorage.getItem('theme'))
function setInitialTheme(themeKey){
    if (themeKey === 'dark'){
        document.documentElement.classList.add('darkTheme')
} else {
    document.documentElement.classList.add('darkTheme')

}
}

// Toggle theme button
toggleThemeBtn.addEventListener('click', () => {
    // Toggle root class 
    document.documentElement.classList.toggle('darkTheme')

// Saving current theme on LocalStorage
    if (document.documentElement.classList.contains('darkTheme')){
        localStorage.setItem('theme', 'dark')

    } else{
        localStorage.setItem('theme', 'light')
    } 
})

// STORIES SCROLL BUTTONS
// Scrolling stories content
storiesLeftButton.addEventListener('click',() => {
    storiesContent.scrollLeft -= 320;
})
storiesRightButton.addEventListener('click', () => {
    storiesContent.scrollLeft += 320
});

// Checking if screen has minimun size of 1024px
if (window.matchMedia('(min-width: 1024px)').matches){
    //Observer to hide buttons when necessary
    const storiesObserver = new IntersectionObserver(
        function (entries){
            entries.forEach((entry) => {
                if (entry.target === document.querySelector('.story:first-child')){
                    storiesLeftButton.style.display = entry.isIntersecting
                    ? 'none'
                    : 'unset'
                }
            })
        },
        {root: storiesContent, threshold: 1}
    );
     // Calling the observer with the first and last stories
     storiesObserver.observe(document.querySelector('.story:first-child'));
     storiesObserver.observe(document.querySelector('.story:last-child'));
}
// POST MULTIPLE MEDIAS
// Creating scroll buttons and indicators when post has more than one media
posts.forEach((post) =>{
    if (post.querySelectorAll('.post__media').length > 1){
        const leftButtonElement = document.createElement('button');
        leftButtonElement.classList.add('post__left-button');
        leftButtonElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#fff" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"></path>
      </svg>
        `;
        const rightButtonElement = document.createElement('button');
        rightButtonElement.classList.add('post__right-button');
        rightButtonElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#fff" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
      </svg>`
}}
)