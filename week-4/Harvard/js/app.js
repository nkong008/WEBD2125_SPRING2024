"use strict";

// const form = document.getElementById("musuemform");


$("#submit").on('click', function (event) {

    event.preventDefault();
    let search = $("#search").val().trim();
    console.log(search);

    // custom function
    runSearch(search);
    document.getElementById("musuemform").reset();

});

function runSearch(searches) {
    // Find all of the objects that are paintings and have the word "rabbit" in the title


    // let classifications = ["Paintings", ""];

    let apiEndpointBaseURL = "https://api.harvardartmuseums.org/object";
    let queryString = $.param({
        apikey: "7e60e0d0-aa0e-441d-82d0-92543961fc4c",
        // title: "rabbit",
        title: searches,
        classification: "Paintings"
    });

    $.getJSON(apiEndpointBaseURL + "?" + queryString, function (data) {
        console.log(data.records);

        let output = '<ul>';
        for(let i = 0; i < data.records.length; i++) {
            let newArt = data.records[i].primaryimageurl;
            output += "<li>";
            output += '<img src="' + newArt + '" alt="#">';
            output += "</li>";

        }
        output += "</ul>";
        $("#harvard").html(output);


    });
    form.reset();

}