const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyPat4Q7LTdv3985ABPYVeMMeEnVUbsFCIBrzhYOmz2EHcr41JFY3W7GA3JM0cslAaN/exec';

console.log("bulk.js loaded");

function bulkPrint() {
  const params = new URLSearchParams({
    action: "bulkPrint",
    status: document.getElementById("status").value,
    from: document.getElementById("from").value,
    to: document.getElementById("to").value,
    woFrom: document.getElementById("woFrom").value,
    woTo: document.getElementById("woTo").value
  });

  fetch(SCRIPT_URL + "?" + params.toString())
    .then(r => r.json())
    .then(data => {
      if (!data.docUrl) {
        alert("No records found.");
        return;
      }
      window.open(data.docUrl, "_blank");
    })
    .catch(err => {
      console.error(err);
      alert("Bulk print failed.");
    });
}
