/*
 Exercise 13: Implement contactMap
    map and contactAll are very commonly chained together.
    [1,2].contactMap(x => [x, x]]) is [1,1,2,2]


    This contactMap function is also known as flatMap
 */
function exercise () {
  Array.prototype.contactMap = function(projectionFunctionReturnArray) {
    let sourceArray = this,
      result = [];
      result = sourceArray.map(arrayElement => {
        return [arrayElement, arrayElement]
      })

    return result;
  }
}

export default exercise;
