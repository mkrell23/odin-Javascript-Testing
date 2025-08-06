import {capatalize} from '../src/index.js'

test('it exists', () => {
    expect(capatalize).toBeDefined();
});

test('it capatalizes a string', () => {
    const strings = new Map([
        ["test", "Test"],
        ["second", "Second"],
        ["third", "Third"],
        ["because", "Because"]
    ]);

    strings.forEach((value, key) => {
        expect(capatalize(key)).toBe(value);
    });
});