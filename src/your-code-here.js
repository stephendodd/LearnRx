/*
 Exercise 5: User map to project an Array
    Select name and identity from the superHeroes array
 */
function exercise (superHeroes) {
    let heroWithIdentity;

    /*
     Add your code here,
     use Array.prototype.map function you just implemented to select {name, identity} pairs from superHeroes,
     and assign the result to heroWithIdentity;
     */

     heroWithIdentity = superHeroes.map(hero => {
       return {
         name: hero.name,
         identity: hero.identity
       }
     });

     console.log(heroWithIdentity);

    return heroWithIdentity;
}

export default exercise;
