/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
    console.log(args.length)
};

/**
 * argumentsLength(1, 2, 3); // 3
 */