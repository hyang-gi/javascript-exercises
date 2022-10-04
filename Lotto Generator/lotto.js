var allNos = [];

function addNos() {
    for (i = 1; i <= 47; i++) {
        allNos.push(i);
    }
    console.log("Lotto Numbers", allNos);
}


function lottoGenerator() {
    var lottoNos = [];
    addNos();
    console.log("Random lotto generator");

    for (var i = 0; i < 6; i++) {

        const randomIndex = Math.floor(Math.random() * allNos.length);

        var randomNo = allNos[randomIndex];
        lottoNos.push(randomNo);

        allNos.splice(randomIndex, 1);

        //console.log(allNos);
    }
    const bonusIndex = Math.floor(Math.random() * allNos.length);

    var bonusNo = allNos[bonusIndex];

    allNos.splice(bonusIndex, 1);

    lottoNos.sort((a, b) => a - b);
    document.getElementById("displayNums").innerHTML = lottoNos;
    document.getElementById("displayBonus").innerHTML = bonusNo;

}