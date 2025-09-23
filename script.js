// script.js
import { supabase } from './supabase-config.js'

// === Регистрация нового пользователя ===
async function registerUser() {
  const email = document.getElementById('reg-email').value
  const password = document.getElementById('reg-password').value

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  if (error) {
    alert("Ошибка регистрации: " + error.message)
  } else {
    alert("Регистрация успешна! Проверь почту для подтверждения.")
    window.location.href = "index.html"
  }
}

// === Вход пользователя ===
async function loginUser() {
  const email = document.getElementById('login-email').value
  const password = document.getElementById('login-password').value

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    alert("Ошибка входа: " + error.message)
  } else {
    alert("Вход выполнен!")
    window.location.href = "index.html"
  }
}

// === Выход ===
async function logoutUser() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    alert("Ошибка выхода: " + error.message)
  } else {
    alert("Вы вышли из аккаунта.")
    window.location.href = "index.html"
  }
}

// === Проверка авторизации при загрузке страницы ===
async function checkAuth() {
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    document.getElementById('auth-section').style.display = "none"
    document.getElementById('content-section').style.display = "block"

    // Проверка на админа
    if (user.email === "strawberryvodkapp") {
      document.getElementById('admin-link').style.display = "block"
    }
  } else {
    document.getElementById('auth-section').style.display = "block"
    document.getElementById('content-section').style.display = "none"
  }
}

// === Привязка кнопок ===
document.addEventListener('DOMContentLoaded', () => {
  const regBtn = document.getElementById('register-btn')
  const loginBtn = document.getElementById('login-btn')
  const logoutBtn = document.getElementById('logout-btn')

  if (regBtn) regBtn.addEventListener('click', registerUser)
  if (loginBtn) loginBtn.addEventListener('click', loginUser)
  if (logoutBtn) logoutBtn.addEventListener('click', logoutUser)

  checkAuth()
})
