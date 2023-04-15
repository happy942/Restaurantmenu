const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Buttermilk pancakes are a classic breakfast dish that has been enjoyed by people for generations. These fluffy, golden-brown
     pancakes are made with a batter that includes buttermilk, which gives them a tangy flavor and a light, tender texture.`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `The Diner Double is a classic American burger that is known for its simplicity and deliciousness. 
    It is a double cheeseburger that is often found on the menu of diners and fast food restaurants across the country.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `The Godzilla milkshake is a monstrous treat that is sure to satisfy any sweet tooth. It is a decadent blend 
    of ice cream, chocolate syrup, and other delicious ingredients that is perfect for indulging in on a hot summer day.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Country Delight is a popular dish that is typically consists of crispy fried chicken, creamy mashed potatoes,
    and savory gravy, all served with a side of green beans or other vegetables.Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg burger",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `The egg burger is a delicious twist on a classic burger that features a fried egg as a topping. 
    This hearty and filling sandwich is perfect for breakfast, lunch, or dinner and is often served with bacon,cheese 
    and other toppings. `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Oreo Dream is a rich and decadent dessert that is made with layers of crushed Oreos, creamy pudding,
     and whipped cream.It is a crowd-pleasing treat that is perfect for special occasions or just as a sweet indulgence.`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Bacon Overflow is a breakfast dish that is sure to satisfy any bacon lover's cravings. 
    It typically consists of a bed of crispy hash browns or home fries, topped with scrambled eggs, melted cheese,
     and a generous amount of crispy bacon.`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `This can include dishes like hamburgers, hot dogs, apple pie, and barbecue, as well as flavors like vanilla, 
    chocolate, and maple. `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `They may be a close friend or family member, a beloved pet, 
    or even a favorite hobby or activity that has helped to alleviate stress and anxiety during these challenging times.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `Bison steak is a flavorful and lean alternative to traditional beef steak. 
    It is a rich source of protein and iron, and is often praised for its tender texture and slightly sweet, earthy flavor.`,
  },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      // console.log(event.currentTarget.dataset);
      const category = event.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }

    });
  });
}
