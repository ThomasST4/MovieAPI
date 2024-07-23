$(document).ready(function() {
    var searchTerm = getUrlParameter("search");
    fillList(searchTerm);
});

var id = GetRowId();

function fillList(searchTerm) {
    var registries = getMovies(searchTerm);
    for(var i = 0; registries.length > i; i++) {
        var id = i + 1;
        registries[i].id = id
        addRow(registries[i]);
    };
};

function getMovies(searchTerm) {
    var apiKey = "92fee7e3";
    var response = null;

    $.ajax({
        url: "http://www.omdbapi.com/?apikey=" + apiKey + "&s=" + searchTerm,
        method: "GET",
        async: false,
        //contentType: "application/json",
        success: function(data) {
            response = data.Search;
        },
        error: function(data) {
            alert("Unexpected error occured! makeRequest")
        }
    });
    
    return response;
};

$("#detailsButton").bind("click", initiatedetails);

function initiatedetails() {
    var url = "details.html?";
    url += "id=" + id;
    window.location = url;
};

function Open(id){
    var url ="details.html?id="+id;
    window.location = url;
}

function GetRowId(){
    var Table = $('#List');
    var count = Table.children().length;
    var id = count + 1;

    while(GetRow(id)[0] != null)
    {
        id++;
    } return id;
}

function GetRow(id){
    return $('#row-'+id);
}

function addRow(registry) {

    $("#movieTable").append (
        $('<tbody class="main-row" id="row-'+ id +'">').append(
            $('<tr>').append(
                $('<th id="row-id-'+ id +'">' + registry.id + '</th>')
            ).append(
                $('<td id="row-title-'+ id +'">' + registry.Title + '</td>')
            ).append(
                $('<td id="row-type-'+ id +'">' + registry.Type + '</td>')
            ).append(
                $('<td id="row-year-'+ id +'">' + registry.Year + '</td>')
            ).append(
                $('<td id="row-imdbid-'+ id +'">' + registry.imdbID + '</td>')
            ).append(
                $('<td><button id="row-details-'+ registry.imdbID +'" class="btn btn-outline-light" onclick="Open(\''+ registry.imdbID +'\')">Details</button></td>')
            )
        )
    )
};