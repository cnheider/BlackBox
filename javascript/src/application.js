'use strict';

import Q from 'q';

import prices from './prices.js';
import algorithms from './algorithms.js';
import results from './results.js';

export function run() {
    prices.load()
        .then(algorithms.run)
        .then(function (algorithmResults) {
            return Q.all(algorithmResults.map(function (participantsResults) {
                return Q.all(participantsResults.map(function (result) {
                    return results.save(result.ticker, result.participant, result.actions);
                }));
            }));
        })
        .then(function () {
            console.log('And we are done.... have a nice day!');
        })
        .catch(function (error) {
            console.log(error);
        });
}
