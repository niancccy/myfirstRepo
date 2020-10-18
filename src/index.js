const simpleStatistics = require("simple-statistics");
var ages = [29, 16, 17, 13];
console.log("the ages are", ages);
console.log("the max age is");
console.log(simpleStatistics.max(ages));
console.log("the min age is");
console.log(simpleStatistics.min(ages));
console.log("the average age is");
console.log(simpleStatistics.average(ages));
console.log("the mode age is");
console.log(simpleStatistics.mode(ages));
console.log("the median age is");
console.log(simpleStatistics.median(ages));

