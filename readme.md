# Nerdschool Bergen - Pair programming

Basic concept: Two programmers sit together and collaborate on writing code.

## Task &ndash; JavaScript Roman Numerals kata

- Run through the Roman Numerals kata in pairs
- Run through the kata again using TDD using the supplied test framework in JavaScript.

### Problem description

- Write a program that converts a number to roman numerals.
- Try it out with small numbers first, then build up to larger numbers.
- Numbers larger than 5000 should not be accepted.
- Rules can be found here: https://www.mathsisfun.com/roman-numerals.html

Example program:

```
Enter a number between 1 and 5000: 3
The roman numeral is III
Enter a number between 1 and 5000: 9
The roman numeral is IX
Enter a number between 1 and 5000: 98
XCVIII
```

### Test framework ###
To keep things simple we have supplied a basic JavaScript test framework in the `testframework` folder.

The framework example consists of two JavaScript files:
- `main.js` - Tests are declared here
- `testframework.js` - Main testing framework

#### Declaring tests
`assert` takes two parameters, a test description and a function containing the test.

Example test with a simple assertion using `expect(bool)` and `toEqual(bool)`:

```javascript
assert('should fail', function(){
  expect(true).toEqual(false);
});
```

To negate,  use `.not()`:
```javascript
assert('integer 0 is not equal to string 0', function(){
  expect('0').not().toEqual(0);
});
```

#### Running tests
To run and display the tests, open `tests.html` in a browser.

## Session 1 - Roman numerals kata, no tests

**Length: 20 minutes**

- Pomodoro-style pairing: The _Driver_ (writes the code) and the _observer_ (helps, reviews and remembers things you need to do later on).
- We'll rotate every 4 minutes by swapping seats (the _driver_ becomes the _observer_, and vice versa)

## Session 2 - Roman numerals kata, TDD
**Length: 20 minutes**
- Same approach as session 1, only using TDD
- Rotate every 4 minutes.

## Session 3 - Roman numerals kata, TDD
**Length: 20 minutes**
- Test/method-paring: One person writes the test, the other writes the implementation code. Both should discuss.
- Rotate half-way

## Session 4
- Code review
