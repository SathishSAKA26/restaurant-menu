// item
const menu = [
  {
    id: 1,
    title: "Idle",
    price: 10.0,
    category: "Breakfast",
    image: "./images/breckfast-1.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 2,
    title: "Vada",
    price: 20.0,
    category: "Breakfast",
    image: "./images/breckfast-2.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 3,
    title: "Kichadi",
    price: 30.0,
    category: "Breakfast",
    image: "./images/breckfast-3.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 4,
    title: "Dosa",
    price: 15.0,
    category: "Breakfast",
    image: "./images/breckfast-4.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 5,
    title: "Samba Briyani",
    price: 20.0,
    category: "lunch",
    image: "./images/lunchi-1.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 6,
    title: "Kushka",
    price: 20.0,
    category: "Lunch",
    image: "./images/lunchi-2.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 7,
    title: "Chicken Briyani",
    price: 20.0,
    category: "Lunch",
    image: "./images/lunchi-1.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 8,
    title: "Kulipanikaaram",
    price: 50.0,
    category: "Snakes",
    image: "./images/snakes.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 9,
    title: "Elluvada",
    price: 40.0,
    category: "Snakes",
    image: "./images/snakes-1.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 10,
    title: "Pori urundai",
    price: 30.0,
    category: "Snakes",
    image: "./images/snakes-3.jpg",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 11,
    title: "chicken pop",
    price: 80.0,
    category: "Dinner",
    image: "./images/dinner-1.avif",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 12,
    title: "chicken full",
    price: 120.0,
    category: "Dinner",
    image: "./images/dinner-2.avif",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 12,
    title: "chicken rice",
    price: 90.0,
    category: "Dinner",
    image: "./images/dinner-3.avif",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
  {
    id: 14,
    title: "chicken leg",
    price: 80.0,
    category: "Dinner",
    image: "./images/dinner-4.avif",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Namexcepturi esse iure. Beatae id dignissimos. Temporibus maximedistinctio quo?",
  },
];

// Elements
const menuList = document.querySelector(".all-item");
// filter El
const filterBtn = document.querySelectorAll(".filter-btn");

// Load functions
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

// filter btn
filterBtn.forEach(function (btn) {
  btn.addEventListener("click", function (Event) {
    const category = Event.currentTarget.dataset.id;
    const menuChat = menu.filter(function (menuItems) {
      // console.log(menuItem.category);
      if (menuItems.category === category) {
        return menuItems;
      }
    });
    console.log(menuChat);
    if (category === "All") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuChat);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return ` <article class="items">
    <div class="img-container">
      <img src=${item.image} alt=${item.title} class="image" />
      <div class="item-info">
        <div class="title-price">
          <h4>${item.title}</h4>
          <h4>$ ${item.price}</h4>
          <hr/>
        </div>
        <div class="info">${item.desc}
        </div>
      </div>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join("");

  menuList.innerHTML = displayMenu;
}
