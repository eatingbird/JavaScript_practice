/*Imagine you have a movie collection, and you want to write code that returns your review for each one. Here are the movies and your reviews:

"Toy Story 2" - "Great story. Mean prospector."
"Finding Nemo" - "Cool animation, and funny turtles."
"The Lion King" - "Great songs."
Write a function named getReview that takes in a movie name and returns
its review based on the information above. If given a movie name not
found just return "I don't know!". Use a structure learned in an earlier
lesson (NOT if/else statements) to write this function.
*/

var getReview = function (movie) {
    switch (movie){
        case "Toy Story 2":
            return("Great story. Mean prospector.");
            break;
        case "Finding Nemo":
            return("Cool animation, and funny turtles.");
            break;
        case "The Lion King":
            return("Great songs.");
            break;
        default:
            return("I don't know!");
    };
};
