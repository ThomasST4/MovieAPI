$(document).ready(function() {
   var id = getUrlParameter("id");
   fill(id);
});


function getMovies(id){
   var apiKey = "92fee7e3";
   var response = null;
   $.ajax({
       url: "http://www.omdbapi.com/?apikey=" + apiKey + "&i=" + id,
       method: "GET",
       async: false,
       //contentType: "application/json",
       success: function(data) {
           response = data;
       },
       error: function() {
           alert("Error in retrieving database information")
       }
   });
   return response;
}


function fill(id){
   var registries = getMovies(id);
   addDetails(registries);
}


function addDetails(registry) {
    $("#detailsTable").append (
        $('<tbody class="main-row">').append(
            $('<tr>').append(
                $('<td>' + registry.Title + '</td>')
            ).append(
                $('<td>' + registry.Year + '</td>')
            ).append(
                $('<td>' + registry.Rated + '</td>')
            ).append(
                $('<td>' + registry.Released + '</td>')
            ).append(
                $('<td>' + registry.Runtime + '</td>')
            ).append(
                $('<td>' + registry.Genre + '</td>')
            ).append(
                $('<td>' + registry.Director + '</td>')
            ).append(
                $('<td>' + registry.Writer + '</td>')
            ).append(
                $('<td>' + registry.Actors + '</td>')
            ).append(
                $('<td>' + registry.Plot + '</td>')
            ).append(
                $('<td>' + registry.Language + '</td>')
            ).append(
                $('<td>' + registry.Country + '</td>')
            ).append(
                $('<td>' + registry.Awards + '</td>')
            ).append(
                $('<td>' + registry.Metascore + '</td>')
            ).append(
                $('<td>' + registry.imdbRating + '</td>')
            ).append(
                $('<td>' + registry.imdbID + '</td>')
            ).append(
                $('<td>' + registry.Type + '</td>')
            ).append(
                $('<td>' + registry.BoxOffice + '</td>')
            ).append(
                $('<td>' + registry.Website + '</td>')
            ).append(
                $('<td>' + registry.Response + '</td>')
            ).append(
                $('<td>' + registry.DVD + '</td>')
            ).append(
                $('<img src="'+ registry.Poster +'" width="100" height="100"></img>')
            )
        )
    )
}