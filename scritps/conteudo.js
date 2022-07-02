const videos = document.getElementById("bar-main-videos")

const nameandvideo = [{
    video: "https://www.youtube.com/embed/Zp74qtD-6tI",
    name: "carta_para_um_mero_leitor.txt"
},{
    video: "https://www.youtube.com/embed/zjTwFbQEOwE",
    name: "Nossas Estações"
},{
    video: "https://www.youtube.com/embed/QObFWPUwKBI",
    name: "Vem cá"
},{
    video: "https://www.youtube.com/embed/y7rf08Q7vvk",
    name: "Todos precisamos amar"
},{
    video: "https://www.youtube.com/embed/JiXTWZRZjCM",
    name: "Oh Flor"
},{
    video: "https://www.youtube.com/embed/AeMhRRzOZkQ",
    name: "Future"
},{
    video: "https://www.youtube.com/embed/QmIyKTcwR9k",
    name: "Desabafo"
},{
    video: "https://www.youtube.com/embed/q3PMV9MYOo0",
    name: "Nesse espaço"
},{
    video: "https://www.youtube.com/embed/BIg5FrFr3cI",
    name: "Última vez"
},{
    video: "https://www.youtube.com/embed/iWHl2M6UcnM",
    name: "Tarde em Paris"
},{
    video: "https://www.youtube.com/embed/Q-mjf8UtLRo",
    name: "Tenta Ficar"
}]



for (let i = 0; i < nameandvideo.length; i++) {
    const youtube = `<iframe class="bar-main-videos-play" src="${nameandvideo[i].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    const name = `<p class="bar-main-videos-name">${nameandvideo[i].name}</p>`
    videos.innerHTML = videos.innerHTML + `<div class="bar-main-videos-mod">${youtube} ${name}</div>`

}