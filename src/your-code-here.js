/*
 Exercise 8: Query Data by Chaining Method Calls
    Chain filter and map to collect the {name, identity} pairs of hero that have Power Martial arts
 */
function exercise (superHeroes) {
    let martialArtsMaster;

    /*
     Add your code here, chain the filter and map function
     */

     martialArtsMaster = superHeroes.filter(hero => {
       return hero.superPower.includes("Martial arts");
     }).map(hero => {
       return {
        "name": hero.name,
        "identity": hero.identity
        }
      });
    console.log(martialArtsMaster);
    return martialArtsMaster;
}

export default exercise;
