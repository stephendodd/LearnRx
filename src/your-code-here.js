/*
 Exercise 11: Use map and contactAll to project and flatten then heroes from 2 worlds to name array
 */
function exercise (superHeroes) {
    let allHeroNames = [];
    /*
     Add your code here
     */

    allHeroNames = superHeroes.map(world => {
      return world.heroes
    }).concatAll().map(hero => {
      return hero.name;
    })

    return allHeroNames;

    //Old method of doing this
    //  superHeroes.forEach(heroWorld => {
    //    heroWorld.heroes.forEach(hero => {
    //      return allHeroNames.push(hero);
    //    });
    //  });
    //  allHeroNames = allHeroNames.map(hero => {
    //    return hero.name;
    //  });

}

export default exercise;
