/*
 Exercise 14: Use contactMap!
 Try to retrieve {name, identity, avatar} for every heroes.
 We only want the avatar with size 100*100.
 */
function exercise (superHeroes) {
    let heroesWithAvatar;
    /*
     Add your code here, use one or more contactMap, map, filter to project on the tree.
     Try to give me heroes like this:
     [{name:'Superman', identity: 'Clerk Kent', avatar: 'http://super-heroes.com/superman/medium.jpg'}, ...]
     */

     heroesWithAvatar = superHeroes.contactMap(world => {
       return world.heroes;
     }).contactMap(hero => {
       return hero.avatars.filter(avatar => {
         return avatar.w == 100
       }).contactMap(avatar => {
         return {
           "name":hero.name,
           "identity":hero.identity,
           "avatar":avatar.url
         }
       })
     })

    return heroesWithAvatar;
}

export default exercise;
