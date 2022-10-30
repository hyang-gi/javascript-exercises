$(document).ready(function() { 
    console.log("works!");
    $.ajax({
        url: "mock_data.json",
        success: function(data) {
            //console.log(data);
            renderDataInTheTable(data);
        }
    });

    function renderDataInTheTable(data) {
        const mytable = document.getElementById("html-data-table");
        var newData = data.map(function (item) {
            return {
                name: `${item.first_name} ${item.last_name}`,
                high_score: item.high_score,
            }
        });
        newData.map(row => {
            let newRow = document.createElement("tr"); // new row is created
            Object.values(row).map((value) => {
                //console.log(value);
                let cell = document.createElement("td"); // new data for the row is added
                cell.innerText = value;
                newRow.appendChild(cell);
            })
            mytable.appendChild(newRow);
        });
    }

});