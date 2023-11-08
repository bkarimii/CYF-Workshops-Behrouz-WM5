const {getPreviousCaseOfWordOne} = require ("./900.js");
const {getPreviousCaseOfWordTwo} = require ("./900.js");


test('should be hello for wordOne function', () => {
    const textInput='hello';
    //const previousWords = ['HELLO','hi'];
    expect(getPreviousCaseOfWordOne(textInput)).toBe('hello');

});

test('should be hi',()=>{
    expect(getPreviousCaseOfWordTwo('hi',['HI','HeeLLO','hi'])).toEqual('HI');
});

test('should be hi',()=>{
    expect(getPreviousCaseOfWordTwo('ME',['you','He','mE'])).toEqual('mE');
});


