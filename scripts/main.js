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
  img: './img/chair1.png',
  type: 1,
  title: 'Sakarias Armchair',
  stars: Math.ceil(Math.random()*5),
  price: 392,
}, 
  {
  img: './img/chair2.png',
  type: 1,
  title: 'Baltsar Chair',
  stars: Math.ceil(Math.random()*5),
  price: 299,
}, 
  {
  img: './img/chair3.png',
  type: 1,
  title: 'Anjay Chair',
  stars: Math.ceil(Math.random()*5),
  price: 519,
}, 
  {
  img: './img/chair4.png',
  type: 1,
  title: 'Nyantuy Chair',
  stars: Math.ceil(Math.random()*5),
  price: 921,
},
  {
  img: './img/bed1.png',
  type: 2,
  title: 'Sakarias Bed',
  stars: Math.ceil(Math.random()*5),
  price: 717,
},
  {img: './img/bed2.png',
  type: 2,
  title: 'Sakarias Bed',
  stars: Math.ceil(Math.random()*5),
  price: 325,
},
  {img: './img/bed3.png',
  type: 2,
  title: 'Sakarias Bed',
  stars: Math.ceil(Math.random()*5),
  price: 360,
},
  {img: './img/bed4.png',
  type: 2,
  title: 'Sakarias Bed',
  stars: Math.ceil(Math.random()*5),
  price: 550,
},
]
console.log(furniture);

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
        <button class="buy__button">
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
      console.log(filteredArr);
      furnitureCreate(filteredArr)
    }
  }
}

window.onload = () => {
  typesCreate(typesOfFurniture)
  furnitureCreate(furniture)
}


// let newFunc = func(2)