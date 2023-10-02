let myMap = new Map()

myMap.set('a', 3)
myMap.set('b', 8)
myMap.set('b', 10)

console.log(myMap.get('b'))

for (const [key, value] of myMap){
    console.log(key, value)
}

//iterating with foreach function
myMap.forEach((key, value) => {
    console.log(`${key} : ${value}`)
});