document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const conf_senha = document.getElementById('conf_senha').value;

    if (senha === conf_senha) {
        window.location.href = 'outra_pagina.html';
    }
     else {
        alert('As senhas não correspondem!');
    }
});
function showForm(formId) {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => form.classList.remove('active'));

    document.getElementById(formId).classList.add('active');
}

showForm('loginForm');
