document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.querySelector('.gallery-container');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const captionText = document.querySelector('.caption');
    const closeBtn = document.querySelector('.close');

    const images = [
        { src: 'images/switzerland-emerald-green-lake-yresll6ifq3v377y 7.jpg', hdSrc: 'path/to/hd-image1.jpg', caption: 'Image 1' },
        { src: 'images/niagara-falls-background-29zpe834ymj9212w.jpg', hdSrc: 'path/to/hd-image2.jpg', caption: 'Image 2' },
        { src: 'images/nature-3082832_1280.jpg', hdSrc: 'path/to/hd-image3.jpg', caption: 'Image 3' },
        { src: 'images/italy-aesthetic-g5zqh97e8a6dq5wn 13.jpg', hdSrc: 'path/to/hd-image4.jpg', caption: 'Image 4' },
        { src: 'images/images 20.jpeg', hdSrc: 'path/to/hd-image5.jpg', caption: 'Image 5' },
        { src: 'images/images 19.jpeg', hdSrc: 'path/to/hd-image6.jpg', caption: 'Image 6' },
        { src: 'images/images 18.jpeg', hdSrc: 'path/to/hd-image7.jpg', caption: 'Image 7' },
        { src: 'images/images 16.jpeg', hdSrc: 'path/to/hd-image8.jpg', caption: 'Image 8' },
        { src:'images/images 15.jpeg', hdSrc: 'path/to/hd-image9.jpg', caption: 'Image 9' },
        { src: 'images/images 13.jpeg', hdSrc: 'path/to/hd-image10.jpg', caption: 'Image 10' },
        { src: 'images/images 12.jpeg', hdSrc: 'path/to/hd-image11.jpg', caption: 'Image 11' },
        { src: 'images/images 11.jpeg', hdSrc: 'path/to/hd-image12.jpg', caption: 'Image 12' },
        { src: 'images/images 6.jpg', hdSrc: 'path/to/hd-image13.jpg', caption: 'Image 13' },
        { src: 'images/images 5.jpg', hdSrc: 'path/to/hd-image14.jpg', caption: 'Image 14' },
        { src: 'images/images 4.jpeg', hdSrc: 'path/to/hd-image15.jpg', caption: 'Image 15' },
        { src: 'images/images 2.jpg', hdSrc: 'path/to/hd-image16.jpg', caption: 'Image 16' },
        { src: 'images/desktop-wallpaper-water-near-buildings-italy-europe-aesthetic 14.jpg', hdSrc: 'path/to/hd-image17.jpg', caption: 'Image 17' },
        { src: 'images/desktop-wallpaper-brazil-beach-thumbnail 15.jpg', hdSrc: 'path/to/hd-image18.jpg', caption: 'Image 18' },
        { src: 'images/2623679-bigthumbnail 9.jpg', hdSrc: 'path/to/hd-image19.jpg', caption: 'Image 19' }, 
        { src: 'images/2555325-bigthumbnail 8.jpg', hdSrc: 'path/to/hd-image20.jpg', caption: 'Image 20' },


    ];

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.dataset.hdSrc = image.hdSrc;
        imgElement.alt = image.caption;
        galleryContainer.appendChild(imgElement);
    });

    galleryContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            modal.style.display = 'block';
            modalImg.src = event.target.dataset.hdSrc;
            captionText.innerText = event.target.alt;
        }
    });


    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

