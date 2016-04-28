/*
 Exercise 11: Use map and contactAll to project and flatten then heroes from 2 worlds to name array
 */
function exercise (superHeroes) {
    let allHeroNames = [];
    /*
     Add your code here
     */

     allHeroNames = superHeroes.forEach(heroWorld => {
       //console.log(heroWorld);
       heroWorld.heroes.forEach(hero => {
         return allHeroNames.push(hero);
         //console.log(hero);
       });
     }).map( hero => {
       return hero.name;
     });

     /*allHeroNames = allHeroNames.map(hero => {
       return hero.name;
     });*/

    return allHeroNames;
}

export default exercise;
