# Nerdschool Bergen - Pair programming

Basic concept: Two programmers sit together and collaborate on writing code.

## Task &ndash; JavaScript Roman Numerals kata

- Run through the Roman Numerals kata in pairs. Use Test Driven Development. We supply a test framework (see the testframework directory)

### Problem description

- Implement a function that converts a number to roman numerals. An empty method is provided in roman.js. To run, open index.html and enter a valid number.
- Tests are written in testframework/main.js. There are a number of tests there to show you how the testframework behaves, they are not needed for the kata. See below for a detailed explanation.
- Try it out with small numbers first, then build up to larger numbers.
- Numbers larger than 5000 should not be accepted.
- Rules can be found here: https://www.mathsisfun.com/roman-numerals.html

Example output:

![Image of index page](images/example.png)

### Test framework ###
To keep things simple we have supplied a basic JavaScript test framework in the `testframework` folder.

The framework example consists of two JavaScript files:
- `main.js` - Tests are declared here
- `testframework.js` - Main testing framework. You will most likely not need to touch this file. 

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

## Session 1 - Roman numerals kata, TDD

**Length: 30 minutes**

- Pomodoro-style pairing: The _Driver_ (writes the code) and the _observer_ (helps, reviews and remembers things you need to do later on).
- We'll rotate every 6 minutes by swapping seats (the _driver_ becomes the _observer_, and vice versa)
- Tip: Start with small numbers

## Session 2 - Roman numerals kata, TDD
**Length: 30 minutes**
- Test/method-paring: One person writes the test, the other writes the implementation code. Both should discuss.
- Rotate half-way, so that the driver becomes the observer for the last 15 minutes. 

## Session 3
- Code review
