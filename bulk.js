const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyPat4Q7LTdv3985ABPYVeMMeEnVUbsFCIBrzhYOmz2EHcr41JFY3W7GA3JM0cslAaN/exec';

function bulkPrint() {
  const status = document.getElementById("status").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const woFrom = document.getElementById("woFrom").value;
  const woTo = document.getElementById("woTo").value;

  const params = new URLSearchParams({
    action: "bulkPrint",
    status,
    from,
    to,
    woFrom,
    woTo
  });

  const url = SCRIPT_URL + "?" + params.toString();

  // ✅ OPEN instead of fetch (NO CORS issues)
  window.open(url, "_blank");
}
