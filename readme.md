# Nerdschool Bergen - Pair programming

Basic concept: Two programmers sit together and collaborate on writing code.

## Task &ndash; JavaScript FizzBuzz kata

- Run through the FizzBuzz kata with test driven development and pair programming using the supplied test framework in JavaScript.

### Problem description

- Write a program that prints the numbers from 1 to 100.
- For multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
- For numbers which are multiples of both three and five print “FizzBuzz”.

Example program output:

```
1
2
Fizz
4
Buzz
Fizz
7
8
...
```

### Test framework ###
To keep things simple we have supplied a simple JavaScript test framework in the `testframework` folder.

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

## Session 1

**Length: 20 minutes**

- Pomodoro-style pairing: The _Driver_ (writes the code) and the _observer_ (helps, reviews and remembers things you need to do later on).
- We'll rotate every 4 minutes by swapping seats (the _driver_ becomes the _observer_, and vice versa)

## Session 2
**Length: 20 minutes**

- Test/method-paring: One person writes the test, the other writes the implementation code. Both should discuss.
- Rotate every 4 minutes.

## Session 3
**Length: 20 minutes**

- Pomodoro-style pairing, but on a projector.
- There will be only _one_ pair coding, but everyone can take their turn on screen.
- Everyone will contribute.

## Session 4
- Code review
