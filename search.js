const SCRIPT_URL = "PASTE_APPS_SCRIPT_URL_HERE";

function search() {
  const term = document.getElementById("term").value;
  const status = document.getElementById("status").value;

  fetch(`${SCRIPT_URL}?action=searchWO&term=${encodeURIComponent(term)}&status=${status}`)
    .then(r => r.json())
    .then(render);
}

function render(data) {
  const tbody = document.getElementById("results");
  tbody.innerHTML = "";

  data.forEach(r => {
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

function printOne(wo) {
  window.open(`${SCRIPT_URL}?action=printSingle&wo=${wo}`);
}
