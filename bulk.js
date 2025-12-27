{\rtf1\ansi\ansicpg1252\cocoartf2865
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cspthree\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx560\tx1120\tx1680\tx2240\tx2800\tx3360\tx3920\tx4480\tx5040\tx5600\tx6160\tx6720\pardirnatural\partightenfactor0

\f0\fs28 \cf2 const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyPat4Q7LTdv3985ABPYVeMMeEnVUbsFCIBrzhYOmz2EHcr41JFY3W7GA3JM0cslAaN/exec';\
\
function bulkPrint() \{\
  const params = new URLSearchParams(\{\
    action: "bulkPrint",\
    status: document.getElementById("status").value,\
    from: document.getElementById("from").value,\
    to: document.getElementById("to").value,\
    woFrom: document.getElementById("woFrom").value,\
    woTo: document.getElementById("woTo").value\
  \});\
\
  window.open(`$\{SCRIPT_URL\}?$\{params.toString()\}`);\
\}}