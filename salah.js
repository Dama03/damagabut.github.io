const clockTickSound = document.getElementById('clockTickSound');

// Memutar suara detak jam setiap detik
const timer = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    // Memainkan suara detak jam setiap detik
    clockTickSound.play().catch(error => {
        console.error("Audio failed to play:", error);
    });

    // Cek jika waktu habis
    if (timeLeft <= 0) {
        clearInterval(timer); // Stop timer
        bombElement.classList.add('hidden'); // Sembunyikan bom
        explosionElement.style.display = 'block'; // Tampilkan ledakan
        explosionSound.play(); // Putar suara ledakan
        document.body.style.backgroundColor = '#f00'; // Ubah latar belakang menjadi merah
    }

    timeLeft--;
}, 1000);
