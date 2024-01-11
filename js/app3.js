let request;
if (window,XMLHttpRequest) {
    request = new XMLHttpRequest();
}
else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "artist_Data.xml");
request.onreadystatechange = function() {
    if((request.status === 200) && (request.readyState === 4)) {

        // console.log(request.responseXML);
        // console.log(request.responseXML.getElementsByTagName('artistName'));
        // let items = request.responseXML.getElementsByTagName('artistName');
        // console.log(items);
        // document.getElementById("artist").innerHTML = items[0].firstChild.nodeValue;

        getArtist(this);


    }
}
request.send();

function getArtist(aaa) {
    let i;
    let items = aaa.responseXML;

    // let artistList;
    let x = items.getElementsByTagName('artist');
    // let container = document.getElementById("container");
    let sections = document.getElementsByClassName("artist-sections");
    // console.log(container);
    console.log(x);

    for(i = 0; i < x.length; i++) {
        let artistList;
        artistList += "<section><h1>Artist: " + x[i].getElementsByTagName('artistName')[0].childNodes[0].nodeValue + "</h1></section>";
        sections[i].innerHTML = artistList;
    }
   

    
  


}
