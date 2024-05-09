/*The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties: title, which is a String representing the title of the movie studio, which is a String representing the studio that made the movie rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/

class Movie{
    constructor(title, studio, rating = "PG"){
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }

    var m1 = new Movie("Casino Royale", "Eon Productions", "PG13");
    var m2 = new Movie("The Conjuring", "New Line Cinema")
    
    console.log(m1.title);
    console.log(m1.studio);
    console.log(m1.rating);
    
  //For m2
    console.log(m2.rating);