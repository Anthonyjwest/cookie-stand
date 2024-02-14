'use strict'

let seattle = {
    name: 'Seattle',
    info: ['Open Hours: 6am-7pm', 'Contact Info: 222-222-2222', 'Location: 2901 3rd Ave #300, Seattle, WA 98121'],
};

let tokyo = {
    name: 'Tokyo',
    info: ['Open Hours: 6am-7pm', 'Contact Info: 222-222-2222', 'Location: 1 Chome -1-2 Oshiage, Sumida City, Tokyo 131-8634'],
};

let dubai = {
    name: 'Dubai',
    info: ['Open Hours: 6am-7pm', 'Contact Info: 333-333-3333', 'Location: 1 Sheikh Mohammed bin rashid Blvd - Dubai'],
};

let paris = {
    name: 'Paris',
    info: ['Open Hours: 6am-7pm', 'Contact Info: 444-444-4444', 'Location: Champ de Mars, 5 Avenue Anatole France, 75007 Paris'],
};

let lima = {
    name: 'Lima',
    info: ['Open Hours: 6am-7pm', 'Contact Info: 555-555-5555', 'Location: Ca. Gral. Borgono Cuadra 8, Miraflores 15074'],
};

let div = document.getElementById('storeinfos');

function storeinfo(city) {

    let article = document.createElement('article');
  div.appendChild(article);

  let h2 = document.createElement('h2');
  h2.textContent = city.name;
  article.appendChild(h2);

  let ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < city.info.length; i++) {
    let li = document.createElement('li');
    li.textContent = city.info[i];
    ul.appendChild(li);
  }
}


storeinfo(seattle);
storeinfo(tokyo);
storeinfo(dubai);
storeinfo(paris);
storeinfo(lima);

