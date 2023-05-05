const GREETINGS = [
    { id: 0, text: 'hey' },
    { id: 1, text: 'hi' },
    { id: 2, text: 'bonjour' },
    { id: 3, text: 'salut' },
    { id: 4, text: 'hola' },
    { id: 5, text: 'sup' },
    { id: 6, text: 'yo' },
    { id: 7, text: 'whaddup' }
];

const GREETING_SUBJECTS = [
    { id: 0, text: 'squad' },
    { id: 1, text: 'you' },
    { id: 2, text: 'comrade' },
    { id: 3, text: 'friend' },
    { id: 4, text: 'pal' },
    { id: 5, text: 'fam' },
    { id: 6, text: 'y\'all' },
    { id: 7, text: 'team' },
    { id: 8, text: 'gang' },
    { id: 9, text: 'bestie' }
];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const greetingElement = document.getElementById('greeting');
const greetingSubjectElement = document.getElementById('greetingSubject');

const greeting = GREETINGS[randomNumber(0, GREETINGS.length)].text;
const greetingSubject = GREETING_SUBJECTS[randomNumber(0, GREETING_SUBJECTS.length)].text;

greetingElement.innerHTML = greeting;
greetingSubjectElement.innerHTML = greetingSubject;

window.addEventListener('popstate', () => {
    const url = window.location.hash.substring(1);
    loadPageContent(url);
});

function navigate(event, url) {
    event.preventDefault();
    const currentUrl = window.location.hash.substring(1);
    if (url !== currentUrl) {
        history.pushState(null, null, "#" + url);
        loadPageContent(url);
    }
}

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (event) {
        const url = this.getAttribute('href').substring(1);
        navigate(event, url);
    });
});

window.addEventListener('load', () => {
    const url = window.location.hash.substring(1) || 'home';
    loadPageContent(url);
    setTimeout(loadModals, 200);

});

function loadPageContent(url) {
    if (url.startsWith("http") || url.startsWith("https")) {
        window.location.href = url;
    } else {
        const filename = url + ".html";
        fetch(filename)
        .then(response => response.text())
        .then(html => {
            document.getElementById("page-content").innerHTML = html;
        });
    }
}

function loadModals() {
    const imageContainer = document.querySelector('.bio-img');
    const imageCaption = imageContainer.querySelector('.image-caption');
    
    imageContainer.addEventListener('mouseover', () => {
        imageCaption.style.opacity = 1;
    });
    
    imageContainer.addEventListener('mouseout', () => {
        imageCaption.style.opacity = 0;
    });
}

