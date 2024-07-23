$("#searchButton").bind("click", initiateSearch);

function initiateSearch() {
    var searchTerm = $("#searchInput").val();
    var url = "list.html?";
    url += "search=" + searchTerm;
    window.location = url;
};