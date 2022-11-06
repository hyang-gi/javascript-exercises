$(document).ready(function () {
    console.log("works!");
    var newData = [];
    const mytable = document.querySelector("#html-data-table tbody");
    const headerName = document.getElementById("name");
    const headerScore = document.getElementById("highscore");

    $.ajax({
        url: "mock_data.json",
        success: function (data) {
            //console.log(data);
            newData = getData(data);
            //console.log(newData);
            renderDataInTheTable(newData);
        }
    });

    var order = "asc"; var sorted;
    //var span = $("#name");
    headerName.addEventListener('click', (e) => {
        console.log("name button click!")
        if (order == "asc") {
            sorted = newData.sort((a, b) => a.name.localeCompare(b.name));
           // span.toggleClass('fa-chevron-down fa-chevron-up');
            order = "dsc";
        }
        else {
            sorted = newData.sort((a, b) => b.name.localeCompare(a.name));
         //   span.toggleClass('fa-chevron-up fa-chevron-down');
            order = "asc";
        }
        renderDataInTheTable(sorted);
    })


    headerScore.addEventListener('click', (e) => {
        console.log("score button click!")
        if (order == "asc") {
            sorted = newData.sort((a, b) => a.high_score - b.high_score);
          //  span.toggleClass('fa-chevron-down fa-chevron-up');
            order = "dsc";
        }
        else {
            sorted = newData.sort((a, b) => b.high_score - a.high_score);
          //  span.toggleClass('fa-chevron-up fa-chevron-down');
            order = "asc";
        }
        renderDataInTheTable(sorted);
    })

    function getData(data) {
        const newData = data.map(function (item) {
            return {
                name: `${item.first_name} ${item.last_name}`,
                high_score: item.high_score,
            }
        });
        return newData;
    }

    function renderDataInTheTable(data) {
        mytable.innerHTML = '';
        data.map(row => {
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