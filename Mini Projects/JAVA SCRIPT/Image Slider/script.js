let image = document.querySelector("img");
let imagesData = [
  "./image-2.avif",
  "./image-3.jpg",
  "./image-4.jpg",
  "image-5.jpg",
];
let i = 0;
setInterval(() => {
  image.src = `Images/${imagesData[i]}`;
  i++;
  if (i === imagesData.length) {
    i = 0;
  }
}, 2000);
