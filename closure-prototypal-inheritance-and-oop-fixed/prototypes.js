//-----PROTOTYPES HOMEWORK-----//
//constructor function
const Movies = function (movieName, mainActor, releaseYear) {
    this.movieName = movieName, //they were in brackets because of my code formatter
    this.mainActor = mainActor,
    this.releaseYear = releaseYear;
};

//adding methods through prototype
Movies.prototype.movieAd = function () {
  return `${this.movieName} is an thrilling and action pact movie. Staring ${this.mainActor}. Don't miss, the movie will be out in ${this.releaseYear}.`;
};
Movies.prototype.movieAge = function () {
  return `${this.movieName} is already ${
    new Date().getFullYear() - this.releaseYear
  } years old.`;
};

//instance
const jackieChan = new Movies("Drunken Master", "Jackie Chan", 1978);

//console log to check if everything is working
console.log("PROTOTYPE PARENT: ", jackieChan );


//first child
const JackieChanMovie = function (movieName, releaseYear, origin) {
  Movies.call(this, movieName, "Jackie Chan", releaseYear);
  this.origin = origin;
};
Object.setPrototypeOf(JackieChanMovie.prototype, Movies.prototype);

//first child instance
const armorOfGod2= new JackieChanMovie(
  "Armour of God 2",
  1991,
  "Hong Kong"
);

//console logs to check if JackieChanMovie is working
console.log("PROTOTYPE FIRST CHILD: ", armorOfGod2);

//second child
const ActionMovie = function (movieName, mainActor, releaseYear) {
  Movies.call(this, movieName, mainActor, releaseYear );
  this.genre = 'action'
};
Object.setPrototypeOf(ActionMovie.prototype, Movies.prototype);

//second child instance
const bloodSport = new ActionMovie(
  "Blood Sport",
  "Jean-Claud Van Damme",
  1988
);

//console logs to check if ActionMovie is working
console.log("PROTOTYPE SECOND CHILD: ",  bloodSport);

