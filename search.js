/* =========================================
   ZPRINT v2.6 – SEARCH.JS (CLEAN & SAFE)
========================================= */

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyPat4Q7LTdv3985ABPYVeMMeEnVUbsFCIBrzhYOmz2EHcr41JFY3W7GA3JM0cslAaN/exec';

/* ---- sanity check (runs on load) ---- */
console.log("search.js loaded");
console.log("SCRIPT_URL:", SCRIPT_URL);

/* ---- search handler ---- */
function search() {
  const term = document.getElementById("term").value.trim();
  const status = document.getElementById("status").value;

  console.log("Searching for:", term, "Status:", status);

  const url =
    SCRIPT_URL +
    "?action=searchWO" +
    "&term=" + encodeURIComponent(term) +
    "&status=" + encodeURIComponent(status);

  console.log("Request URL:", url);

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("Search result:", data);
      renderResults(data);
    })
    .catch(err => {
      console.error("Search error:", err);
      alert("Search failed. Check console.");
    });
}

/* ---- render table ---- */
function renderResults(rows) {
  const tbody = document.getElementById("results");
  tbody.innerHTML = "";

  if (!rows || rows.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="6">No results found</td>`;
    tbody.appendChild(tr);
    return;
  }

  rows.forEach(r => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${r.wo}</td>
      <td>${r.date}</td>
      <td>${r.client}</td>
      <td>${r.category}-${r.subcategory}</td>
      <td>${r.status}</td>
      <td>
        <button onclick="printOne('${r.wo}')">Print</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

/* ---- print single job card ---- */
function printOne(wo) {
  console.log("Printing WO:", wo);
  window.open(
    SCRIPT_URL + "?action=printSingle&wo=" + encodeURIComponent(wo),
    "_blank"
  );
}
