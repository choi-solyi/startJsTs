console.log('hi')

const arr = [true, false, true, false]

//1 
for(let i = 0; i < arr.length; i++) {
  if (arr[i]) {
    arr[i] = false
  } else { 
    arr[i] = true
  }
}
console.log('for문', arr)

//2
for(i in arr) {
  if (arr[i]) {
    arr[i] = false
  } else { 
    arr[i] = true
  }
}
console.log('for문', arr)

//3
arr.forEach(item => {
  if (item) { 
    item = false
  } else{ 
    item = true
  }
})
console.log('forEach -> ' ,  arr)

