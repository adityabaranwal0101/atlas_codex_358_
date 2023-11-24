// JavaScript for the transition
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = link.getAttribute('href');
      }, 500); // Adjust this delay to match your transition time
    });
  });
  // script.js
const video = document.getElementById('myVideo');
const paletteDiv = document.getElementById('colorPalette');

video.addEventListener('play', function() {
    const interval = 1000; // milliseconds
    setInterval(function() {
        captureVideoFrame();
    }, interval);
});

function captureVideoFrame() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const colors = getFrameColors(imageData);
    displayColors(colors);
}

function getFrameColors(imageData) {
    const sampleSize = 10; // Sample size for colors (lower number for faster processing)
    const colors = [];
    for (let i = 0; i < imageData.data.length; i += sampleSize * 4) {
        const color = `rgb(${imageData.data[i]}, ${imageData.data[i + 1]}, ${imageData.data[i + 2]})`;
        colors.push(color);
    }
    return colors;
}

function displayColors(colors) {
    paletteDiv.innerHTML = '';

    colors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.classList.add('swatch');
        swatch.style.backgroundColor = color;
        paletteDiv.appendChild(swatch);
    });
}
