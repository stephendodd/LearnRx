/*
 Exercise 6: Filtering Array
    Filtering elements from an array is a very common operation.
    To Filter an array, we apply a test to each item in the array,
     and collect items which pass the test into a new array.
 */
function exercise (superHeroes) {
    let flyableHero = [];
    /*
     Use forEach function to select every hero with the power Flight.
     Array.prototype.includes can return true if the array contains the item.
     Example: ['a','b','c'].includes('b') is true
     */
     /*flyableHero = superHeroes.map(hero => {

           if (hero.superPower.includes("Flight")) {
             return {
               id: hero.id,
               name: hero.name,
               identity: hero.identity,
               superPower: hero.superPower
             }
           } else {
              continue;
           }
         });
         console.log("actual" + flyableHero);*/

         superHeroes.forEach(hero => {
           if (hero.superPower.includes("Flight")) {
             flyableHero.push(hero);
           }
         })

    return flyableHero;
}

export default exercise;
