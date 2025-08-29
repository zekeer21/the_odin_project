let content = document.querySelector("#content")

const about = () => {
    if (!content) return
    content.innerHTML = `
          <div class="hero-box">
        <h1 class="hero-text text-left">About Us</h1>
        <p class="text text-left">
          Welcome to The Restaurant, where flavor meets comfort in every bite.
          We believe that food is more than just a meal—it’s an experience that
          brings people together. Our chefs carefully craft each dish using
          fresh, locally sourced ingredients, blending timeless recipes with a
          modern twist. Whether you’re here for a casual lunch, a family dinner,
          or a special celebration, The Restaurant offers a warm and inviting
          atmosphere perfect for any occasion. From savory entrées to indulgent
          desserts, our menu is designed to satisfy every craving. Pair your
          meal with our handpicked selection of wines, cocktails, or freshly
          brewed coffee for the perfect dining experience. At The Restaurant, we
          don’t just serve food—we create memories.
        </p>
        <h2 class="sub-text">Opening Hours</h2>
        <ul class="text text-left">
          <li>Monday – Thursday: 11:00 AM – 10:00 PM</li>
          <li>Friday – Saturday: 11:00 AM – 11:30 PM</li>
          <li>Sunday: 10:00 AM – 9:00 PM (Brunch served until 2:00 PM)</li>
        </ul>
        <h2 class="sub-text">Location</h2>
        <p class="text text-left">
          📍 The Restaurant 1234 Elmwood Avenue Greenfield City, Metro 56789
        </p>
      </div>`
}
export default about