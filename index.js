function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction(namedFunction) {
    return function namedFunction(){}
}

function returnsAnAnonymousFunction(anonymousFunction) {
    return () => {}
}