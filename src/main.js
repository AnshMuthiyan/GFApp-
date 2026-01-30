const nicknames = ["Apeena", "Aleena", "buddy", "bub", "bucko"];

// Wait until the HTML is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  // Set a random nickname
  const randomNickname =
    nicknames[Math.floor(Math.random() * nicknames.length)];
  document.getElementById("nicknameValue").textContent = randomNickname;

  // Set a random photo
    // Set a random photo from the local folder
    const photoFolder = "aleena and me memories/";
    const photoFiles = [
      "IMG-20241019-WA0014.jpg",
      "IMG-20241027-WA0002.jpg",
      "IMG-20241027-WA0005.jpg",
      "IMG-20241101-WA0001.jpg",
      "IMG-20241101-WA0005.jpg",
      "IMG-20241101-WA0010.jpg",
      "IMG-20241102-WA0003.jpg",
      "IMG-20241102-WA0010.jpg",
      "IMG-20241102-WA0012.jpg",
      "IMG-20241102-WA0014.jpg",
      "IMG_20240922_140209~3.jpg",
      "IMG_20240927_223740_142.jpg",
      "IMG_20240927_223925_456.jpg",
      "IMG_20240927_223930_457.jpg",
      "IMG_20240927_223935_945.jpg",
      "IMG_20240927_223937_456.jpg",
      "IMG_20240927_224118_988.jpg",
      "IMG_20240927_224128_569.jpg",
      "IMG_20240927_224130_380.jpg",
      "PXL_20240920_014117856.MP.jpg",
      "PXL_20240920_014245005.jpg",
      "PXL_20240920_014249144.jpg",
      "PXL_20240920_015214353.jpg",
      "PXL_20240921_011130176.jpg",
      "PXL_20240927_044844359.MP.jpg",
      "PXL_20240927_044937275.MP.jpg",
      "PXL_20240927_044948920.MP.jpg",
      "PXL_20240927_060454775.jpg",
      "PXL_20240927_060458838.MP.jpg",
      "PXL_20241007_005710804.jpg",
      "PXL_20241025_042201677.jpg",
      "PXL_20241027_033122023.jpg",
      "PXL_20241128_220307039.MP.jpg",
      "PXL_20241202_223431396.MP.jpg",
      "PXL_20241205_033941398.jpg",
      "PXL_20250114_014854233.jpg",
      "PXL_20250322_220112704.jpg",
      "PXL_20250405_211810373.jpg",
      "PXL_20250410_165409483.jpg",
      "PXL_20250412_201031263.jpg",
      "PXL_20250412_201042600.jpg",
      "PXL_20250412_204637827.jpg",
      "PXL_20250412_215359362.jpg",
      "PXL_20250423_172510618.jpg",
      "PXL_20250427_012117763.jpg",
      "PXL_20250427_012133303.NIGHT.jpg",
      "PXL_20250430_214238592.jpg",
      "PXL_20250430_215219819.jpg",
      "PXL_20250430_215912798.jpg",
      "PXL_20250430_231231698.jpg",
      "PXL_20250430_231233078.jpg",
      "PXL_20250501_043224867.jpg",
      "PXL_20250501_210328669.jpg",
      "PXL_20250502_011134391.jpg",
      "PXL_20250502_011155331.jpg",
      "PXL_20250502_011205036.jpg",
      "PXL_20250503_182842350.jpg",
      "PXL_20250503_183146870.jpg",
      "PXL_20250503_185849371.jpg",
      "PXL_20250503_203612120.jpg",
      "PXL_20250504_162831175.jpg",
      "PXL_20250504_204505131.jpg",
      "PXL_20250504_204618418.jpg"
    ];

    function getRandomPhoto() {
      const index = Math.floor(Math.random() * photoFiles.length);
      return photoFolder + photoFiles[index];
    }

    // Usage example:
    let photoUrl = getRandomPhoto();
    document.getElementById("randomPhoto").src = photoUrl;

function updateCountdown() {
  const countdownElement = document.getElementById("countdown");
  const targetDate = new Date("2025-08-18T00:00:00");
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownElement.innerText = "The day has arrived!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s Until Fall Semester!`;
}

window.addEventListener("DOMContentLoaded", () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
})});
