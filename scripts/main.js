var swiper = () => {
  new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 42,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1: {
      slidesPerView: 1
    },

    850: {
      slidesPerView: 2

    },

    870: {
      slidesPerView: 3

    },

    1400: {
      slidesPerView: 4
    }
  }
});
}
swiper()
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 42,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1: {
      slidesPerView: 1
    },

    850: {
      slidesPerView: 2

    },

    1300: {
      slidesPerView: 3
    }
  }
});

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

let typesOfFurniture = [{
    name: 'Chair',
    type: 1
  },
  {
    name: 'Beds',
    type: 2
  },
  {
    name: 'Sofa',
    type: 3
  },
  {
    name: 'Lamp',
    type: 4
  },
]

let furniture = [
  {
  id: Math.random().toString().slice(2, 10),
  id: Math.random().toString().slice(2, 10),
  img: './img/chair1.png',
  type: 1,
  title: 'Sakarias Armchair',
  stars: Math.ceil(Math.random()*5),
  price: 392,
  inCartValue: 0,
}, 
  {
  id: Math.random().toString().slice(2, 10),
  img: './img/chair2.png',
  type: 1,
  title: 'Baltsar Chair',
  stars: Math.ceil(Math.random()*5),
  price: 299,
  inCartValue: 0,
}, 
  {
  id: Math.random().toString().slice(2, 10),
  img: './img/chair3.png',
  type: 1,
  title: 'Anjay Chair',
  stars: Math.ceil(Math.random()*5),
  price: 519,
  inCartValue: 0,
}, 
  {
  id: Math.random().toString().slice(2, 10),
  img: './img/chair4.png',
  type: 1,
  title: 'Nyantuy Chair',
  stars: Math.ceil(Math.random()*5),
  price: 921,
  inCartValue: 0,
},
  {
  id: Math.random().toString().slice(2, 10),
  img: './img/bed1.png',
  type: 2,
  title: 'Sakarias Bed',
  stars: Math.ceil(Math.random()*5),
  price: 717,
  inCartValue: 0,
},
  {
  id: Math.random().toString().slice(2, 10),
  img: './img/bed2.png',
  type: 2,
  title: 'Sakarias Bed',
  stars: Math.ceil(Math.random()*5),
  price: 325,
  inCartValue: 0,
},
  {
  id: Math.random().toString().slice(2, 10),
  img: './img/bed3.png',
  type: 2,
  title: 'Sakarias Bed',
  stars: Math.ceil(Math.random()*5),
  price: 360,
  inCartValue: 0,
},
  {
  id: Math.random().toString().slice(2, 10),
  img: './img/bed4.png',
  type: 2,
  title: 'Sakarias Bed',
  stars: Math.ceil(Math.random()*5),
  price: 550,
  inCartValue: 0,
},
]

let cart = []
let cartAmount = document.querySelector(".cart__count")

let typesWrapper = document.querySelector(".types")
let furnitureWrapper = document.querySelector(".furnitureWrapper")
let furnitureCreate = (arr) => {
  furnitureWrapper.innerHTML = '';
  let items = '';
  for (let item of arr) {
    let filteredType = typesOfFurniture.filter(item2 => item.type == item2.type)[0].name;
    let stars = '';
    let starsCounty = 0;
    let createStars = (number) => {
      let star = `<img src="./img/star.svg" alt="star" />`;
      stars += star;
      starsCounty++;
      if (starsCounty < number) {
        createStars(item.stars);
      } else stop(createStars);
    }
    createStars(item.stars);
    let createItem = `
    <div class="swiper-slide furniture__item">
      <div class="top">
        <img src="${item.img}" alt="item" />
      </div>
      <div class="bottom">
        <div class="info">
          <p class="furniture__item__type">${filteredType}</p>
          <p class="furniture__item__title">${item.title}</p>
          <div class="stars">
            ${stars}
          </div>
        </div>

      <div class="buy">
        <h3 class="price"><sup>$</sup>${item.price}</h3>
        <button class="buy__button" value="${item.id}">
          <img src="./img/buyButton.svg" alt="buy__button" />
        </button>
      </div>
    </div>
  </div>`;
  items += createItem;
  }
  furnitureWrapper.innerHTML = items;
}

let typesCreate = (arr) => {
  typesWrapper.innerHTML = ''
  let items = ''
  for (let item of arr) {
    let createItem = `<p class="type" id=${item.type}>${item.name}</p>`
    items += createItem
  }
  typesWrapper.innerHTML = items
  let types = document.querySelectorAll(".type")
  for (let type of types) {
    type.onclick = () => {
      for (let item of types) {
        item.classList.remove("active")
      }
      let et = event.target
      et.classList.add("active")
      
      let typeId = et.getAttribute('id')
      let filteredArr = furniture.filter(item => item.type == typeId)
      furnitureCreate(filteredArr)
      swiper()
    }
  }
}

let viewAllBtn = document.querySelector("#all")
viewAllBtn.onclick = () => {
  furnitureCreate(furniture)
  swiper()
}

window.onload = () => {
  typesCreate(typesOfFurniture)
  furnitureCreate(furniture)
  let buyBtn = document.querySelectorAll('.buy__button')
  let inCartValues = 0;
  for(let btn of buyBtn) {
  
    btn.onclick = () => {
      let addedItem = furniture.filter(item => item.id == btn.getAttribute('value'))
      console.log(addedItem);
      if (addedItem[0].inCartValue == 0) {
        cart.push(addedItem[0])
        addedItem[0].inCartValue++
        // cartAmount.innerHTML = cart.length
      } else {
        addedItem[0].inCartValue++
        for(let cartItem of cart) {
          inCartValues += cartItem.inCartValue
          console.log(inCartValues);
        }
      }
      cartAmount.innerHTML = cart.length + inCartValues
      console.log(cart);
    }
  }
}


