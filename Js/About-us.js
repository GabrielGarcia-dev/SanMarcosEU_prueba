
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function checkStoriesInView() {
    const stories = document.querySelectorAll('.story');
    stories.forEach(story => {
        if (isInViewport(story)) {
            story.classList.add('in-view');
        }
    });
}


window.addEventListener('scroll', checkStoriesInView);
window.addEventListener('load', checkStoriesInView);




