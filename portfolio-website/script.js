document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            console.log('Form gönderildi!');
            console.log(`İsim: ${name}, Email: ${email}, Mesaj: ${message}`);
            alert('Mesajınız başarıyla gönderildi!');
            form.reset();
        } else {
            alert('Lütfen tüm alanları doldurun.');
        }
    });
});