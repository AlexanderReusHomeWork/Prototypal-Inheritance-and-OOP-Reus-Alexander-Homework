//-----OOP HOMEWORK-----//
//parent class
class MoviesClass {
    constructor(movieName, mainActor, releaseYear) {
        this.movieName = movieName,
        this.mainActor = mainActor,
        this.releaseYear = releaseYear;
    }
    movieAd() {
      return `${this.movieName} is an thrilling and action pact movie. Staring ${this.mainActor}. Don't miss, the movie will be out in ${this.releaseYear}.`;
    }
    movieAge() {
      return `${this.movieName} is already ${
        new Date().getFullYear() - this.releaseYear
      } years old.`;
    }
  }
  
  //child class 1
  class SylvesterStalloneMovie extends MoviesClass {
    constructor(movieName, releaseYear, origin) {
      super(movieName, "Sylvester Stallone", releaseYear);
      this.origin = origin;
    }
  }
  
  //child class 2
  class ActionMovie extends MoviesClass {
    constructor(movieName, mainActor, releaseYear) {
      super(movieName, mainActor, releaseYear);
      this.genre = 'action';
    }
  }
  
  //parent class instances
  const predator = new MoviesClass("Predator", "Arnold Schwarzenegger", 1987);
 
  //child class 1 instance
  const cliffhanger = new SylvesterStalloneMovie(
    "Cliffhanger",
    1993,
    "USA"
  );
  
  //child class 2 instance
  const universalSoldier = new ActionMovie(
    "Universal Soldier",
    "Jean-Claud Van Damme",
    1992,
  );
  
  //checks for parent class
  console.log("PARENT CLASS: ", predator );
  
  //checks for child class 1 class
  console.log("FIRST CHILD CLASS: ", cliffhanger);

  //checks for child class 2 class
  console.log("SECOND CHILD CLASS: ", universalSoldier);
