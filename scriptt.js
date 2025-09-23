// Регистрация
async function register() {
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;

    const { data, error } = await supabase.auth.signUp({ email, password });
    if(error) alert(error.message);
    else alert('Регистрация успешна!');
}

// Вход
async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if(error) alert(error.message);
    else {
        alert('Вход успешен!');
        window.location = 'index.html';
    }
}

// Добавление главы (только админ)
async function addChapter() {
    const title = document.getElementById('chapterTitle').value;
    const text = document.getElementById('chapterText').value;

    const { data: user } = await supabase.auth.getUser();
    if(!user) { alert('Войдите как админ'); return; }

    const { error } = await supabase.from('chapters').insert([{ title, text }]);
    if(error) alert(error.message);
    else alert('Глава добавлена!');
}
