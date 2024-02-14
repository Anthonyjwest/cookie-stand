'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
    name: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avg: 6.3,
    sales: [],
    numcookies: function (){
        this.sales = cookiesales(this);
    },

};

let tokyo = {
    name: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 12,
    avg: 1.2,
    sales: [],
    numcookies: function (){
        this.sales = cookiesales(this);
    },
};

let dubai = {
    name: 'Dubai',
    minCustomers: 11,
    maxCustomers: 38,
    avg: 3.7,
    sales: [],
    numcookies: function (){
        this.sales = cookiesales(this);
    },
};

let paris = {
    name: 'Paris',
    minCustomers: 20,
    maxCustomers: 38,
    avg: 2.3,
    sales: [],
    numcookies: function (){
        this.sales = cookiesales(this);
    },
};

let lima = {
    name: 'Lima',
    minCustomers: 2,
    maxCustomers: 16,
    avg: 4.6,
    sales: [],
    numcookies: function (){
        this.sales = cookiesales(this);
    },
};

seattle.numcookies();
tokyo.numcookies();
dubai.numcookies();
paris.numcookies();
lima.numcookies();

function cookiesales(city){
    let sales = [];
    for(let i = 0; i < hours.length; i++){
        let customercount = randomcustomers(city.minCustomers, city.maxCustomers);
        let cookiecount = Math.ceil(customercount * city.avg);
        sales.push(cookiecount);
    }
    return sales;
}

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

  let totalSold = 0;

  for (let i = 0; i < city.sales.length; i++) {
    let li = document.createElement('li');
    ul.appendChild(li);
    let cookiehour = city.sales[i];
    totalSold += cookiehour;
    let salesInfo = `${hours[i]}: ${cookiehour} cookies`;
    li.textContent = salesInfo;
  }


   let finalarray = city.sales;

   function sumcookies(finalarray){
        let x = finalarray[0] + finalarray[1] + finalarray[2] + finalarray[3] + finalarray[4] + finalarray[5] + finalarray[6] + finalarray[7] + finalarray[8] + finalarray[9] + finalarray[10] + finalarray[11] + finalarray[12] + finalarray[13];
        return x;
    }
    let x = sumcookies(finalarray);
        let li = document.createElement('li');
        ul.appendChild(li);
        let total = `Total: ${x} cookies`;
        li.textContent = total;
  
}

storeinfo(seattle);
storeinfo(tokyo);
storeinfo(dubai);
storeinfo(paris);
storeinfo(lima);

