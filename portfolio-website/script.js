document.addEventListener('DOMContentLoaded', function () {
    // İletişim formu gönderim işlemleri
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        console.log('Form gönderildi!');
        console.log(`İsim: ${name}, Email: ${email}, Mesaj: ${message}`);
        
        // Formu temizle
        form.reset();
    });
});
