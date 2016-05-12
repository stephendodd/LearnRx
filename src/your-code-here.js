/*
 Exercise 12: No index
    Try to retrieve {name, identity, avatar} for every heroes.
    We only want the avatar with size 100*100.
    AND YOU CANNOT USE INDEXERS, superHeroes[0] IS ILLEGAL! I will tell you why in the later exercises.
 */
function exercise (superHeroes) {
    let heroesWithAvatar;
    let heroesWithAvatars;
    let heroesWithAvatar2
    /*
     Add your code here, use one or more contactAll, map, filter to project on the tree.
     Try to give me heroes like this:
     [{name:'Superman', identity: 'Clerk Kent', avatar: 'http://super-heroes.com/superman/medium.jpg'}, ...]
     */
     heroesWithAvatar = superHeroes.map(world => {
       return world.heroes
     }).contactAll().map(hero => {
       return {
         "name": hero.name,
         "identity": hero.identity,
         "avatars": hero.avatars.contactAll().filter(avatar => {
           return avatar.w == 100;
         })
       }
     })



    //  heroesWithAvatars = superHeroes.map(world => {
    //    return world.heroes
    //  }).contactAll().map(hero => {
    //    return {
    //      hero.avatars
    //    }
    //  }).contactAll().filter(avatar => {
    //    return avatar.w == 100;
    //  })

     heroesWithAvatar2 = superHeroes.map(world => {
       return world.heroes;
     }).contactAll().map(hero => {
       return hero.avatars.contactAll().filter(avatar => {
         return avatar.w == 100
       }).map(avatar => {
         return {
           "name": hero.name,
           "identity": hero.identity,
           "avatar": avatar.url
         }
       })
     }).contactAll()

    //  heroesWithAvatar2 = heroesWithAvatar2.map(hero => {
    //    return hero.avatars.contactAll().filter(avatar => {
    //      return avatar.w == 100
    //    }).map(avatar => {
    //      return {
    //        "name": hero.name,
    //        "identity": hero.identity,
    //        "avatar": avatar.url
    //      }
    //    })
    //  }).contactAll()

     console.log(heroesWithAvatar2);




      //  return hero.avatars.filter(avatar => {
      //    console.log("avatar",avatar.w);
      //    return avatar.w == 100
      //  })


    //    .map(hero => {
    //    return {
    //      "name": hero.name
    //    }
    //  })
      //  return hero.avatars.filter(avatar => {
      //    avatar.w == 100
      //  })



    return heroesWithAvatar2;
}


export default exercise;
