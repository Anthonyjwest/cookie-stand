/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Cities(name, minCustomers, maxCustomers, avg){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avg = avg;
  this.sales = this.numcookies();
}

Cities.prototype.numcookies = function() {
  this.sales = cookiesales(this);
};

let seattle = new Cities('Seattle', 23, 65, 6.3, []);
let tokyo = new Cities('Tokyo', 3, 12, 1.2, []);
let dubai = new Cities('Dubai', 11, 38, 3.7, []);
let paris = new Cities('Paris', 20, 38, 2.3, []);
let lima = new Cities('Lima', 2, 16, 4.6, []);

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
  location.textContent = 'Locations';

  for (let i = 0; i < hours.length; i++){
    let storehours = hours[i];
    let headerhours = document.createElement('th');
    headerRow.appendChild(headerhours);
    headerhours.textContent = storehours;
  }

  let loctot = document.createElement('th');
  headerRow.appendChild(loctot);
  loctot.textContent = 'Location Totals';


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

  let darray = dubai.sales;

  function sumcookies(darray){
    let x = darray[0] + darray[1] + darray[2] + darray[3] + darray[4] + darray[5] + darray[6] + darray[7] + darray[8] + darray[9] + darray[10] + darray[11] + darray[12] + darray[13];
    return x;
  }
  let dubtotal = sumcookies(darray);
  let dubend = document.createElement('td');
  dubairow.appendChild(dubend);
  dubend.textContent = dubtotal;

  let parisrow = document.createElement('tr');
  table.appendChild(parisrow);

  let pariscell = document.createElement('td');
  parisrow.appendChild(pariscell);
  pariscell.textContent = paris.name;

  for(let t = 0; t < paris.sales.length; t++) {
    let pariscookies = 0;
    let parcookies = document.createElement('td');
    parisrow.appendChild(parcookies);
    let parissale = paris.sales[t];
    pariscookies += parissale;
    let total = `${parissale}`;
    parcookies.textContent = total;
  }

  let parray = paris.sales;

  function sumcookies(parray){
    let x = parray[0] + parray[1] + parray[2] + parray[3] + parray[4] + parray[5] + parray[6] + parray[7] + parray[8] + parray[9] + parray[10] + parray[11] + parray[12] + parray[13];
    return x;
  }
  let partotal = sumcookies(parray);
  let parend = document.createElement('td');
  parisrow.appendChild(parend);
  parend.textContent = partotal;

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

  let larray = lima.sales;

  function sumcookies(larray){
    let x = larray[0] + larray[1] + larray[2] + larray[3] + larray[4] + larray[5] + larray[6] + larray[7] + larray[8] + larray[9] + larray[10] + larray[11] + larray[12] + larray[13];
    return x;
  }
  let limtotal = sumcookies(larray);
  let limend = document.createElement('td');
  limarow.appendChild(limend);
  limend.textContent = limtotal;

  let totalrow = document.createElement('tr');
  table.appendChild(totalrow);

  let totalcell = document.createElement('th');
  totalrow.appendChild(totalcell);
  totalcell.textContent = 'Hourly Totals for all stores';

  let sixam = seattle.sales[0] + tokyo.sales[0] + dubai.sales[0] + paris.sales[0] + lima.sales[0];

  let sixtot = document.createElement('th');
  totalrow.appendChild(sixtot);
  sixtot.textContent = sixam;

  let sevenam = seattle.sales[1] + tokyo.sales[1] + dubai.sales[1] + paris.sales[1] + lima.sales[1];

  let seventot = document.createElement('th');
  totalrow.appendChild(seventot);
  seventot.textContent = sevenam;

  let eightam = seattle.sales[2] + tokyo.sales[2] + dubai.sales[2] + paris.sales[2] + lima.sales[2];

  let eighttot = document.createElement('th');
  totalrow.appendChild(eighttot);
  eighttot.textContent = eightam;

  let nineam = seattle.sales[3] + tokyo.sales[3] + dubai.sales[3] + paris.sales[3] + lima.sales[3];

  let ninetot = document.createElement('th');
  totalrow.appendChild(ninetot);
  ninetot.textContent = nineam;

  let tenam = seattle.sales[4] + tokyo.sales[4] + dubai.sales[4] + paris.sales[4] + lima.sales[4];

  let tentot = document.createElement('th');
  totalrow.appendChild(tentot);
  tentot.textContent = tenam;

  let elevenam = seattle.sales[5] + tokyo.sales[5] + dubai.sales[5] + paris.sales[5] + lima.sales[5];

  let eleventot = document.createElement('th');
  totalrow.appendChild(eleventot);
  eleventot.textContent = elevenam;

  let twelveam = seattle.sales[6] + tokyo.sales[6] + dubai.sales[6] + paris.sales[6] + lima.sales[6];

  let twelvetot = document.createElement('th');
  totalrow.appendChild(twelvetot);
  twelvetot.textContent = twelveam;

  let onepm = seattle.sales[7] + tokyo.sales[7] + dubai.sales[7] + paris.sales[7] + lima.sales[7];

  let onetot = document.createElement('th');
  totalrow.appendChild(onetot);
  onetot.textContent = onepm;

  let twopm = seattle.sales[8] + tokyo.sales[8] + dubai.sales[8] + paris.sales[8] + lima.sales[8];

  let twotot = document.createElement('th');
  totalrow.appendChild(twotot);
  twotot.textContent = twopm;

  let threepm = seattle.sales[9] + tokyo.sales[9] + dubai.sales[9] + paris.sales[9] + lima.sales[9];

  let threetot = document.createElement('th');
  totalrow.appendChild(threetot);
  threetot.textContent = threepm;

  let fourpm = seattle.sales[10] + tokyo.sales[10] + dubai.sales[10] + paris.sales[10] + lima.sales[10];

  let fourtot = document.createElement('th');
  totalrow.appendChild(fourtot);
  fourtot.textContent = fourpm;

  let fivepm = seattle.sales[11] + tokyo.sales[11] + dubai.sales[11] + paris.sales[11] + lima.sales[11];

  let fivetot = document.createElement('th');
  totalrow.appendChild(fivetot);
  fivetot.textContent = fivepm;

  let sixpm = seattle.sales[12] + tokyo.sales[12] + dubai.sales[12] + paris.sales[12] + lima.sales[12];

  let sixxtot = document.createElement('th');
  totalrow.appendChild(sixxtot);
  sixxtot.textContent = sixpm;

  let sevennpm = seattle.sales[13] + tokyo.sales[13] + dubai.sales[13] + paris.sales[13] + lima.sales[13];

  let sevenntot = document.createElement('th');
  totalrow.appendChild(sevenntot);
  sevenntot.textContent = sevennpm;

  let alltotals = sumcookies(sarray) + sumcookies(tarray) + sumcookies(darray) + sumcookies(parray) + sumcookies(larray);
  let endtot = document.createElement('th');
  totalrow.appendChild(endtot);
  endtot.textContent = alltotals;

};

seattle.storeinfos();

