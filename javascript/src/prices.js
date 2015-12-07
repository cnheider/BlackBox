'use strict';

import path from 'path';

import fileUtils from './fileUtils.js';

const DATA_DIRECTORY = path.join(__dirname, 'data');

export default {
    load: function () {
        return fileUtils.getJSON(DATA_DIRECTORY);
    }
};
