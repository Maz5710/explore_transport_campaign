/*jshint esversion: 6 */

// PRODUCT CARD DATA 
var products = [{
        type: 'smallCar',
        vehicle: 'Toyota Yaris 5 door hatch',
        transmission: 'Automatic',
        engineSize: '1.3L Engine',
        groupSize: 2,
        numDays: 3,
        image: 'img/car_small_1.png',
        price: 125,
        hire: 375,
        fuelEconomy: '8.5 litres/100km',
        features: 'Air Conditioning, USB, Cruise Control, Touch Screen Audio',
        company: 'Go Rentals Rentals'
    },
    {
        type: 'smallCar',
        vehicle: 'Toyota Corolla 5 door hatch',
        transmission: 'Automatic',
        engineSize: '1.8L Engine',
        groupSize: 2,
        numDays: 5,
        image: 'img/car_small_2.png',
        price: 125,
        hire: 625,
        fuelEconomy: '8.5 litres/100km',
        features: 'Air Conditioning, USB, Cruise Control, Touch Screen Audio',
        company: 'Apex Car Rentals'
    },
    {
        type: 'smallCar',
        vehicle: 'Hyundai i30 5 door hatch',
        transmission: 'Automatic',
        engineSize: '1.8L Engine',
        groupSize: 2,
        numDays: 4,
        image: 'img/car_small_3.png',
        price: 125,
        hire: 500,
        fuelEconomy: '8.5 litres/100km',
        features: 'Air Conditioning, USB, 5 Star ANCAP Rating ',
        company: 'Ace Rentals'
    },
    {
        type: 'largeCar',
        vehicle: 'Nissan X-Trail SUV 4WD',
        transmission: 'Automatic',
        engineSize: '2.5L Engine',
        groupSize: 5,
        numDays: 9,
        image: 'img/car_large_1.png',
        price: 129,
        hire: 1161,
        fuelEconomy: '9.7 litres/100km',
        features: 'Air Conditioning, USB/Bluetooth, 5 Star ANCAP Rating ',
        company: 'ACE Rentals'
    },
    {
        type: 'largeCar',
        vehicle: 'Hyundai iMax Elite',
        transmission: 'Automatic',
        engineSize: '2.5L Engine',
        groupSize: 5,
        numDays: 8,
        image: 'img/car_large_2.png',
        price: 129,
        hire: 1032,
        fuelEconomy: '9.7 litres/100km',
        features: 'Air Conditioning, USB/Bluetooth, 5 Star ANCAP Rating ',
        company: 'Go Rentals'
    },
    {
        type: 'largeCar',
        vehicle: 'Toyota RAV4 4WD',
        transmission: 'Automatic',
        engineSize: '2.5L Engine',
        groupSize: 5,
        numDays: 6,
        image: 'img/car_large_3.png',
        price: 129,
        hire: 774,
        fuelEconomy: '9.7 litres/100km',
        features: 'Air Conditioning, USB/Bluetooth, 5 Star ANCAP Rating ',
        company: 'Apex Rentals'
    },
    {
        type: 'motorhome',
        vehicle: 'Euro Motorhome',
        transmission: 'Automatic',
        engineSize: '2.3L Engine',
        groupSize: 6,
        numDays: 11,
        image: 'img/motorhome_1.png',
        price: 144,
        hire: 864,
        fuelEconomy: '17 litres/100km',
        features: 'Air conditioning and heating, power steering (Length: 7.7m Width: 2.3m Height: 3.6m) ',
        company: 'Apollo Camper'
    },
    {
        type: 'motorhome',
        vehicle: 'Euro Deluxe Motorhome',
        transmission: 'Automatic',
        engineSize: '2.5L Engine',
        groupSize: 6,
        numDays: 9,
        image: 'img/motorhome_1.png',
        price: 144,
        hire: 1296,
        fuelEconomy: '17 litres/100km',
        features: 'Air conditioning and heating, power steering (Length: 7.7m Width: 2.3m Height: 3.6m) ',
        company: 'Apollo Camper'
    },
    {
        type: 'motorhome',
        vehicle: 'The Suite Motorhome',
        transmission: 'Automatic',
        engineSize: '2.3L Engine',
        groupSize: 6,
        numDays: 3,
        image: 'img/motorhome_3.png',
        price: 144,
        hire: 432,
        fuelEconomy: '17 litres/100km',
        features: 'Central heating, power steering (Length: 7.4m Width: 2.3m Height: 2.9m) ',
        company: 'Wilderness'
    },
    {
        type: 'motorbike',
        vehicle: 'Honda CB500X',
        transmission: '6 speed manual',
        engineSize: '500cc',
        groupSize: 1,
        numDays: 3,
        image: 'img/motorbike_1.png',
        price: 109,
        hire: 327,
        fuelEconomy: '3.7 litres/100km',
        features: 'Fuel injected',
        company: 'Kiwi Motorcycle Rentals'
    },
    {
        type: 'motorbike',
        vehicle: 'BMW R1200R',
        transmission: '6 speed manual',
        engineSize: '1200cc',
        groupSize: 1,
        numDays: 5,
        image: 'img/motorbike_2.png',
        price: 109,
        hire: 545,
        fuelEconomy: '3.7 litres/100km',
        features: 'Flat twin water cooled',
        company: 'South Pacific Motorcycles'
    },
    {
        type: 'motorbike',
        vehicle: 'Harley-Davidson Softail',
        transmission: '6 speed manual',
        engineSize: '1690cc',
        groupSize: 1,
        numDays: 4,
        image: 'img/motorbike_3.png',
        price: 109,
        hire: 436,
        fuelEconomy: '3.7 litres/100km',
        features: 'Air cooled High Output Twin Cam 103B',
        company: 'Kiwi Motorcycle Rentals'
    },
];

