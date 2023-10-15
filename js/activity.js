
$(document).ready(function() {
    // Get all the cells that are selectable
    var selectableCells = $("tbody td:not(.not-selectable)");

    // Add click event handler to each selectable cell
    selectableCells.click(function() {
        // Toggle the 'selected' class on click
        $(this).toggleClass("selected");
    });
});

    if($(this).hasClass("tdhighlight")) {
        $('#displaySelected').css("visibility","visible");
        $('#displaySelected').css("margin-top","2em");
        $('#result').append("<p>"+content+"</p>");
    } else {
        $('#result p:contains('+content+')').remove();
        if ($('#result').has('p').length == false) {
            $('#displaySelected').css("visibility","hidden");
            $('#displaySelected').css("margin-top","0");
        }
    }
