$(document).ready(function(){
    document.querySelectorAll(".delete-burger").forEach(function(element){
        element.addEventListener("click", function(event){
            console.log(event);
            $.ajax("/api/burger/" + element.dataset.id, {
                type: "PUT",
                data: {
                    devoured: 1
                }
            }).then(
                function(){
                    $("#eaten").append(`<li>${element.dataset.name}</li>`);
                    element.parentNode.parentNode.removeChild(element.parentNode);
                }
            );
            
        });
    });



    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#ca").val().trim(),
         
        };
    
        // Send the POST request.
        $.ajax("/api/burger", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new flavor");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});
