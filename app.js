// import the data from the data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");  //declare a variable "tbodt" and use d3.select to tell JS to look for the <tbody> tags in HTML

function buildTable(data) {
    tbody.html(" ");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }

        );
    });
};