// Assigning variable name for Submit and Clear buttons
var submitButton = document.getElementById("filterSubmit");
var clearButton = document.getElementById("filterClear");

// Event listener added to Submit and Clear buttons
submitButton.addEventListener('click', applyFiltering);
clearButton.addEventListener('click', clearFiltering);

function applyFiltering() {
    
    // Get all filter inputs
    var type = document.getElementById('typeSelect').value;
    var groupSize = document.getElementById('groupSizeSelect').value;
    if (groupSize == "1") {
        groupSizeNum = 1;
    }
    if (groupSize == "2") {
        groupSizeNum = 2;
    }
    if (groupSize == "5") {
        groupSizeNum = 5;
    }
    if (groupSize == "6") {
        groupSizeNum = 6;
    }
    if (groupSize == "all") {
        groupSizeNum = 0;
    }

    // Pick-up and drop-off date validation
    var collectDate = document.getElementById('collectDate').value;
    var deliverDate = document.getElementById('deliverDate').value;

    var datePickup = new Date(collectDate);
    var dateDropoff = new Date(deliverDate);

    var numMilliSecs = dateDropoff - datePickup;
    var numDays = numMilliSecs / (1000 * 3600 * 24);

    // Vehicle Type and Group Size Filtering 
    productOutput.innerHTML = "";
    for (var i = 0; i < products.length; i++) {
        if ((products[i].type === type || type === "all") &&
            (products[i].groupSize >= groupSizeNum)) {
            productOutput.innerHTML += `
            <div class="col-12 col-md-4 p-4" id="rental">
                <div class="card">
                    <img src="${products[i].image}" class="card-img-top" alt="Vehicle">
                    <div class="card-body">
                      <h4 class="card-title">${products[i].vehicle}</h4>
                      <p class="card-text"> Up to ${products[i].groupSize} people</p>
                      <pclass="card-text"> - ${products[i].transmission}</p>             
                      <p class="card-text"> - ${products[i].engineSize}</p>
                      <p class="card-text"> - ${products[i].fuelEconomy}</p>
                      <p class="card-text">Features - ${products[i].features}</p>                             
                      <a href="#" class="btn quote rounded-pill" id="${i}" data-bs-toggle="modal" data-bs-target="#productModal">Get a quote</a>
                      <p class="card-text">Booked through <strong>${products[i].company}</strong></p>   
                    </div>
                </div>
            </div>
        `;
        }
    }
    populateModals();
}

// Clear Filter Search
function clearFiltering() {
    productOutput.innerHTML = "";
    document.getElementById("typeSelect").value = "all";
    document.getElementById("groupSizeSelect").value = "all";
    document.getElementById("collectDate").value = "all";
    document.getElementById("deliverDate").value = "all";
}

// Get all filter inputs
var type = document.getElementById('typeSelect');
var groupSize = document.getElementById('groupSizeSelect');
var search = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput');

// Event Listeners
type.addEventListener('change', filterType);
groupSize.addEventListener('change', filterGroupSize);

