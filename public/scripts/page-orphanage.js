const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
};

//create map
const map = L.map('mapid', options).setView([38.7206143,-9.1459582], 15);

//create and add titleLayer
L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});


//create and add marker
L
.marker([38.7206143,-9.1459582], { icon })
.addTo(map);


// image galery

function selectImage(event) {
    const button = event.currentTarget;

    //remove all active classes
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach((button) => {
        button.classList.remove('active')
    });

    //select image onclick
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img');

    //update container of image
    imageContainer.src = image.src;

    //add class .active to clicked button
    button.classList.add('active');

};