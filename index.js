// task 1

function createCounters(val){
    this.count= val
    return {
        increment(){
            return this.count++
        },
        decrement(){
            return this.count--
        },
        getValue(){
            return this.count
        }
    }
    }



// task 2.1
function CounterPrototype  (value){
    
        this.count = value
        this.initialValue = value
    
}

CounterPrototype.prototype.increment= function (){
return this.count++
}

CounterPrototype.prototype.decrement = function (){
return this.count--
}


CounterPrototype.prototype.getValue = function (){
return this.count
}
CounterPrototype.prototype.reset = function (){
return this.count = this.initialValue
}


// Task 3
function createCounter(initialValue = 0){
    this.count = initialValue
    this.inner = initialValue
    
}
createCounter.prototype = Object.create(CounterPrototype.prototype)


// task 4
createCounter.prototype.increment = function (){
    this.count++
    return this.count
}

createCounter.prototype.decrement = function (){
    this.count--
    return this.count
}
createCounter.prototype.getValue = function (){
    return this.count
}
createCounter.prototype.reset = function (){
    this.count = this.inner
    return this.count
}



// task 5.1


createCounter.prototype.transform = function (transformFn){


    const newCount = transformFn(this.count);

    this.count = newCount;
    return this.count;
    
}


// task 5.2

createCounter.prototype.createPredicate = function (){
    const checking =(threshold)=>{
        
        return this.count >= threshold
        
    }
    // return true
    return checking
}



// task 6 
createCounter.prototype.add = function (value){
    return this.count + value
}

createCounter.prototype.subtract = function (value){
    return this.count - value
}

createCounter.prototype.multiply = function (value){
    return this.count * value
}
createCounter.prototype.snapshot = function (){
    return this.count
}
createCounter.prototype.batch = function ({ increments = 0, decrements = 0 }) {
    this.count += increments;
    this.count -= decrements;

    return this.count; 
};



function createAdvancedCounter(config) {
    this._config = {
        initialValue: config && config.initialValue !== undefined ? config.initialValue : 0,
        step: config && config.step !== undefined ? config.step : 1,
        min: config && config.min !== undefined ? config.min : -Infinity,
        max: config && config.max !== undefined ? config.max : Infinity
    };

    this.count = Math.max(this._config.min, Math.min(this._config.initialValue, this._config.max));
}

createAdvancedCounter.prototype.increment = function () {
    const newCount = this.count + this._config.step;
    this.count = Math.min(newCount, this._config.max);
    return this.count;
};


createAdvancedCounter.prototype.decrement = function () {
    const newCount = this.count - this._config.step;
    this.count = Math.max(newCount, this._config.min);
    return this.count;
};


createAdvancedCounter.prototype.getValue = function () {
    return this.count;
};

createAdvancedCounter.prototype.reset = function () {
    this.count = Math.max(this._config.min, Math.min(this._config.initialValue, this._config.max));
    return this.count;
};

createAdvancedCounter.prototype.getConfig = function () {
    return { ...this._config };
};
const v1 = new createCounter(4)
const v2 = new createCounter(8)

//increment and decrement
console.log("increment and decrement")
console.log(v2.increment())
console.log(v1.decrement())

console.log(v2.reset())

//higher order function
console.log("higher order function")
console.log(v1.transform(x=>x*2))

console.log("immutables")
console.log(v1.add(5))
console.log(`for multiply ${v1.multiply(8)}`)
console.log(v1.getValue())

const peep = new createCounter(5)
console.log(peep.add(20))
console.log(peep.snapshot())
console.log(peep.batch({increments:100}))
const isAboveThreshold = peep.createPredicate()
console.log(isAboveThreshold(100))