"use strict";

$(function(){

    // creating variables
    // const form = $("#movieform");
    // const search = $("#search");
    // const movies = $("#movies");

    const form = document.getElementById("movieform");
    const search = document.getElementById("search");
    const movies = document.getElementById("movies");

    // console.log(form + "\n" + search + "\n" + movies);

    // const API = "http://www.omdbapi.com/?s=star trek&apikey=b74bf6db";
    const url = "http://www.omdbapi.com/?s=";
    const apiKey = "&apikey=b74bf6db";


    let httpRequest;
    // makeRequest();
    form.addEventListener('submit', makeRequest);

    function makeRequest(e) {

        e.preventDefault();
        let query = search.value.trim()

        if(window.XMLHttpRequest) {
            httpRequest = new XMLHttpRequest();
        }
        else {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }

        httpRequest.onreadystatechange = responseMethod;
        // httpRequest.open('GET', API);
        httpRequest.open('GET', url + query + apiKey);
        httpRequest.send();
        form.reset();
        
    }
    
    function responseMethod( ) {
        if(httpRequest.readyState === 4) {
            if(httpRequest.status === 200) {
                updateUISuccess(httpRequest.responseText);
            }
            else {
                updateUIError();
            }
        }
    }
    function updateUISuccess(test) {
        let response = JSON.parse(test);
        console.log(response);
        let output = "<ul>";
        for(let i = 0; i < response.Search.length; i++) {
            output += "<li>";
            output += "<h2>" + response.Search[i].Title + "</h2>"
            output += '<img src="' + response.Search[i].Poster + '" alt="' + response.Search[i].Title + '">';
            output += '<h3>' +response.Search[i].Year + '</h3>';
            output += '</li>';
        }
        output += '</ul>';
        $(movies).html(output);
    }
    function updateUIError() {
        movies.className = "hidden";

    }

  });