import { zunDoko } from '../src/kiyoshi';
import { generateZunDokoKiyoshi } from '../src/kiyoshi';
import { judgeZunDokoKiyoshi } from '../src/kiyoshi';

describe('generateZunDokoKiyoshi', () => {
    test('length of array', () => {
        expect(generateZunDokoKiyoshi([])).toHaveLength(5);
    })
})

describe('judgeZunDokoKiyoshi', () => {
    test('match', () => {
        const data = [zunDoko.Zun, zunDoko.Zun, zunDoko.Zun, zunDoko.Zun, zunDoko.Doko];
        expect(judgeZunDokoKiyoshi(data)).toBeTruthy()
    })

    test('unmatch', () => {
        const data = [zunDoko.Doko, zunDoko.Doko, zunDoko.Doko, zunDoko.Doko, zunDoko.Zun];
        expect(judgeZunDokoKiyoshi(data)).toBeFalsy()
    })
})