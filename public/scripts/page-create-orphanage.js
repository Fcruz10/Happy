//create map
const map = L.map('mapid').setView([38.7206143,-9.1459582], 15);

//create and add titleLayer
L
.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
});

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);
});

//add photo field
function addPhotoField() {
    //grab photo container #images
    const container = document.querySelector('#images');

    //grab container to duplicate .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //make clone of last image added
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    //check if field is empty, if yes, don't add to container #images
    const input = newFieldContainer.children[0];

    if(input.value == '') {
        return 
    };

    //clean field before add to container #images
    input.value = '';

    //add clone to container #images
    container.appendChild(newFieldContainer);
};

//delete new field
function deleteField(event) {
    const span = event.currentTarget;
    
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1) {
        //clean field value
        span.parentNode.children[0].value = '';
        return
    };

    //delete field
    span.parentNode.remove();
};

//select yes or no
function toggleSelect(event) {
    
    //remove .active from buttons
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active') );
    
    //get clicked button
    const button = event.currentTarget;
    
    //place .active
    button.classList.add('active')
    
    //update input:hidden w/ selected value
    const input = document.querySelector('[name="open_on_weekends"]');

    input.value = button.dataset.value;
};

// Notice missing to select location on map
function validate(event) {
    const lat = document.querySelector('[name=lat]').value;
    const lng = document.querySelector('[name=lng]').value;

    const valueLatLng = lat.concat(lng);
    
    //validate if lat and lng is filled
    if(valueLatLng == '') {

        event.preventDefault()
        alert('Select one point on map!')
    }
};