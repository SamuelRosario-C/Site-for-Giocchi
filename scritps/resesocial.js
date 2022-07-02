const redesocial = document.getElementById("bar-main-redesocial")

const redesociais = [{
    icon: "./icons/instagram.svg",
    links: "https://instagram.com/giocchika?igshid=YmMyMTA2M2Y=",
    name: "Instagram",
},{
    icon: "./icons/twitter.svg",
    links: "https://twitter.com/giocchika_moo",
    name: "Twitter",
},{
    icon: "./icons/facebook.svg",
    links: "https://www.facebook.com/giocchika/",
    name: "Facebook",
},{
    icon: "./icons/discord.svg",
    links: "https://discord.gg/DPAQfru37u",
    name: "Discord",
},{
    icon: "./icons/gmail.svg",
    links: "mailto:giovanne.prado32@gmail.com",
    name: "Gmail",
}]

for (let i = 0; i < redesociais.length; i++) {
    const icons = `<img class="bar-main-redesocial-icons" src=${redesociais[i].icon}>`
    const names = `<p class="bar-main-redesocial-name">${redesociais[i].name}</p>`
    
    const link = `<a class="bar-main-redesocial-links" href="${redesociais[i].links}">${icons} ${names}</a>`
    redesocial.innerHTML = redesocial.innerHTML + `<div>${link}</div>`    
}