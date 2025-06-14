# counter
Learning Objectives
By the end of this task, you will understand:

Closures and private variables
Prototypal inheritance
Higher-order functions
Immutability principles
ES6 features (arrow functions, const/let, destructuring)
 

 

Step 1: Understanding the Requirements
Your goal is to create a factory function that creates counter objects with the following features:

Each counter should have private state (count value)
Multiple counters should not interfere with each other
All counters should share common methods through prototypal inheritance
The implementation should use ES6 features
Expected Usage:

const counter1 = createCounter(0);

const counter2 = createCounter(10);


 

counter1.increment(); // Should not affect counter2

console.log(counter1.getValue()); // 1

console.log(counter2.getValue()); // 10


 

Task 1.1: Write down in the README.md file in the root of your project what you think the main challenges will be in implementing this.

 

 

Step 2: Create the Counter Prototype
Create a prototype object that will be shared by all counter instances.

Task 2.1: Create a CounterPrototype object with the following methods:

increment() - increases count by 1
decrement() - decreases count by 1
getValue() - returns current count value
reset() - resets count to initial value
Hint: At this stage, you can leave the methods empty or throw "Not implemented" errors.

Task 2.2: Explain why we're creating a prototype first instead of putting methods directly in each counter instance (All written answers should be in the README.md file in the root of your project).

 

 

Step 3: Implement Basic Factory Function with Closures
Create the factory function that uses closures to maintain private state.

Task 3.1: Write a createCounter(initialValue = 0) function that:

Creates a private count variable
Creates a counter object that inherits from CounterPrototype
Returns the counter object
Task 3.2: The challenge here is: How will the prototype methods access the private count variable? Think about this before moving to the next step.

Test your understanding: After creating two counters, should they share the same count variable or have separate ones? Why? (Answer in the README.md file with appropriate numbering)

 

 

Step 4: Connect Private Variables with Prototype Methods
Now you need to solve the challenge from Step 3.2.

Task 4.1: Modify your factory function so that each counter instance can access its own private count variable. You'll need to override the prototype methods for each instance.

Task 4.2: Implement these methods:

increment() - should increase the private count and return the new value
decrement() - should decrease the private count and return the new value
getValue() - should return the current private count
reset() - should reset count to the original initial value
Task 4.3: Test that two different counter instances don't interfere with each other.

 

 

Step 5: Add Higher-Order Functions
Higher-order functions either accept functions as parameters or return functions.

Task 5.1: Add a transform(transformFn) method that:

Takes a function as a parameter
Applies that function to the current count
Updates the count with the result
Returns the new count
Example usage:

counter.transform(x => x * 2); // Doubles the count

counter.transform(x => Math.max(x, 0)); // Ensures count is not negative


 

Task 5.2: Add a createPredicate() method that:

Returns a function
The returned function should take a threshold parameter
The returned function should return true if current count >= threshold
Example usage:

const isAboveThreshold = counter.createPredicate();

console.log(isAboveThreshold(5)); // true if count >= 5


 

Task 5.3: Add an onChange(callback) method that:

Takes a callback function as parameter
Modifies increment/decrement to call the callback after changing the count
The callback should receive the new value and the operation type
Should return the counter for method chaining
 

 

Step 6: Implement Immutability
Add methods that don't modify the existing counter but return new counter instances.

Task 6.1: Add these immutable methods:

add(value) - returns a new counter with count + value
subtract(value) - returns a new counter with count - value
multiply(value) - returns a new counter with count * value
Task 6.2: Add a snapshot() method that returns a new counter with the same current count.

Task 6.3: Test that the original counter is unchanged after calling these methods.

Question: What's the difference between counter.increment() and counter.add(1)?

 

 

Step 7: Enhance with ES6 Features
Refactor your code to use more ES6 features.

Task 7.1: Use these ES6 features in your implementation:

Arrow functions for methods
Destructuring in function parameters
Default parameters
Template literals
Object method shorthand
const/let instead of var
Task 7.2: Add a batch(operations) method that accepts an object with destructuring:

counter.batch({ increments: 3, decrements: 1 });


 

Task 7.3: Add a toString() method that uses template literals to return a formatted string.

 

 

Step 8: Create Advanced Counter Factory
Task 8.1: Create a createAdvancedCounter(config) function that accepts a configuration object with:

initialValue (default: 0)
step (default: 1) - how much to increment/decrement by
min (default: -Infinity) - minimum allowed value
max (default: Infinity) - maximum allowed value
Task 8.2: Ensure the counter respects the min/max boundaries.

Task 8.3: Add a getConfig() method that returns the current configuration.

 

 

Step 9: Testing and Validation
Task 9.1: Write test cases to verify:

Basic increment/decrement functionality
Private state isolation between counters
Higher-order functions work correctly
Immutable methods don't modify original counter
Advanced counter respects boundaries
Task 9.2: Create examples showing:
Two counters working independently
Using transform with different functions
Chaining operations with onChange
Creating new counters with immutable methods
 

 

Step 10: Extension Challenges
👉🏽 Choose one, at most two of these advanced challenges:

Challenge 10.1: Add a history feature that tracks all operations performed on the counter.

Challenge 10.2: Implement counter serialization - methods to convert counter state to JSON and recreate from JSON.

Challenge 10.3: Create a counter that has a maximum number of operations (after which it becomes read-only).

Challenge 10.4: Implement validation functions that can prevent certain operations based on custom rules.

Challenge 10.5: Create a way to compose multiple counters (e.g., a counter that represents the sum of other counters).

 

 

Reflection Questions
After completing the exercises, consider:

How do closures help maintain private state?
What are the benefits of using prototypal inheritance here?
When would you use mutable vs immutable methods?
How do higher-order functions make the counter more flexible?
What ES6 features improved the readability of your code?
 

 

Submission Checklist
[ ] Factory function creates counters with private state
[ ] Prototypal inheritance is used for shared methods
[ ] Higher-order functions are implemented
[ ] Both mutable and immutable methods exist
[ ] ES6 features are utilized throughout
[ ] Code is well-commented explaining the concepts used
Note: All written answers should go into the README.md file in the root of your project with appropriate numbering.
