import _ from 'lodash'

Array.prototype.contactAll = function() {
    return _.flatten(this);
};
