// task 1

// class createCounter {
//     constructor(count){
//         this.count = count
//     }
//     increment(){
//         return this.count++
//     }
//     decrement(){
//         return this.count--
//     }
//     getValue(){
//         return this.count
//     }
// }
// const counter1 = new createCounter(0)
// const counter2 = new createCounter(10)

// counter1.increment()
// counter1.increment()
// counter2.decrement()
// console.log(counter1.getValue())
// console.log(counter2.getValue())


// task 2.1
function CounterPrototype (value){
    
        this.count = value
        this.initialValue = value
    
}

CounterPrototype.prototype.increment=function (){
return this.count++
}

CounterPrototype.prototype.decrement=function (){
return this.count--
}


CounterPrototype.prototype.getValue =function (){
return this.count
}
CounterPrototype.prototype.reset = function (){
return this.count = this.initialValue
}



const p1 = new CounterPrototype(3)
p1.increment()
console.log(p1.getValue())
p1.reset()
console.log(p1.getValue())

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

const v1 = new createCounter(4)
const v2 = new createCounter(8)
console.log(v1.increment())
console.log(v2.reset())

// task 5.1
const power = (e) =>{
        let value = e*2
        return value
    }

createCounter.prototype.transform = function (count){

     return count
    
}

// console.log(v2.transform(power(this.count)))

// task 5.2

createCounter.prototype.createPredicate = function (){
    function checking (threshold){
        
        console.log(this.count)
        if(this.count >= threshold){

            console.log(this.count)
            return true
        }
        // console.log(this.count)
        // return false
    }
    // return true
    return checking
}
// console.log(isAboveThreshold(4))


// task 6 
createCounter.prototype.add = function (value){
    return this.count + value
}

const peep = new createCounter(5)
// console.log(peep.add(5))
const isAboveThreshold = peep.createPredicate()
console.log(isAboveThreshold(0))