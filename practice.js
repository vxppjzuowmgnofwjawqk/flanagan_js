// // Элементарные типы
// let number = -10_000 // -10000 || -10e3
// let string = 'string'
// let boolean = true
// let _null = null
// let _undefined = undefined
// let symbol = Symbol('symbol')
// let bigint = 10n
//
// // Объектные типы
// let object = {}
// let array = [number]
// let _function = function() {}
// let _class = class {}
//
// array[0] = string
// // console.log(array[0]) => "string"
//
// string[0] = 'S'
// // console.log(string[0]) => "s"
//
// // console.log(string.toUpperCase()) => "STRING"
//
// const bin = 0b10
// const oct = 0o11
// const hex = 0xff
//
// // console.log(bin) => 2
//
// // console.log(oct) => 9
//
// // console.log(hex) => 255
//
// // console.log(string + '_' + boolean) => string_true
//
// number = 10.5
//
// let a = 10
// let b = 20
// console.log(a + b) => 30
// console.log(a - b) => -10
// console.log(b / a) => 2
// console.log(b * a) => 200
// console.log(b % a) => 0
// console.log(a ** 2) => 100
//
// console.log(Math.floor(20.65)) => 20
// console.log(Math.ceil(20.65)) => 21
// console.log(Math.round(20.65)) => 21
// console.log(Math.min(10, 30, 20)) => 10
// console.log(Math.max(10, 30, 20)) => 30
// console.log(Math.random()) => random number
// console.log(Math.pow(10, 2)) => 100
// console.log(Math.abs(-10) === Math.abs(10)) => true
//
// console.log(10e1000) => Infinity
// console.log(-10e1000) => -Infinity
// console.log(1e-1000) => 0
// console.log(1 / 0) => Infinity
// console.log(0 / 0) => NaN
// console.log(Infinity / -Infinity) => NaN
// console.log(true / 'string') => NaN
//
// const a = 10_000
// const b = 10e3
//
// console.log(a === b) => true
//
// console.log(Number.isNaN('JS')) => false
// console.log(isNaN('JS')) => true
// console.log(Number.isFinite('20')) => false
// console.log(isFinite('20')) => true
// console.log(1 / -0) => -Infinity
// console.log(1 / 0) => Infinity
// console.log(0 === -0) => true
//
// const a = .3 - .2
// const b = .2 - .1
// console.log(a === b) => false
// Значения a и b очень близки друг к другу и корректной величине, вычисленные значения пригодны практически
// для любой цели и проблемы могут возникать лишь при попытке сравнения значений на предмет равенства.
//
// const bigint = 10_000_000n
// const number = 1
//
// console.log(bigint + number) => error
// console.log(number < bigint) => true
//
// console.log(BigInt(number)) => 1n
// console.log(BigInt('1')) => 1n
// console.log(BigInt('string')) => error
//
// console.log(10_000n + 20_000n) => 30_000n
// console.log(10_005n / 10_000n) => 1n
//
// const date = new Date() => Объект
// const timestamp = Date.now() => Числовое представление
//
// const string1 = 'HELLO, '
// const string2 = 'WORLD!'
//
// console.log(string1 + string2) => "HELLO, WORLD!"
//
// const string = 'STRING'
//
// console.log(string.toLowerCase()) => "string"
// console.log(string.toUpperCase()) => "STRING"
// console.log(string.includes('TRI')) => true
// console.log(string.startsWith('STR')) => true
// console.log(string.endsWith('ING')) => true
// console.log(string.indexOf('S')) => 0
// console.log(string.indexOf('S', 1)) => -1
// console.log(string.lastIndexOf('N')) => 4
// console.log(string.slice(1, 3)) => "TR"
// console.log(string.replace('STRING', 'NUMBER')) => "NUMBER"
// console.log(string.padStart(10, '*')) => "****STRING"
// console.log(string.padEnd(10, '*')) => "STRING****"
// console.log(string.length) => 6
// console.log(string.repeat(3)) => "STRINGSTRINGSTRING"
// console.log(string === string.toLowerCase()) => false
//
// const name = 'СЕРГЕЙ'
// const age = 19
//
// const string1 = `ДОБРЫЙ ДЕНЬ, МЕНЯ ЗОВУТ ${name} И МНЕ ${age} ЛЕТ!`
// const string2 = f`ДОБРЫЙ ДЕНЬ, МЕНЯ ЗОВУТ ${name} И МНЕ ${age} ЛЕТ!`
//
// function f(strings, name, age) {
// 	return strings[0] + name + strings[1] + age + strings[2]
// }
//
// console.log(string1 === string2)
//
// const text = 'testing: 3.. 2.. 1.. !!'
// const pattern = /\d+/g
//
// console.log(text.match(pattern))
// console.log(pattern.test(text))
// console.log(text.replace(pattern, '#'))
//
// const _true = true
// const _false = false
//
// console.log(_false.toString())
//
// if (0 && -0) console.log(true); else console.log(false)
//
// if (null && undefined) console.log(true); else console.log(false)
//
// if (NaN && '') console.log(true); else console.log(false)
//
// console.log(10 <= 0 || 10 >= 0)
//
// const _null = null
// const _undefined = undefined
//
// console.log(_null == _undefined)
//
// console.log(!!_null)
// console.log(!!_undefined)
//
// _undefined.toString() => TypeError
//
// const object = {}
//
// const symbol = Symbol('id')
// const symbol1 = Symbol.for('id')
// const symbol2 = Symbol.for('id')
//
// object[symbol] = Math.random().toString().replace('0.', '#')
//
// console.log(object[symbol])
//
// object[symbol1] = Math.random().toString().replace('0.', '#')
//
// console.log(object[symbol1])
// console.log(object[symbol2])
// console.log(object[Symbol.for(Symbol.keyFor(symbol1))])
//
// console.log(symbol1.toString())
//
// console.log(global === globalThis)
// console.log(window)
//
// const o1 = {email: '@mail.ru'}
// const o2 = {email: '@mail.ru'}
// const o3 = o1
//
// console.log(o1 === o2)
// console.log(o1 === o3)
//
// console.log(0 === 0)
// console.log(true === true)
// console.log('STRING' === 'STRING')
//
// o3.email = o3.email.replace('@', '#')
// console.log(o1.email)
//
// const s1 = 'STRING'
// s1[0] = '#'
// console.log(s1)
// console.log(10..toString())
// console.log(true.toString())
// console.log(undefined + '')
// console.log(null + '')
// console.log([] + 'STRING')
// console.log([10].toString())
// console.log(['STRING', 10] + '')
//
// console.log('10' / 10)
// console.log('10 S' / 10)
// console.log(true - false)
// console.log(undefined - 10)
// console.log(null - 10)
// console.log([] - 10)
// console.log([100] - 10)
// console.log([100, 400] - 10)
//
// console.log(!!'')
// console.log(!!null)
// console.log(!!undefined)
// console.log(!!0)
// console.log(!!-0)
// console.log(!!NaN)
//
// console.log('10' == 10)
// console.log('10' === 10)
//
// console.log(String(10))
// console.log(Number('10'))
// console.log(Number('10n'))
// console.log(Boolean(10))
//
// console.log(parseInt(' 10.1n'))
// console.log(parseInt(' 0xff'))
// console.log(parseInt('ff', 16))
//
// console.log(parseFloat(' 10.1n'))
//
// console.log(10.125.toFixed(1))
// console.log(10.125.toPrecision(2))
// console.log(10.125.toExponential(3))
//
// const o = {
//
// 	valueOf() {
//
// 		return 1
//
// 	},
//
// 	toString() {
//
// 		return 'STRING'
//
// 	}
//
// }
// console.log(String(o))
// console.log(Number(o))
// console.log(Boolean(o))
//
// let a
// let b = 40, c = b + 20
//
// const PI = 3.14
//
// const POSITIVE_INFINITY = Infinity
//
// console.log(a)
// console.log(c)
//
// PI = null => TypeError
