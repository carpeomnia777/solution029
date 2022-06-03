//write a two functions that receive a list of ints and return the largest and lowest respectively
var min = function(list){
    let minList = list.sort(function(a , b){return a - b})
    return minList[0];
}

var max = function(list){
    let maxList = list.sort(function(a, b){return b- a})
    return maxList[0];
}

//classic use case for sort