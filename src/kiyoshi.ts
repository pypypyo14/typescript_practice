export enum zunDoko {
    Zun  = 'ズン',
    Doko = 'ドコ'
}

function generateZunOrDoko(): zunDoko {
    const random:number = Math.random(); 
    if (random < 0.5) {
        return zunDoko.Zun;
    } else {
        return zunDoko.Doko;
    }
}

export function generateZunDokoKiyoshi(array: zunDoko[]): zunDoko[] {
    let resultZunDokoKiyoshi: zunDoko[] = array;
    while (resultZunDokoKiyoshi.length < 5) {
        resultZunDokoKiyoshi = generateZunDokoKiyoshi([...resultZunDokoKiyoshi, generateZunOrDoko()]);
    }
    return resultZunDokoKiyoshi;
}

export function judgeZunDokoKiyoshi(resultZunDokoKiyoshi: zunDoko[]): boolean{
    const correct = [zunDoko.Zun, zunDoko.Zun, zunDoko.Zun, zunDoko.Zun, zunDoko.Doko];
    if  (resultZunDokoKiyoshi.toString() === correct.toString()) {
        return true;
    }
    return false;
}

function main(array? :zunDoko[]): string{
    const initialArray: zunDoko[] = array || [];
    const zunDokoKiyoshi: zunDoko[] = generateZunDokoKiyoshi(initialArray);
    const result: boolean = judgeZunDokoKiyoshi(zunDokoKiyoshi);
    if (result) {
        return zunDokoKiyoshi.join('・') + ' き・よ・し！'
    } else {
        console.log(zunDokoKiyoshi.join('・'));    
        return main(zunDokoKiyoshi.slice(-4));
    }
}

const msg = main();
console.log(msg);
