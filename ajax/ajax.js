$(document).ready(function() {
    console.log("Works!");
    $.ajax({
        url: "mock_data.json",
        success: function(data) {
            console.log({data});
            sortedHighScores(data);
        }
    })
});

function sortedHighScores(data) {
    var highscores, sortedValues = [];
    // using for loop
    // for(var i = 0; i<data.length; i++) {
    //     highscores.push(data[i].high_score);
    // } 

    //using map function
    highscores = data.map(element => element.high_score);
    sortedValues = highscores.sort((a,b) => b-a);
    console.log({highscores, sortedValues});
    const list = document.getElementById("sorted");
    list.innerHTML = sortedValues.map(i => `<li>${i}</li>`).join(''); // join is added to remove the default comma;
}