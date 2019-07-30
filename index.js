// let dataTable = [];
function showDataTable(dataTable) {
  document.getElementById("littleContainer").innerHTML = dataTable
    .map((dataTable, index) => {
      return `
      <tr class="grid-container">
           <td>${dataTable.Order}</td>
           <td>${dataTable.Buyer}</td>
           <td>${dataTable.Store}</td>
           <td>${dataTable.Account}</td>
           <td>${dataTable["Checkout Date"]}</td>
           <td>${dataTable["In-Hands Date"]}</td>
           </tr>
       `;
    })
    .join(" ");
}

showDataTable(dataTable);
