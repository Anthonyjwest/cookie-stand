'use strict'

let seattle = {
    name: 'Seattle',
};

let tokyo = {
    name: 'Tokyo',
};

let dubai = {
    name: 'Dubai',
};

let paris = {
    name: 'Paris',
};

let lima = {
    name: 'Lima',
};

function randomcustomers(min, max){

  let x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}

let div = document.getElementById('storeinfos');

function storeinfo(city) {

    let article = document.createElement('article');
   div.appendChild(article);

  let h2 = document.createElement('h2');
  h2.textContent = city.name;
  article.appendChild(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);

  //for (let i = 0; i < city.cookies.length; i++) {
   // let li = document.createElement('li');
   // li.textContent = city.info[i];
   // ul.appendChild(li);
 // }
}


storeinfo(seattle);
storeinfo(tokyo);
storeinfo(dubai);
storeinfo(paris);
storeinfo(lima);

