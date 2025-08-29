import starter1 from "./assets/menu-starter-1.jpg"
import starter2 from "./assets/menu-starter-2.webp"
import starter3 from "./assets/menu-starter-3.webp"
import main1 from "./assets/menu-main-1.webp"
import main2 from "./assets/menu-main-2.webp"
import main3 from "./assets/menu-main-3.webp"

let content = document.querySelector("#content")

const menu = () => {
    if (!content) return
    content.innerHTML = `
          <div class="hero-box">
        <h1 class="hero-text">The Menu</h1>
        <p class="text">Starters</p>
        <div class="grid-box">
          <div class="box">
            <h3 class="text">Roasted Beet & Goat Cheese Tartare</h3>
            <img
              src="${starter1}"
              alt=""
              width="300"
              height="200"
            />
            <p>
              Golden and red beets, whipped goat cheese, candied walnuts,
              microgreens, balsamic reduction
            </p>
            <p>$16</p>
          </div>

          <div class="box">
            <h3 class="text">Crispy Calamari</h3>
            <img
              src="${starter2}"
              alt=""
              width="400"
              height="200"
            />
            <p>
              Lightly fried squid with lemon aioli, pickled chili, and herb
              salad
            </p>
            <p>$14</p>
          </div>

          <div class="box">
            <h3 class="text">Wild Mushroom Arancini</h3>
            <img
              src="${starter3}"
              alt=""
              width="200"
              height="200"
            />
            <p>
              Saffron risotto balls, porcini cream, truffle oil, parmesan crisp
            </p>
            <p>$15</p>
          </div>
        </div>
        <p class="text">Main</p>
        <div class="grid-box">
          <div class="box">
            <h3 class="text">Pan-Seared Salmon</h3>
            <img
              src="${main1}"
              alt=""
              width="200"
              height="200"
            />
            <p>
              Wild-caught salmon, lemon-dill butter, roasted fingerlings,
              seasonal vegetables
            </p>
            <p>$32</p>
          </div>

          <div class="box">
            <h3 class="text">Herb-Crusted Rack of Lamb</h3>
            <img
              src="${main2}"
              alt=""
              width="300"
              height="200"
            />
            <p>
              Rosemary-garlic crust, mint jus, dauphinoise potatoes, grilled
              asparagus
            </p>
            <p>$42</p>
          </div>

          <div class="box">
            <h3 class="text">Braised Short Rib</h3>
            <img
              src="${main3}"
              alt=""
              width="200"
              height="200"
            />
            <p>
              Red wine-braised beef, creamy polenta, glazed carrots, crispy
              onions
            </p>
            <p>$36</p>
          </div>
        </div>
      </div>`
}
export default menu