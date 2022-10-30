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

    headerName.addEventListener('click', (e) => {
        console.log("name button click!")
        const sorted = newData.sort((a, b) => a.name.localeCompare(b.name));
        //console.log(sorted);
        renderDataInTheTable(sorted);
    })


    headerScore.addEventListener('click', (e) => {
        console.log("score button click!")
        const sorted = newData.sort((a, b) => a.high_score - b.high_score);
        //console.log(sorted);
        renderDataInTheTable(sorted)
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