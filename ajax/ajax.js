$(document).ready(function () {
    console.log("Works!");
    $.ajax({
        url: "mock_data.json",
        success: function (data) {
            console.log({ data });
            sortedHighScores(data);
            changeContent(data);
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
    sortedValues = highscores.sort((a, b) => b - a);
    console.log({ highscores, sortedValues });
    const list = document.getElementById("sorted");
    list.innerHTML = sortedValues.map(i => `<li>${i}</li>`).join(''); // join is added to remove the default comma;
}

function changeContent(data) {
    var names = data.map(el => el.first_name);
    var scores = data.map(el => el.high_score);
    const replaced = names.map(function (item) { return item == 'Stinky' ? 'Stan' : item; });


    //foreach isn't recommended to modify arrays as it can cause other issues
    scores.forEach((element, index) => {
        return element <= 20000 ? scores[index] = 0 : element;
    });

    console.log({ replaced, scores })
}