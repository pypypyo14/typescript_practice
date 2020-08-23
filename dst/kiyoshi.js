"use strict";
var zunDoko;
(function (zunDoko) {
    zunDoko["Zun"] = "\u30BA\u30F3";
    zunDoko["Doko"] = "\u30C9\u30B3";
})(zunDoko || (zunDoko = {}));
function generateZunOrDoko() {
    var random = Math.random();
    if (random < 0.5) {
        return zunDoko.Zun;
    }
    else {
        return zunDoko.Doko;
    }
    ;
}
;
function generateZunDokoArray() {
    var zunDokoArray = [];
    while (zunDokoArray.length < 5) {
        zunDokoArray.push(generateZunOrDoko());
    }
    ;
    return zunDokoArray;
}
;
while (true) {
    var result = generateZunDokoArray();
    var correct = [zunDoko.Zun, zunDoko.Zun, zunDoko.Zun, zunDoko.Zun, zunDoko.Doko];
    console.log(result);
    if (result.toString() === correct.toString()) {
        console.log('き・よ・し！');
        break;
    }
    else {
        console.log('失敗！');
    }
    ;
}
