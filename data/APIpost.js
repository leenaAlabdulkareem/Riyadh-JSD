$(document).ready(function () {
    $.get("https://tshd1111.herokuapp.com/api", function (data) {
        console.log(data);

    })

    $.post("https://tshd1111.herokuapp.com/api", {
        firstname: "leena",
        lastname: "alabdulkareem",
        email: "leena-101@hotmail.com"

    }, function (data) {
        console.log(data);

    })


})

