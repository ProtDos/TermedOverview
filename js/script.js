function copyUsername() {
    text = "codinglive"

    var textarea = document.createElement('textarea');

    textarea.value = text;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand('copy');

    document.body.removeChild(textarea);

    var fadeContainer = document.getElementById("fadeContainer");
    var fadeMessage = document.getElementById("fadeMessage");

    fadeContainer.style.display = "block";
    fadeMessage.style.opacity = 1;

    setTimeout(function () {
        fadeMessage.style.opacity = 0;
        setTimeout(function () {
            fadeContainer.style.display = "none";
        }, 350);
    }, 3000);
}

function openProfile() {
    window.open('https://discord.com/users/786495827827752990', '_blank');
}

function openProfileTelegram() {
    window.open('https://t.me/xoding', '_blank');
}

function openProfileWebsite() {
    window.open('https://portfolio.protdos.com', '_blank');
}