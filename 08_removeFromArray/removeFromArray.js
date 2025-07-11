const removeFromArray = function(arr, ...removeThese) {
    return arr.filter(item => !removeThese.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
