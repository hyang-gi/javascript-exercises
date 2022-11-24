$(document).ready(function () {
    console.log("works");
    let gamer = { name: "John", highscore: 349283 };

    window.localStorage.setItem('gamer',
        JSON.stringify(gamer));
    const getData = JSON.parse(window.localStorage.getItem('gamer'));
    console.log(getData);
    const val = getData.highscore;
    console.log(val);
    $("p").append(val);

    var date = new Date();

    console.log(date)

    document.cookie = "reader=1; SameSite=None; Secure; expires=";
}); 