// Select Vehicle Type Filter
function filterType() {
    var productsOutput = document.getElementById('productOutput');
    productsOutput.innerHTML = '';
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        if (type.value === product.type) {
            productsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="Vechicle">
                    <div class="card-body">
                      <h4 class="card-title">${products[i].vehicle}</h4>
                      <p class="card-text"> Up to ${products[i].groupSize} people</p>
                      <pclass="card-text"> - ${products[i].transmission}</p>             
                      <p class="card-text"> - ${products[i].engineSize}</p>
                      <p class="card-text"> - ${products[i].fuelEconomy}</p>
                      <p class="card-text">Features - ${products[i].features}</p>                             
                      <a href="#" class="btn quote rounded-pill" id="${i}" data-bs-toggle="modal" data-bs-target="#productModal">Get a quote</a>
                    </div>
                </div>
            </div>
        `;
        }
    }
    populateModals();
}

// Select Group Size Filter
function filterGroupSize() {
    var productsOutput = document.getElementById('productOutput');
    productsOutput.innerHTML = '';
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        if (groupSize.value === product.groupSize) {
            productsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="Vechicle">
                    <div class="card-body">
                      <h4 class="card-title">${products[i].vehicle}</h4>
                      <p class="card-text"> Up to ${products[i].groupSize} people</p>
                      <pclass="card-text"> - ${products[i].transmission}</p>             
                      <p class="card-text"> - ${products[i].engineSize}</p>
                      <p class="card-text"> - ${products[i].fuelEconomy}</p>
                      <p class="card-text">Features - ${products[i].features}</p>                             
                      <a href="#" class="btn quote rounded-pill" id="${i}" data-bs-toggle="modal" data-bs-target="#productModal">Get a quote</a>
                    </div>
                </div>
            </div>
        `;
        }
    }
    populateModals();
}

