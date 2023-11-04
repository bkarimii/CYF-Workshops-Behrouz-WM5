// const formatAsSecondsAsString= require('./timeString');





// test('timeString', () => {
//   expect(formatAsSecondsAsString(61)).toBe('1 minute 1 second');
// });


// const { formatAsSecondsAsString } = require('./timeString.js'); // Replace with the actual file path

// const testCases = [
//   {
//     input: 30,
//     expectedOutput: '30 second',
//   },
//   {
//     input: 90,
//     expectedOutput: '  1 minute 30 second',
//   },
//   // Add more test cases as needed
// ];

// testCases.forEach((testCase, index) => {
//   test(`Test Case ${index + 1}`, () => {
//     const result = formatAsSecondsAsString(testCase.input);
//     expect(result).toBe(testCase.expectedOutput);
//   });
// });


const formatAsSecondsAsString  = require('./timeString'); // Import the function you want to test

test('Test case 1: seconds to string', () => {
  expect(formatAsSecondsAsString(30)).toBe('30 seconds');
});

test('Test case 2: minutes and seconds to string', () => {
  expect(formatAsSecondsAsString(90)).toBe('1 minutes 30 seconds');
});

test('Test case 3: minutes and seconds to string', () => {
  expect(formatAsSecondsAsString(600)).toBe('10 minutes');
});

test('Test case 1: seconds to string', () => {
  expect(formatAsSecondsAsString(1)).toBe('1 seconds');
});

test('Test case 1: seconds to string', () => {
  expect(formatAsSecondsAsString(51)).toBe('51 seconds');
});

test('Test case 1: seconds to string', () => {
  expect(formatAsSecondsAsString(60)).toBe('1 minutes');
});