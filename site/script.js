function generateRandomKey() {
    let key = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 10; i++) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return key;
}

document.addEventListener('DOMContentLoaded', function() {
    const keyElement = document.createElement('p');
    keyElement.textContent = `Key: ${generateRandomKey()}`;
    document.body.appendChild(keyElement);
});