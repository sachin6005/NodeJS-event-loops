const fs = require('fs')

setTimeout( () => console.log("Timer finished - 1"), 0 )
setImmediate( () => console.log("Immediate finish -1"))

fs.readFile("Hello world" , ()=> {
    console.log("function finished - 1")
})

console.log("This is Top level code - 1")

setTimeout( () => console.log("Timer finished - 2"), 0 )
setImmediate( () => console.log("Immediate finish - 2"))
setTimeout( () => console.log("Timer finished - 3"), 0 )

console.log("This is Top level code - 2")