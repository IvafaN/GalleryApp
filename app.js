const boxPhoto = document.getElementById('boxPhoto');

const arrPhotos = [
    { image: "/img/image1.jpg", name: "Dolphin Beach, Cancun", description: "This quiet beach is the perfect location for all kinds of beach lovers." },
    { image: "/img/image2.jpg", name: "Val’Quirico, Tlaxcala", description: "A town that provides a new experience in entertainment: bars, international cuisine restaurants and exclusive european-like suites located downtown." },
    { image: "/img/image3.jpg", name: "Valle de Bravo, Mexico", description: "The landscape and atmospheric conditions are ideal for free flight, and paragliding can be done almost year-round." },
    { image: "/img/image4.jpg", name: "Chapultepec, Mexico City", description: "It's one of the largest city parks in the Western Hemisphere, measuring in total just over 686 hectares (1,695 acres). " },
    { image: "/img/image5.jpg", name: "Atlixco, Puebla", description: "t is a regional industrial and commercial center but economically it is much better known for its production of ornamental plants and cut flowers." },
    { image: "/img/image6.jpg", name: "Capilano Suspension Bridge, BC", description: "It's a simple suspension bridge crossing the Capilano River in the District of North Vancouver, British Columbia, Canada." },
    { image: "/img/image7.jpg", name: "Cathedral, Mexico City", description: "It is situated atop the former Aztec sacred precinct near the Templo Mayor on the northern side of the Plaza de la Constitución (Zócalo) in Downtown Mexico City." },
    { image: "/img/image8.jpg", name: "The Hidden Kitchen, Mexico", description: "This restaurant creates an exceptional gastronomic experiences that are unique and unforgettable for their clients." },
    { image: "/img/image9.jpg", name: "Playa del Carmen, Mexico", description: "is a city located along the Caribbean Sea in the municipality of Solidaridad, in the state of Quintana Roo, Mexico." },
    { image: "/img/image10.jpg", name: "Buntzen Lake, BC", description: "is a popular recreation park that is maintained by BC Hydro that has a network of hiking trails to explore." },
    { image: "/img/image11.jpg", name: "Garibaldi Lake, BC", description: "With turquoise-coloured water nestled between alpine mountains and a spectacular glacier as the backdrop." },
    { image: "/img/image12.jpg", name: "Parque Nacional El Chico", description: "You can take an easy and very lovely day trip or weekend retreat from Pachuca to this 'little' town or the nearly 3000-hectare Parque Nacional El Chico, which was established as a reserve in 1898." }
];

showPhotos(arrPhotos);

function showPhotos(photos) {
    boxPhoto.innerHTML = '';

    photos.forEach(photo => {
        const { name, description, image } = photo;
        const photoEl = document.createElement("div");
        photoEl.classList.add('gallery_images');

        photoEl.innerHTML = `
                <img src="${image}">
                <div class="gallery_images_overlay"></div>
                <div class="gallery_images_desc">
                    <hr>
                    <p>${description}</p>
                    <hr>
                </div>
                <div class="gallery_images_name">
                    <p>${name}</p>
                </div>
            `

        boxPhoto.appendChild(photoEl);
    });
}

const btnGallery = document.getElementById('btnGallery');

btnGallery.addEventListener('click', (e) => {
    document.getElementById("gallery").scrollIntoView({ behavior: 'smooth' });
});