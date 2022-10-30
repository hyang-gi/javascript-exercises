$(document).ready(function() { 
    console.log("works!");
    $.ajax({
        url: "mock_data.json",
        success: function(data) {
            console.log(data);
            renderDataInTheTable(data);
        }
    });

    function renderDataInTheTable(data) {
        const mytable = document.getElementById("html-data-table");
        data.forEach(row => {
            let newRow = document.createElement("tr");
            Object.values(row).forEach((value) => {
                let cell = document.createElement("td");
                cell.innerText = value;
                newRow.appendChild(cell);
            })
            mytable.appendChild(newRow);
        });
    }

});