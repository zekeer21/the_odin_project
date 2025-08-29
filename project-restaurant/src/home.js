let content = document.querySelector("#content")
const home = () => {
    if (!content) return
    content.innerHTML = `
      <div class="hero-box">
        <h1 class="hero-text">The Restaurant</h1>
        <p class="text">
          Embark on a Culinary Journey where every bite is a masterpiece. Where
          each plate weaves a story of culinary mastery and passionate
          craftsmanship. Experience flavorful excellence.
        </p>
      </div>`
    // return content
}

export default home