// Regular Expretion
// REG EXP
// let re;
// re = /hello/;

// console.log(typeof re)
// console.log(re instanceof RegExp)
// console.log(re.source)


// Reg Exp methods
// exec() returns arr or null
// let result = re.exec('world') // null
// result = re.exec('world hello') // null
// console.log(result)
// console.log(result.index)
// console.log(result.input)
// ==============================
// test() true /  false
// let result = re.test('sponge hello bob squire pants')
// result = re.test('sponge bob squire pants')
// console.log(result)


// Stings methods
// -------------------------------------------------------
// match() returns arr or null
// let str = 'sponge bob squire hello pants';
// str = 'sponge bob squire pants'; // null
// let result = str.match(re);
// console.log(result)


// search() return index or -1
// [].indexOf()
// let str = 'sponge bob squire pants'; // -1
// str = 'sponge bob hello squire  pants'; // 11

// let result = str.search(re);
// console.log(result)

// replace()
// let str = 'sponge hello bob squire pants';
// console.log(str)
// let result = str.replace(re, 'pizza')
// console.log(result)



// From webpack.config.js
// re = /\.m?js$/
// re = /\.css$/i
// re = /\.s[ac]ss$/i
// .sass
// .scss
// .css
// .js
// .mjs
// From webpack.config.js


// Literal quantificators
let re;
re = /hello/;
re = /hello/i; // case insesetiv
re = /hello/g; // global searh
// ============
re = /^h/ // first lettrer
re = /^h/i // first lettrer case insesetive
re = /^hello/i // first word case insesetive
re = /s$/i // ends on letter
re = /pants$/i // ends on word
re = /h.llo/i // any 1 character
re = /h\.llo/i // dot character
re = /h*llo/i // any character, many charaters or no character
re = /he?l?lo/i // any character, many charaters or no character
re = /gra?e?y/i // optional character, before question mark
// gray
// grey
//=====================
// [] char set
re = /gr[ae]y/i // [optional inside] a or e
re = /^[gr]ay/i // start from g or r
re = /[^gr]ay/i // any character r or g (g or r) before ay
re = /[A-Z]ello/ // any uppercase letter
re = /[a-z]ello/ // any lowercase letter
re = /[A-Za-z]ello/ // any lowercase letter
re = /[0-9]ello/ // any digit
re = /[0-4]ello/
re = /[5-9]ello/
re = /[A-Ga-g]ello/


//=====================
// {} matches times
re = /hel{2}o/ // l matches 2 times
re = /hel{n,m}o/ // from n to m
re = /hel{2,4}o/ // l matches from 2 to 4 times
re = /hel{2,}o/ // l matches from 2 to infinity


//=====================
// Short hans for letter and digits
re = /\w/ // word character
re = /\W/ // not word
re = /\d/ // digit
re = /\D/ // not digit
re = /\s/ // whitespace
re = /\S/ // not whitespace



// let result = re.test('sponge hello bob hello squire pants')
// let str = 'hello sponge bob squire pants';
// let result = str.replace(re, 'pizza')

// let result = re.test('say hlo sponge bob squire pants vova')
let result = re.test('adfea')
console.log(result)


  // Email validation
/*
^[a-zA-Z0-9.!#$%&'*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
*/



  // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

