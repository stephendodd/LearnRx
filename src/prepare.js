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
