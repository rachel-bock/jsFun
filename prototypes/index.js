const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { books } = require('./datasets/books');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');


// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(pets) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

        /* CODE GOES HERE */
    const orangePets = pets.filter((pet)=> pet.color === 'orange');

    const orangePetNames = orangePets.map((pet)=> pet.name);

    return orangePetNames;
    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge(pets) {
    // Sort the kitties by their age

    let sortedPets = pets.sort((a, b) => b.age - a.age);
    return sortedPets;

    // Annotation:
    // Based on the test file, I am sorting the kitties by age.  Using the sort 
    // method will give me the information I need to organize the kitties by age.
  },

  growUp(pets) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    let output = pets.map(pet => {
      pet.age += 2 
      return {
        name: pet.name,
        age: pet.age, 
        color: pet.color
      }
    });
    return output;    
    /* Because I want to add 2 to the age property, I will use the map iterator method 
    */
  }
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(clubs) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    let output = clubs.reduce((acc, club) => {
      club.members.forEach((member) => {
        if (!acc[member]) {
          acc[member] = [];
        }
        acc[member].push(club.club);
        
      });
      return acc;
    }, {});
  
    return output;
    // Annotation:
    // The input will be an array of objects where the objects contain the club
    // and an array of members.
    // The output will be an object with keys that are the names of the club members
    // with the value of an array with the name of the clubs for the member.
    // I want to use reduce to convert the array to an object.
    // For each club, I want to add the club to an array of clubs for each member.
    }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    let output = mods.map((mod) => {
      let element = {};
      element.mod = mod.mod;
      element.studentsPerInstructor = mod.students / mod.instructors;
      return element;
    });
  
    return output;
    // Annotation:
    /* For each mod, we want to make a new key value pair that
        consists of the studentsPerInstructor.  Because I am 
        going to return an array that is the same length as
        the original array, I will use the map iterator method.
    */
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const cakesInStock = cakes.map((cake) => {
      let e = {};
      e.flavor = cake.cakeFlavor;
      e.inStock = cake.inStock;
      return e;
    });
    
    return cakesInStock;

    // Annotation:
    // I want to return an array of objects that includes the original information
    // received in the dataset. The input I receive is an array of cake objects
    // including keys of cakeFlavor and inStock among other keys.  We want to make
    // an array to output that contains mini-cake objects that contain only the 
    // flavor and amount in stock.  For this purpose, I will use map to create 
    // an array of the same length with objects containing only the flavor and 
    // inStock properties of the original cake element.
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    let filterCakes = cakes.filter(cake => cake.inStock !== 0);
    return filterCakes;
    
    // Annotation:
    /*
    I want to return an array of objects that includes cake objects where the 
    inStock property is not equal to 0.  
    The input array will be equal to or longer than the output array. For this 
    purpose, I will use the filter method to filter cakes that are not inStock.
    */
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    let total = cakes.reduce((acc, cake) => {
      acc += cake.inStock;

      return acc;
    }, 0);

    return total;
    // Annotation:
    /* The input is an array of objects with cake details.  I want a single number
    as an output.  As such, I will use the reduce method.
    */
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    let toppings = [];
    cakes.forEach((cake) => {
      cake.toppings.forEach((topping) => {
        if (!toppings.includes(topping)) {
          toppings.push(topping);
        }
      });
    });
    
    return toppings;
  
  /* 
  Input: Array of objects containing an array of toppings.
  Output: Array of toppings.
  
  */

  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const tops = [];
    let ourCakes = cakes.forEach((cake) => {
      cake.toppings.forEach((topping)=> {
        tops.push(topping)
      });
    });

    let output = tops.reduce((acc, t) => {
      if(acc[t]) {
        acc[t] += 1;
      } else {
        acc[t] = 1;
      }

      return acc;
    }, {});

    return output;

    // Annotation:
    // In order to get an object where the keys are each topping and the values
    // are the amount of that topping to be bought, I need a list of all toppings
    // and a count of the number of times the topping appears in the list.
    // In other words, for each cake, I will iterate over the array of toppings
    // to extract the topping to be saved into another array that will be our
    // list of toppings.  Once I have the list of toppings, I will count the 
    // number of times that element appears in the list of toppings.
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    let output =  classrooms.filter(classs => classs.program === 'FE');
    return output;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    let feCap = classrooms.reduce((acc, classs) => {
      if (classs.program === 'FE') {
        acc += classs.capacity;
      } 
      return acc;
    }, 0);
    let beCap = classrooms.reduce((acc, classs)=> {
      if (classs.program === 'BE') {
        acc += classs.capacity;
      } 
      return acc;
    }, 0);
  
    return { 
      feCapacity: feCap,
      beCapacity: beCap
    }  

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    classrooms.sort((a, b) => a.capacity - b.capacity);
    return classrooms;  

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    let noCrime = books.filter(book => book.genre !== 'True Crime');
    let noViolence = noCrime.filter(book => book.genre !== 'Horror');
    let output = [];
    noViolence.forEach(book => output.push(book.title));
    return output;
    /*
    Input: Array with book objects including keys of title, author, genre, 
    and published date.
    Desired Output: An array with strings that are the title of the books
    that are not 'Horror' or 'True Crime' genres.
    Need to create an array that is filtered 
    */
  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    let output = books.filter(book => book.published > 1990).map(book => {
      let e = {};
      e.title = book.title;
      e.year = book.published;
      return e;
    });

    return output;

    /* Annotation:
    Input is the books array with book objects.  Output is the array of book objects where 
    the book has a year that ends in 90 or greater.  
    I want to filter the array to get books where the year is greater than 1990.
    Then I want to map over the books array to get all books with only the title and the year.
    */
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    let output = [];
    let avgTemps = weather.map(place => {
      avgTemp = (place.temperature.high + place.temperature.low)/2
      output.push(avgTemp);
    });

    return output;
    // Annotation:
    /*
    The input is an array of locations that includes a property with a key of temperature 
    where the value of the temperature key is an object with the high and low temperatures 
    in the location.

    The output we want is an array of all the average temperatures.  I want to create an array
    to output.  I also want to calculate the average temperature for each location.  To get 
    an array that matches the length of the original array, I will use map to transform the 
    array elements.
    */
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    let output = [];

    let temporary = weather.filter(place => (place.type === 'sunny' || place.type === 'mostly sunny'));

    temporary.forEach(place => {
      output.push(`${place.location} is ${place.type}.`);
    });

    return output;

    // Annotation:
    /* I want to return an array of sentences of places that are sunny or mostly sunny.
    The input that I have is an array of objects that contains the location and type of weather.
    I want to filter the input array based on the weather type and create a sentence that can be
    put into the output array.*/
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    let output = weather.sort((a, b) => b.humidity - a.humidity);  

    return output[0];
    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    let output = {
      parksToVisit: [],
      parksVisited: [],
    };
    
    nationalParks.forEach( park => {
      if (park.visited) {
        output.parksVisited.push(park.name);
      } else {
        output.parksToVisit.push(park.name);
      };
    });

    return output;
    // Annotation:
    /* 
    Input array is a list of national parks objects that include keys for name, visited, 
    location and activities.  Output includes an object with two arrays.  One array in the output
    object will be for the parks visited while the other is a list of parks to visit.
    */
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

    let output = nationalParks.reduce((acc, park) => {
      let temp = {};
      temp[park.location] = park.name;
      acc.push(temp);
      return acc;
    }, []);

    return output;
    // Annotation:
    /* 
    Input array is an array of park objects.  Output array is an array of objects where the 
    key is the location of the park object and the value is the name of the park object.
    */
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    let output = nationalParks.reduce((acc, park) => {
      park.activities.forEach((toDo) => {
        if (!acc.includes(toDo)) {
          acc.push(toDo);
        }
      });      

      return acc;
    }, []);

    return output;
    // Annotation:
    /*
    If the activity is not already included in the output array, then include it.
    Input is an array of parks objects with an array of activities.  
    
    */
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    let output = breweries.reduce((acc, brewery) => {
      brewery.beers.forEach((beer) => {
        acc += 1;
      });
      return acc;
    }, 0);

    return output;
    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    let output = breweries.map((brewery) => {
      let beers = brewery.beers.reduce((acc, beer) => {
        acc += 1;
        return acc;
      }, 0);
      return {
        name: brewery.name,
        beerCount: beers
      }
    });

    return output;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    let output = [];
    breweries.forEach(brewery => {
      brewery.beers.forEach(beer => {
        output.push(beer);
      });
    });

    output.sort((a, b) => b.abv - a.abv);

    return output[0];
    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    let output = [];

    instructors.forEach(teacher => {
      let temp = cohorts.find(cohort => cohort.module === teacher.module );

      output.push({
        name: teacher.name,
        studentCount: temp.studentCount
      });
    });

    return output;
    // Annotation:
    /* 
    For the input, I have two arrays of objects.
    I need to pull the instructor's name from the instructors array and the studentCount from the cohorts array.
    */ 
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 15,
    // cohort1804: 7, 
    // cohort1803: 10, 
    // cohort1801: 9
    // }

    let output = {};

    cohorts.forEach((cohort) => {
      let temp = instructors.reduce((acc, instructor) => {
        if(cohort.module === instructor.module) {
          acc += 1;
        }
        return acc;
      }, 0);
      output['cohort'+cohort.cohort] = cohort.studentCount / temp;
    });

    return output;
    // Annotation:
    /*
       I want to get the cohort number from the
       cohorts array along with the number of
       students per teacher in each cohort.  The
       number of students per teacher in each cohort
       will need to be calculated.
    */
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    let output = {};
    instructors.forEach(instructor => {
      instructor.teaches.forEach( topic => {
        cohorts.forEach(cohort => {
          if(!output[instructor.name]) {
            output[instructor.name] = [];
          };
          if (cohort.curriculum.includes(topic) && !output[instructor.name].includes(cohort.module)) {
              output[instructor.name].push(cohort.module);
              output[instructor.name].sort();
          }
        });
      });
    });
      
    return output;

    // Annotation:
    // Input teacher from Instructors array.
    // output is an object => reduce
    // for each instructor, I need to compare what
    // they teach to the curriculum and return the 
    // module number that includes that curriculum.
    // 

  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    let output = cohorts.reduce((acc, cohort) => {
      cohort.curriculum.forEach((topic) => {
        if (!acc[topic]) {
          acc[topic] = [];
        }
        instructors.forEach(teacher => {
          if (teacher.teaches.includes(topic) && !acc[topic].includes(teacher.name)){
            acc[topic].push(teacher.name);
          }
        });
      });
      return acc;      
    }, {});


    return output;
    // Annotation:
    /* 
    Input for this prompt includes the instructors array of objects and the cohorts array of objects.  The desired output is an object where the keys are the curriculum topic and the values are arrays of instructor names.
    */
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
