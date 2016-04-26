/*
 Exercise 25: Take 1
 Batman have to upgrade the BatPlane this time, no matter how many villains appear, he can only fight with one.
 Print his name.
 */
function exercise (Observable, batmanVillains, console) {
    const villainsAppearStream = Observable.fromEvent(batmanVillains, 'appear');
    /*
     Add your code here.
      Try to use 'villainsAppear.take(1)' to listen for only 1 villain appear from the stream.
      'take' will return a new stream which is an array-like object.
     */
}

export default exercise;
