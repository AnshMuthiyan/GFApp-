const SHEETDB_API = "https://sheetdb.io/api/v1/twkl0slza3kci";
const tableBody = document.querySelector("#placesTable tbody");
const form = document.getElementById("placeForm");
const input = document.getElementById("placeInput");

// Load places
fetch(SHEETDB_API)
  .then((res) => res.json())
  .then((data) => {
    tableBody.innerHTML = ""; // clear old data
    data.forEach((row, index) => {
      if (row.place) {
        const tr = document.createElement("tr");

        const tdPlace = document.createElement("td");
        tdPlace.textContent = row.place;

        const tdDelete = document.createElement("td");
        const delBtn = document.createElement("button");
        delBtn.textContent = "🗑️";
        delBtn.style.cursor = "pointer";
        delBtn.onclick = () => deleteEntry(row.place); // uses place as ID

        tdDelete.appendChild(delBtn);
        tr.append(tdPlace, tdDelete);
        tableBody.appendChild(tr);
      }
    });
  });

// Submit new place
function addPlace() {
  const input = document.getElementById("placeInput");
  const newPlace = input.value.trim();
  if (!newPlace) return;

  fetch(SHEETDB_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: [{ place: newPlace }] }),
  }).then(() => {
    location.reload(); // Refresh to show updated list
  });
}

// Delete a place
function deleteEntry(placeName) {
  // SheetDB can delete by field value like /place/Paris
  fetch(`${SHEETDB_API}/place/${encodeURIComponent(placeName)}`, {
    method: "DELETE",
  }).then(() => location.reload());
}
