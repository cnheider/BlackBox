'use strict';

import path from 'path';
import fs from 'fs';

import Q from 'q';

function getFileList(options = { fullPath: false }) {
    return Q.nfcall(fs.readdir, options.directory).then(function (filenames) {
        if (options.extension) {
            filenames = filenames.filter(function (filename) {
                return filename.substr(-Math.abs(options.extension.length)) === options.extension;
            });
        }

        if (options.fullPath) {
            filenames = filenames.map(function (filename) {
                return path.join(options.directory, filename);
            });
        }

        return filenames;
    });
}

function loadFile(filepath, encoding = 'utf8') {
    return Q.nfcall(fs.readFile, filepath, encoding);
}

export default {
        getFileList: getFileList,
        getJSON: function (directory) {
            return getFileList({directory, extension: '.json', fullPath: true})
                .then(function (filepaths) {
                    return Q.all(filepaths.map(function (filepath) {
                        return loadFile(filepath, 'utf8');
                    }));
                }).then(function (loadedFiles) {
                     return loadedFiles.map(function (file) {
                         return JSON.parse(file);
                     });
                });
        }
};
