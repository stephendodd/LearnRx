import _ from 'lodash'

Array.prototype.contactAll = function() {
    return _.flatten(this);
};

Array.prototype.contactMap = function(projectionFunctionReturnsArray) {
    return _.flatMap(this, projectionFunctionReturnsArray);
};

Array.prototype.reduce = function(accumulator, initValue) {
    return [_.reduce(this, accumulator, initValue)];
};

Array.zip = function(leftArray, rightArray, combiner) {
    var length = Math.min(leftArray.length, rightArray.length);
    return _.zipWith(_.slice(leftArray, 0, length), _.slice(rightArray, 0, length), combiner);
};
