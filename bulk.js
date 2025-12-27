/* =========================================
   ZPRINT v2.6 – BULK.JS (CLEAN & SAFE)
========================================= */

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyPat4Q7LTdv3985ABPYVeMMeEnVUbsFCIBrzhYOmz2EHcr41JFY3W7GA3JM0cslAaN/exec?action=searchWO&term=WO';

console.log("bulk.js loaded");
console.log("SCRIPT_URL:", SCRIPT_URL);

function bulkPrint() {
  const status = document.getElementById("status").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const woFrom = document.getElementById("woFrom").value;
  const woTo = document.getElementById("woTo").value;

  const params = new URLSearchParams({
    action: "bulkPrint",
    status: status,
    from: from,
    to: to,
    woFrom: woFrom,
    woTo: woTo
  });

  const url = SCRIPT_URL + "?" + params.toString();

  console.log("Bulk print URL:", url);

  window.open(url, "_blank");
}
