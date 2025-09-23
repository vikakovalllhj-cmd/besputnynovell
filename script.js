// подключение к Supabase
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Регистрация
async function register() {
    const email = document.getElementById('newEmail').value;
    const password = document.getElementById('newPassword').value;

    const { data, error } = await supabaseClient.auth.signUp({ email, password });
    if(error) alert(error.message);
    else alert('Регистрация успешна!');
}

// Вход
async function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
    if(error) alert(error.message);
    else {
        alert('Вход успешен!');
        window.location = 'index.html'; // переходит на главную
    }
}

// Добавление главы (только для админа)
async function addChapter() {
    const title = document.getElementById('chapterTitle').value;
    const text = document.getElementById('chapterText').value;

    const { data: user } = await supabaseClient.auth.getUser();
    if(!user) { alert('Войдите как админ'); return; }

    const { error } = await supabaseClient.from('chapters').insert([{ title, text }]);
    if(error) alert(error.message);
    else alert('Глава добавлена!');
}

// Загрузка глав на index.html
async function loadChapters() {
    const { data, error } = await supabaseClient.from('chapters').select('*').order('created_at', { ascending: true });
    if(error) alert(error.message);
    else {
        const list = document.getElementById('chaptersList');
        list.innerHTML = '';
        data.forEach(chap => {
            const div = document.createElement('div');
            div.innerHTML = `<h2>${chap.title}</h2><p>${chap.text}</p>`;
            list.appendChild(div);
        });
    }
}
