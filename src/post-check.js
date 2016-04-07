import _ from 'lodash'

function postCheck() {
    var afterContactAll = [[1,2], [3,4], [5,6]].contactAll();
    return `[[1,2],[3,4],[5,6]].contactAll() is [${afterContactAll}]`;
}

export default postCheck;
