const SHEETDB_API = "https://sheetdb.io/api/v1/twkl0slza3kci"; // Replace with your SheetDB endpoint

// Format current datetime
function getCurrentTimestamp() {
  const options = {
    timeZone: "America/New_York", // EST
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  };
  return new Intl.DateTimeFormat("en-US", options).format(new Date());
}

// Submit journal entries
document.getElementById("formToYou").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = document.getElementById("entryToYou").value.trim();
  if (text) addJournalEntry("you", text);
});

document.getElementById("formToHer").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = document.getElementById("entryToHer").value.trim();
  if (text) addJournalEntry("her", text);
});

async function addJournalEntry(to, content) {
  const timestamp = getCurrentTimestamp();
  try {
    await fetch(SHEETDB_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: { to, entry: content, timestamp }
      })
    });
    loadJournal();
    if (to === "you") document.getElementById("entryToYou").value = "";
    if (to === "her") document.getElementById("entryToHer").value = "";
  } catch (err) {
    console.error("Error writing journal entry:", err);
  }
}

async function loadJournal() {
  try {
    const res = await fetch(SHEETDB_API);
    const data = await res.json();
    const toYou = data.filter(entry => entry.to === "you").reverse();
    const toHer = data.filter(entry => entry.to === "her").reverse();

    document.getElementById("journalToYou").innerHTML =
      toYou.map(e =>
        `<tr>
          <td>${e.entry}</td>
          <td><span class="timestamp">${e.timestamp || ""}</span></td>
        </tr>`
      ).join("");

    document.getElementById("journalToHer").innerHTML =
      toHer.map(e =>
        `<tr>
          <td>${e.entry}</td>
          <td><span class="timestamp">${e.timestamp || ""}</span></td>
        </tr>`
      ).join("");
  
  } catch (err) {
    console.error("Error loading journal:", err);
  }
}

// Load on page load
loadJournal();
