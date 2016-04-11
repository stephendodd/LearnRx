import _ from 'lodash'

function postCheck() {
    let afterContactMap = [1, 2].contactMap(x => [x, x]);
    return `[1,2].contactMap(x => [x, x]) is [${afterContactMap}]`;
}

export default postCheck;
