const menu = [{
    id: 1,
    title: "pancekes de nelo",
    alt: "foto description1",
    category: "breakfast",
    price: 15.99,
    img: "./assets/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    alt: "foto description2",
    category: "lunch",
    price: 13.99,
    img: "./assets/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    alt: "foto description3",
    category: "shakes",
    price: 6.99,
    img: "./assets/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    alt: "foto description4",
    category: "breakfast",
    price: 20.99,
    img: "./assets/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    alt: "foto description5",
    category: "lunch",
    price: 22.99,
    img: "./assets/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    alt: "foto description6",
    category: "shakes",
    price: 18.99,
    img: "./assets/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    alt: "foto description7",
    category: "breakfast",
    price: 8.99,
    img: "./assets/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    alt: "foto description8",
    category: "lunch",
    price: 12.99,
    img: "./assets/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    alt: "foto description9",
    category: "shakes",
    price: 16.99,
    img: "./assets/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "quarantine buddy",
    alt: "foto description10",
    category: "shakes",
    price: 16.99,
    img: "./assets/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


const foodGalleryMenu = () => {
  //- CASO DE USO 2 PRACTICA NELO

  let $container = document.querySelector('#js-container');
  let $template = document.querySelector('#template').content;
  let $fragment = document.createDocumentFragment();

  menu.forEach((item) => {
    $template.querySelector('.menu-food__image').setAttribute('src', item.img);
    $template.querySelector('.menu-food__image').setAttribute('alt', item.alt);
    $template.querySelector('.menu-food__title').textContent = item.title;
    $template.querySelector('.menu-food__price').textContent = item.price;
    $template.querySelector('.menu-food__description').textContent = item.desc;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);

  })
  $container.appendChild($fragment);

}

export default foodGalleryMenu;