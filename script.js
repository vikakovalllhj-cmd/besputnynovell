const adminLogin = "strawberryvodkapp";
const adminPassword = "1708enot228";

document.getElementById('login-btn').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const msg = document.getElementById('login-msg');

    if(username === adminLogin && password === adminPassword){
        msg.textContent = "Вы вошли как админ";
        document.getElementById('login-section').style.display = "none";
        document.getElementById('admin-section').style.display = "block";
        document.getElementById('chapters-section').style.display = "block";
        loadChapters();
    } else {
        msg.textContent = "Неверный логин или пароль";
    }
});

document.getElementById('add-chapter-btn').addEventListener('click', () => {
    const title = document.getElementById('chapter-title').value;
    const text = document.getElementById('chapter-text').value;
    if(title && text){
        const chaptersList = document.getElementById('chapters-list');
        const userChaptersList = document.getElementById('user-chapters-list');
        const li = document.createElement('li');
        li.textContent = title;
        chaptersList.appendChild(li);
        userChaptersList.appendChild(li.cloneNode(true));
        document.getElementById('chapter-title').value = "";
        document.getElementById('chapter-text').value = "";
    }
});

function loadChapters(){
    // Можно позже подключить Firebase для сохранения глав
}
