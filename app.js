'use strict'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Cities(name, minCustomers, maxCustomers, avg, sales){
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avg = avg;
    this.sales = this.numcookies();
}

Cities.prototype.numcookies = function() {
    this.sales = cookiesales(this);
    
}

let seattle = new Cities('Seattle', 23, 65, 6.3, []);
let tokyo = new Cities('Tokyo', 3, 12, 1.2, []);
let dubai = new Cities('Dubai', 11, 38, 3.7, []);
let paris = new Cities('Paris', 20, 38, 2.3, []);
let lima = new Cities('Lima', 2, 16, 4.6, []);

//let cities = new Cities(this.name, this.minCustomers, this.maxCustomers, this.avg, this.sales);

seattle.numcookies();
tokyo.numcookies();
dubai.numcookies();
paris.numcookies();
lima.numcookies();

function cookiesales(a){
    let sales = [];
    for(let i = 0; i < hours.length; i++){
        let customercount = randomcustomers(a.minCustomers, a.maxCustomers);
        let cookiecount = Math.ceil(customercount * a.avg);
        sales.push(cookiecount);
    }
    return sales;
}

function randomcustomers(min, max){

  let x = Math.floor(Math.random() * (max - min + 1) + min);
  return x;
}

let div = document.getElementById('storeinfos');

Cities.prototype.storeinfos = function() {

    let article = document.createElement('article');
   div.appendChild(article);
    
    let table = document.createElement('table');
    article.appendChild(table);

    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let location = document.createElement('th');
    headerRow.appendChild(location);
    location.textContent = "Locations";

    for (let i = 0; i < hours.length; i++){
    let storehours = hours[i];
    let headerhours = document.createElement('th');
    headerRow.appendChild(headerhours);
    headerhours.textContent = storehours;
    } 

    let loctot = document.createElement('th');
    headerRow.appendChild(loctot);
    loctot.textContent = "Location Totals";


    let seattlerow = document.createElement('tr');
    table.appendChild(seattlerow);

    let seattlecell = document.createElement('td');
    seattlerow.appendChild(seattlecell);
    seattlecell.textContent = seattle.name;

    let seattlecookies = 0;

    for(let t = 0; t < seattle.sales.length; t++) {
    let seacookies = document.createElement('td');
    seattlerow.appendChild(seacookies);
    let cookiesale = seattle.sales[t];
    seattlecookies += cookiesale;
    let total = `${cookiesale}`;
    seacookies.textContent = total;
   }

   let sarray = seattle.sales;

   function sumcookies(sarray){
        let x = sarray[0] + sarray[1] + sarray[2] + sarray[3] + sarray[4] + sarray[5] + sarray[6] + sarray[7] + sarray[8] + sarray[9] + sarray[10] + sarray[11] + sarray[12] + sarray[13];
        return x;
    }
    let seatotal = sumcookies(sarray);
    let seaend = document.createElement('td');
    seattlerow.appendChild(seaend);
    seaend.textContent = seatotal;

    let tokyorow = document.createElement('tr');
    table.appendChild(tokyorow);

    let tokyocell = document.createElement('td');
    tokyorow.appendChild(tokyocell);
    tokyocell.textContent = tokyo.name;

    let tokyocookies = 0;

    for(let t = 0; t < tokyo.sales.length; t++) {
    let tokcookies = document.createElement('td');
    tokyorow.appendChild(tokcookies);
    let tokyosale = tokyo.sales[t];
    tokyocookies += tokyosale;
    let total = `${tokyosale}`;
    tokcookies.textContent = total;
}

let tarray = tokyo.sales;

   function sumcookies(tarray){
        let x = tarray[0] + tarray[1] + tarray[2] + tarray[3] + tarray[4] + tarray[5] + tarray[6] + tarray[7] + tarray[8] + tarray[9] + tarray[10] + tarray[11] + tarray[12] + tarray[13];
        return x;
    }
    let toktotal = sumcookies(tarray);
    let tokend = document.createElement('td');
    tokyorow.appendChild(tokend);
    tokend.textContent = toktotal;

    let dubairow = document.createElement('tr');
    table.appendChild(dubairow);

    let dubaicell = document.createElement('td');
    dubairow.appendChild(dubaicell);
    dubaicell.textContent = dubai.name;

    let dubaicookies = 0;

    for(let t = 0; t < dubai.sales.length; t++) {
    let dubcookies = document.createElement('td');
    dubairow.appendChild(dubcookies);
    let dubaisale = dubai.sales[t];
    dubaicookies += dubaisale;
    let total = `${dubaisale}`;
    dubcookies.textContent = total;
}

let parisrow = document.createElement('tr');
table.appendChild(parisrow);

let pariscell = document.createElement('td');
parisrow.appendChild(pariscell);
pariscell.textContent = paris.name;

let pariscookies = 0;

for(let t = 0; t < paris.sales.length; t++) {
let parcookies = document.createElement('td');
parisrow.appendChild(parcookies);
let parissale = paris.sales[t];
pariscookies += parissale;
let total = `${parissale}`;
parcookies.textContent = total;
}

let limarow = document.createElement('tr');
table.appendChild(limarow);

let limacell = document.createElement('td');
limarow.appendChild(limacell);
limacell.textContent = lima.name;

let limacookies = 0;

for(let t = 0; t < lima.sales.length; t++) {
let limcookies = document.createElement('td');
limarow.appendChild(limcookies);
let limasale = lima.sales[t];
limacookies += limasale;
let total = `${limasale}`;
limcookies.textContent = total;
}

let totalrow = document.createElement('tr');
table.appendChild(totalrow);

let totalcell = document.createElement('td');
totalrow.appendChild(totalcell);
totalcell.textContent = 'Total';


}




seattle.storeinfos();

