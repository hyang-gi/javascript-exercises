$(document).ready(function () {
    //   $('#idm').click(function() {
    //         $('#target').load("ex01_1.html");
    //     });
    //     $('#duration').click(function() {
    //         $('#target').load("ex01_2.html");
    //     });
    //     $('#outcome').click(function() {
    //         $('#target').load("ex01_3.html");
    //     });


    $('#btn').on('click', function (event) {
        const option = $("#option").val();
        console.log(typeof option);

        if ($("#option").val() == 1) {
            $("#target").load("ex01_1.html");
            console.log("First option");
        }
        else if ($("#option").val() == 2) {
            $("#target").load("ex01_2.html");
        }
        else if ($("#option").val() == 3) {
            $("#target").load("ex01_3.html");
        }
        else {
            console.log("Invalid Input");
        }
    });

});



