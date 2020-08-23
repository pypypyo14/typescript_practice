enum zunDoko {
    Zun  = 'ズン',
    Doko = 'ドコ'
}

function generateZunOrDoko(): zunDoko {
    const random:number = Math.random(); 
    if (random < 0.5) {
        return zunDoko.Zun;
    } else {
        return zunDoko.Doko;
    };
};

function generateZunDokoArray():zunDoko[] {
    let zunDokoArray:zunDoko[] = [];
    while (zunDokoArray.length < 5) {
        zunDokoArray.push(generateZunOrDoko());
    };
    return zunDokoArray
};

while (true){
    let result:zunDoko[] = generateZunDokoArray();
    const correct = [zunDoko.Zun, zunDoko.Zun, zunDoko.Zun, zunDoko.Zun, zunDoko.Doko];
    console.log(result);
    if (result.toString() ===  correct.toString()){
        console.log('き・よ・し！')
        break;
    } else {
        console.log('失敗！')
    };
}


