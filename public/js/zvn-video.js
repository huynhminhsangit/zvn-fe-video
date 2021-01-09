$( document ).ready(function() {
    let $btnFreeBackend = $('.btn-free-backend-course');
    let $btnFreeFrontend = $('.btn-free-frontend-course');
    let currentURL = window.location.href;
    $btnFreeBackend.on('click', () => {
        let newUrl = '';
        if(currentURL.includes('index.php'))
            newUrl = currentURL.replace('index.php', 'course-backend.php');
        else
            newUrl = currentURL + "course-backend.php";
        window.location.href = newUrl;
    });
    $btnFreeFrontend.on('click', () => {
        let newUrl = currentURL.replace('index.php', 'course-frontend.php');
        window.location.href = newUrl;
    });
});