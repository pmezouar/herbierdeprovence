document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#openNav").addEventListener('click', openNav);
    document.querySelector("#closeNav").addEventListener('click', closeNav);
})

function openNav() {
    document.querySelector("#openNav").style.display = "none";
    document.querySelector("#closeNav").style.display = "block";
    document.querySelector("nav").style.display = "flex";
}

function closeNav() {
    document.querySelector("#closeNav").style.display = "none";
    document.querySelector("nav").style.display = "none";
    document.querySelector("#openNav").style.display = "block";
}