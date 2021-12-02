// Code your solution in this file!
const returnFirstTwoDrivers = function(data) {return data.slice(0,2)};

const returnLastTwoDrivers = function(data) {return data.slice(data.length -2,data.length)};

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {return function(fare) {return fare * multiplier }};

const fareDoubler = function(fare) {return createFareMultiplier(2)(fare)};
const fareTripler = function(fare) {return createFareMultiplier(3)(fare)};


function selectDifferentDrivers(arrayOfDrivers, fun) {
    return fun(arrayOfDrivers);
}

