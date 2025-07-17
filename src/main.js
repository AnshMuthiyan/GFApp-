const nicknames = ["Apeena", "Aleena", "buddy", "bub", "bucko"];

// Wait until the HTML is fully loaded
window.addEventListener("DOMContentLoaded", () => {
  // Set a random nickname
  const randomNickname =
    nicknames[Math.floor(Math.random() * nicknames.length)];
  document.getElementById(
    "nicknameHeader"
  ).innerText = `Hello, ${randomNickname}`;

  // Set a random photo
  const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
  document.getElementById("randomPhoto").src = randomPhoto;
});

const photos = [
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/photo1.jpg?v=1746484216687",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/photo2.jpg?v=1746484244136",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250423_172510618.jpg?v=1746834159976",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_202504_30_215912798.jpg?v=1746834600808",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250502_011132998.MP.jpg?v=1746835292331",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250502_011155331.jpg?v=1746835310583",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20240920_014117856.MP.jpg?v=1746835338309",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG_20240927_223740_142.jpg?v=1747411628400",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG_20240927_223930_457.jpg?v=1747411630755",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG_20240927_223935_945.jpg?v=1747411633774",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG_20240927_223937_456.jpg?v=1747411637777",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG_20240927_224128_569.jpg?v=1747411642490",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG_20240927_224130_380.jpg?v=1747411644924",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG-20241019-WA0014.jpg?v=1747411647857",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG_20240927_223925_456.jpg?v=1747411671272",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG-20241027-WA0005.jpg?v=1747411678351",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG-20241027-WA0002.jpg?v=1747411686317",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG-20241101-WA0001.jpg?v=1747411692748",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG-20241101-WA0005.jpg?v=1747411697361",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG-20241101-WA0005.jpg?v=1747411697361",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG-20241102-WA0003.jpg?v=1747411700763",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/IMG-20241102-WA0003.jpg?v=1747411700763",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20240920_014249144.jpg?v=1747411720138",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20240920_015214353.jpg?v=1747411723535",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20240921_011130176.jpg?v=1747411727166",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20240927_044844359.MP.jpg?v=1747411730662",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20240927_044937275.MP.jpg?v=1747411775309",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20240927_044937275.MP.jpg?v=1747411775309",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20240927_060454775.jpg?v=1747411780897",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20240927_060458838.MP.jpg?v=1747411785651",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20241007_005710804.jpg?v=1747411792410",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20241025_042201677.jpg?v=1747411799577",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20241027_033122023.jpg?v=1747411805722",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20241128_220307039.MP.jpg?v=1747411812905",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20241202_223431396.MP.jpg?v=1747411820468",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20241205_033941398.jpg?v=1747411826233",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250114_014854233.jpg?v=1747412408391",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250121_021758516.MP.jpg?v=1747412417416",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250215_052332107.jpg?v=1747412420430",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250322_220112704.jpg?v=1747412424116",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250405_211810373.jpg?v=1747412427799",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250410_165409483.jpg?v=1747412431327",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250412_201031263.jpg?v=1747412445403",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250412_201042600.jpg?v=1747412447998",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250412_204637827.jpg?v=1747412452173",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250423_172510618.jpg?v=1747412460442",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250430_215912798.jpg?v=1747412467634",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250502_011132998.MP.jpg?v=1747412473068",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250502_011155331.jpg?v=1747412477790",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250503_203612120.jpg?v=1747412485450",
  "https://cdn.glitch.global/a2e4bc72-4ae4-4dd6-9d44-1805e80f1910/PXL_20250504_162831175.jpg?v=1747412487823",
];

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
});