// Filter by All Products
function getAllProducts() {
    var productsOutput = document.getElementById('productOutput');
    productsOutput.innerHTML = '';
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        productsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                <img src="${product.image}" class="card-img-top" alt="Vechicle">
                <div class="card-body">
                <div class="card-body">
                <h4 class="card-title">${products[i].vehicle}</h4>
                <p class="card-text"> Up to ${products[i].groupSize} people</p>
                <pclass="card-text"> - ${products[i].transmission}</p>             
                <p class="card-text"> - ${products[i].engineSize}</p>
                <p class="card-text"> - ${products[i].fuelEconomy}</p>
                <p class="card-text">Features - ${products[i].features}</p>                             
                <a href="#" class="btn quote rounded-pill" id="${i}" data-bs-toggle="modal" data-bs-target="#productModal">Get a quote</a>
                    </div>
                </div>
            </div>
        `;
    }
    populateModals();
}

getAllProducts();

// Search by All Products
function searchProducts() {
    var productsOutput = document.getElementById('productOutput');
    productsOutput.innerHTML = '';
    var searchValue = searchInput.value;
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        if (searchValue.toLowerCase() == product.vehicle.toLowerCase()) {
            productsOutput.innerHTML += `
            <div class="col-3 p-5">
                <div class="card">
                <img src="${product.image}" class="card-img-top" alt="Vehicle">
                <div class="card-body">
                <div class="card-body">
                <h4 class="card-title">${products[i].vehicle}</h4>
                <p class="card-text"> Up to ${products[i].groupSize} people</p>
                <pclass="card-text"> - ${products[i].transmission}</p>             
                <p class="card-text"> - ${products[i].engineSize}</p>
                <p class="card-text"> - ${products[i].fuelEconomy}</p>
                <p class="card-text">Features - ${products[i].features}</p>                             
                <a href="#" class="btn quote rounded-pill" id="${i}" data-bs-toggle="modal" data-bs-target="#productModal">Get a quote</a>
                    </div>
                </div>
            </div>
        `;
        }
    }
    populateModals();
}

// Populte model from Get A Quote Button click 
function populateModals() {
    var quoteButtons = document.querySelectorAll(".quote");
    Array.from(quoteButtons).forEach(function (btn) {
        btn.addEventListener('click', function () {
            var productModal = document.getElementById('modalResult');
            productModal.innerHTML = `
            <div class="modal-header">
                <h2 class="modal-title" id="exampleModalLabel">Quote Summary</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h2 class="modal-title fs-3" id="exampleModalLabel">${products[this.id].vehicle}</h2>
                    <p>Fuel economy: ${products[this.id].fuelEconomy}</p>
                    <img src="${products[this.id].image}"class="card-img-top" alt="Rental Vehicle">
                <h4>Vehicle rental costs:</h4>
                    <p id="rentalCalc"></p>
                    <p>${products[this.id].numDays} day/s vehicle rental at $${products[this.id].price} per day = <span id="hireRate">$${products[this.id].hire} (excl. GST).</span></p>
                <h4>Plus your estimate fuel costs:</h4>
                    <p><span id="consumption"></span></p>
                    <i>(Enter details below to calculate your fuel cost)</i>
                <hr>
                    <p>Expected driving distance <i> (in kilometre's) </i>
                    <input id="distance" type="number" min="50" max="1000000" onchange="computeConsumption()">
                    </p>
                    <p>Fuel economy per litre <i> (see rate above)</i>
                    <input id="fuel" type="number" min="1" max="10000000" step="1" onchange="computeConsumption()">
                    </p>
                    <p>Fuel price per litre <i>(default price 91 unleaded) $ </i><input id="costPer" type="number" min="1.00" max="10" step="0.01" value="2.49" onchange="computeConsumption()">
                    </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn rounded-pill" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn rounded-pill" data-bs-dismiss="modal">Book</button>
            </div>
        `;
        });
    });
}

// Vehicle Rental Calculator
function rentalCalculation() {
    var price = document.getElementById('price').value;
    var numDays = document.getElementById('numDays').value;
    var rentalCosts = (price * numDays).toFixed(2);
    document.getElementById('rentalCalc').innerHTML = "Your vehicle rental price " + price + "per day " + " number of rentals days" + numDays + "is a total of  $ ." + (price * numDays).toFixed(2);
}

// Estimate Fuel Cost Calculator
function computeConsumption() {
    var distance = document.getElementById('distance').value;
    var fuel = document.getElementById('fuel').value;
    var costPer = document.getElementById('costPer').value;
    var consumed = (fuel / (distance / 100)).toFixed(2);
    var costPer100 = (consumed * costPer).toFixed(2);
    document.getElementById('consumption').innerHTML = consumed + " litres per 100k's ($ " + costPer100 + " per 100k's) = $" + (fuel * costPer).toFixed(2) + " (excl. GST).";
}


// MAPBOX RENTAL LOCATIONS
// Setting up access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY2lhcmFuc2xvdyIsImEiOiJja3A0b2RvNXQwZHZsMm5vdzJhMzlneHliIn0.GePUzyfjdyGc0pnYNPerqA';

// Initial setting of New Zealand
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [174.73875496901147, -40.991306522562766],
    zoom: 4
});

// Click function to zoom to Auckland Airport marker
$("#aucklandAirport").click(function () {
    map.flyTo({
        center: [174.790741665314, -37.00643172657947],
        zoom: 12,
        bearing: 0,
        speed: 0.50,
        curve: 2,
        easing: function (t) {
            return t;
        },
        essential: true
    });
});

// Click function to zoom to Wellington Airport marker
$("#wellingtonAirport").click(function () {
    map.flyTo({
        center: [174.80802218896525, -41.32748936180383],
        zoom: 12,
        bearing: 0,
        speed: 0.50,
        curve: 2,
        easing: function (t) {
            return t;
        },
        essential: true
    });
});

// Click function to zoom to Christchurch Airport marker
$("#christchurchAirport").click(function () {
    map.flyTo({
        center: [172.53759303683995, -43.48753269971704],
        zoom: 12.5,
        bearing: 0,
        speed: 0.60,
        curve: 2,
        easing: function (t) {
            return t;
        },
        essential: true
    });
});

// Click function to zoom to Dunedin Airport marker
$("#dunedinAirport").click(function () {
    map.flyTo({
        center: [170.2012239593173, -45.92275686517924],
        zoom: 12,
        bearing: 0,
        speed: 0.60,
        curve: 2,
        easing: function (t) {
            return t;
        },
        essential: true
    });
});

// Click function to zoom to Queenstown Airport marker
$("#queenstownAirport").click(function () {
    map.flyTo({
        center: [168.7449320513245, -45.01944632262888],
        zoom: 12,
        bearing: 0,
        speed: 0.60,
        curve: 2,
        easing: function (t) {
            return t;
        },
        essential: true
    });
});

// Features - (Important Points on the Map)
var geojson = {
    'type': 'featureCollection',
    'features': [{
        'type': 'Feature',
        'properties': {
            'title': 'Auckland Airport',
            'description': 'Auckland Domestic Terminal ',
            'iconSize': [60, 60]
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [174.7818987231484, -41.29066473733333]
        }
    }]
};

// Marker for features
for (var marker of geojson.features) {
    // Create a DOM element for each marker
    var el = document.createElement('div');
    var width = marker.properties.iconSize[0];
    var height = marker.properties.iconSize[1];
    el.className = 'marker';
    el.style.backgroundImage = `img/icon_airport.png${width}/${height}/)`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';

    // Add Markers 
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
            new mapboxgl.Popup({
                offset: 25
            })
            .setHTML(
                `<h3>${marker.properties.title}</h3><p>${marker.properties.description}</p>`
            )
        )
        .addTo(map);
}