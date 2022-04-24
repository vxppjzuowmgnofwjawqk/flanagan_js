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
