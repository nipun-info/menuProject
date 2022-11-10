const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

// filter items
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {

      if (menuItem.category === category) {
        return menuItem;
      }
    });

    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  })
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {

    return `
    <article class="menu-item">
            <img src=${item.img} class="photo" alt="menu item">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
                <p class="item-text">
                ${item.desc}
                </p>
            </div>
      </article>
    `;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}