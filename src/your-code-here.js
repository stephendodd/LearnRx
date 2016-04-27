/*
 Exercise 3: Project on an Array
    Select name and identity from the superHero array
 */
function exercise (superHeroes) {
    let heroWithIdentity = [];

    /*
    Add your code here, use forEach function to accumulate {name, identity} pairs from superHero
    Push the results into heroWithIdentity. Examples: heroWithIdentity.push(newHero);
     */

     superHeroes.forEach(hero =>{
       heroWithIdentity.push({
         name: hero.name,
         identity: hero.identity
       });
     });
     console.log(heroWithIdentity);

    return heroWithIdentity;
}

export default exercise;
