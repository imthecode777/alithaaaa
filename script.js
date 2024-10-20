function showMessage() {
  document.getElementById("message").classList.add("show");
  var duration = 10 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 45, spread: 360, ticks: 80, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 100 * (timeLeft / duration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: {
          x: randomInRange(0.1, 0.9),
          y: Math.random() - 0.2,
        },
        colors: ["#ff69b4", "#ff99cc", "#ffb6c1", "#ffe5ec", "#ff1493"],
        gravity: randomInRange(0.4, 0.7),
        scalar: randomInRange(0.8, 1.5),
      })
    );
  }, 150);
}

document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('background-music');
  
  // Unmute and play after user interaction
  document.addEventListener('click', function() {
      audio.muted = false; // Unmute
      audio.play();
  });
});