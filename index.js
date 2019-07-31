// let dataTable = [];
function showDataTable(dataTable) {
  document.getElementById("littleContainer").innerHTML = dataTable
    .map((dataTable, index) => {
      let order = dataTable.Order;

      if (order === "TOTAL $") {
        return `
        <tr class="grid-container">
          <td>${dataTable.Order}</td>
          <td>${dataTable.Buyer}</td>
          <td>${dataTable.Store}</td>
           <td>${dataTable.Account}</td>
           <td>${dataTable["Checkout Date"]}</td>
           <td>${dataTable["In-Hands Date"]}</td>
           <td>${dataTable["# Line Items"]}</td>
           <td>${dataTable["Order $"]}</td>
           <td>${dataTable.Status}</td>
           <td>${dataTable["Order #"]}</td>
           <td></td>
          </tr>
          `;
      } else
        return `
      <tr class="grid-container">
           <td>${dataTable.Order}</td>
           <td>${dataTable.Buyer}</td>
           <td>${dataTable.Store}</td>
           <td>${dataTable.Account}</td>
           <td>${dataTable["Checkout Date"]}</td>
           <td>${dataTable["In-Hands Date"]}</td>
           <td>${dataTable["# Line Items"]}</td>
           <td>${dataTable["Order $"]}</td>
           <td>${dataTable.Status}</td>
           <td>${dataTable["Order #"]}</td>
           <td><input type="checkbox"></td>

           </tr>
       `;
    })
    .join(" ");
}

showDataTable(dataTable);
