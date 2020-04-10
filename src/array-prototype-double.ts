// ADD DOUBLE ON ARRAY PROTOTYPE WHICH WILL DOUBLE GIVEN THE ARRAY eg: a =[1,2,3], now a.double() should return [1,2,3,1,2,3]
Array.prototype.double = function () {
    return [...this, ...this]
}

