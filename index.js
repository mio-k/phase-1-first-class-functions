function dog(){
    return `I have a dog`;
}
function receivesAFunction(cba) {
    cba();
}
function monday(){
    receivesAFunction(dog);
}
function returnsANamedFunction(){
    return receivesAFunction;
}
function returnsAnAnonymousFunction() {
    return function() {
        console.log(`this is such an abstract assignment.`);
    };
}
