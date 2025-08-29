import "./styles.css"
import home from "./home.js"
import menu from "./menu.js"
import about from "./about.js"


let content = document.querySelector("#content")
const homeBtn = document.querySelector("#home-btn")
const menuBtn = document.querySelector("#menu-btn")
const aboutBtn = document.querySelector("#about-btn")

home()
homeBtn.addEventListener("click", home)
menuBtn.addEventListener("click", menu)
aboutBtn.addEventListener("click", about)
