//Part4_ch1_01.문자

// String 
// Number
// Boolean : true, false
// undefined
// null
// Array: []
// Object: {}


// String
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String

// length
const str1 = '0123'
console.log(str1.length)

// indexOf(이값이 몇번째에 있니)  
console.log('@ indexOf(이값이 몇번째에 있니) ')
const str2 = 'Hello World'
console.log(str2.indexOf('World'))    // 6 출력
console.log(str2.indexOf('Solyi'))    // -1 출력

// slice(시작점, 끝점-1)
console.log('@ slice(시작점, 끝점-1)')
console.log(str2.slice(0,3))          // Hel 출력  
console.log(str2.slice(6,11))         // World 출력  

// replace(앞문자를, 뒷문자로) 변경
console.log('@ replace(앞문자를, 뒷문자로) 변경')
console.log(str2.replace('World', 'solyi'))  // Hello Solyi 출력
console.log(str2.replace('World', ''))      // Hello 출력

//match()    
console.log('@ match())  ')
const str3 = 'thesecon@gmail.com'
console.log(str3.match(/.+(?=@)/)[0]) // thesecon 출력

//trim()  앞뒤 공백삭제
console.log('@ trim()  앞뒤 공백삭제')
const str4 = ' HELLO WORLD?   '
console.log(str4.trim())