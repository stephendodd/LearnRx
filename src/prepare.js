import _ from 'lodash'

Array.prototype.contactAll = function() {
    return _.flatten(this);
};

Array.prototype.contactMap = function(projectionFunctionReturnsArray) {
    return _.flatMap(this, projectionFunctionReturnsArray);
};
