/*
 Exercise 9: Flatten a Tree
    Using 2 nested forEach loops to collect the hero names from the 2 worlds.
 */
function exercise (superHeroes) {
    let allHeroNames = [];
    /*
     Add your code here
     */

     superHeroes.forEach(heroType => {
       heroType.heroes.forEach(hero => {
         return allHeroNames.push(hero.name);
       });
     });

     console.log(allHeroNames);

    return allHeroNames;
}

export default exercise;
