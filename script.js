const toggleThemeBtn = document.querySelector(".header__theme-button");
const storiesContent = document.querySelector('.stories__content')
const storiesLeftButton = document.querySelector('.stories__left-button')
const storiesrightButton = document.querySelector('.stories__right-button')
const posts = document.querySelectorAll('.post')
const postsContent = document.querySelectorAll('.post__content')

document.onload = setInitialTheme(localStorage.getItem('theme'))
function setInitialTheme(themeKey){
    if (themeKey === 'dark'){
        document.documentElement.classList.add('darkTheme')
} else {
    document.documentElement.classList.add('darkTheme')

}
}

toggleThemeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('darkTheme')

    if (document.documentElement.classList.contains('darkTheme')){
        localStorage.setItem('theme', 'dark')

    } else{
        localStorage.setItem('theme', 'light')
    } 
})

storiesLeftButton.addEventListener('click',() => {
    storiesContent.scrollLeft -= 320;
})
storiesRightButton.addEventListener('click', () => {
    storiesContent.scrollLeft += 320
})
