/*
* 	Типы JS можно разделить на две категории - элементарные и объектные.
* К элементарным типам относятся строки, числа, логические значения, null, undefined,
* символы и большие числа.
* Любые значения которые не относятся к элементарному типу являются объектами.
*
* 	Формально методы в JS есть только у объектов, но строки, числа, символы,
* логические значения и большие числа ведут себя так, как-будто они располагают методами.
* В JS нельзя вызывать методы только у null и undefined.
*
* 	Объектные типы являются изменяемыми, элементарные - нет.
* Мы можем изменять свойства объектов и элементы массивов, но изменить к примеру
* символ строки мы не можем.
*
* 	JS свободно преобразует значения из одного типа в другой.
* К примеру если программа ожидает строку, а мы передаем ей число, то она преобразует
* это число в строку.
*
* 	Переменную в JS можно объявить при помощи ключевого слова let,
* константу при помощи ключевого слова const.
*
* 	К типу number относятся целые и вещественные числа.
* JS позволяет представлять целые числа в диапазоне от -2**53 до 2**53 включительно
* без потери точности. В случае использования целочисленных значений превышающих указанный
* предел может теряться точность в хвостовых числах.
* Когда число находится прямо в программе, оно называется числовым литералом.
* Любой числовой литерал может начинаться со знака минус. Числовой литерал в начале которого
* находится минус, является отрицательным числом.
*
* 	Помимо десятичных целочисленных литералов JS распознает числа в двоичном(0b<n>), восьмеричном(0o<n>)
* и шестнадцатеричном(0x<n>) представлении.
*
* 	Вещественное значение представляется как целая часть числа, десятичная точка и дробная часть числа - 10.5.
* Числовые литералы могут быть представлены в экспоненциальной записи - <number>e+-n || 10e2(1000) где
* e = 10, n = степень в которую будет возводиться 10. Знак перед n можно опустить.
*
* 	В длинных числовых литералах можно применять подчеркивания чтобы разбивать их на порции - 1_100_000.
*
* 	Программы JS при работе с числами используют арифметические операции которые предоставляет язык.
* К ним относятся +(сложение), -(вычитание), /(деление), *(умножение), %(остаток от деления) и
* **(возведение в степень). Помимо этих операций JS предоставляет объект Math который содержит в
* себе множество свойств и методов для более сложных математических действий, среди которых есть
* такие методы как pow(число, степень)(возведение в степень), max(числа)(нахождение наибольшего числа),
* min(числа)(нахождение наименьшего числа), round(число)(округление в ближайшую сторону),
* ceil(число)(округление в большую сторону), floor(число)(округление в меньшую сторону),
* random()(псевдослучайное число от 0 до 1 не включительно), Math.abs(число)(абсолютное значение числа) и другие.
*
* 	Арифметические действия не генерируют ошибки в случаях
* переполнения(результат выполнения превышает наибольшее представимое число или когда
* абсолютная величина отрицательного значения превышает абсолютную величину
* наибольшего представимого отрицательного числа),
* потери значимости(результат выполнения находится ближе к нулю чем наименьшее представимое число)
* или деления на ноль. В случае переполнения результатом вычисления будет
* особое значение бесконечности Infinity/-Infinity. В случае потери значимости результатом вычесления
* будет ноль. Деление на ноль в JS ошибкой не является, результатом такого вычисления будет Infinity/-Infinity,
* но есть одно исключение, результатом деления нуля на ноль будет особое значение NaN(not a number || не число).
* Кроме того NaN также возникает при делении Infinity/-Infinity на Infinity/-Infinity, взятия
* квадратного корня из отрицательного числа или применении арифметических операций с нечисловыми операндами
* которые не могут быть преобразованы в числа.
*
* 	Для хранения положительной бесконечности и значения <не число> в JS предопределены глобальные константы
* Infinity и NaN. Значения которых также доступны в виде свойств объекта Number - Number.POSITIVE/NEGATIVE_INFINITY,
* Number.NaN. Значение NaN обладает весьма необычной особенностью, оно не равно никакому другому
* значению включая самого себя. Чтобы выяснить является ли переменная NaN, можно воспользоваться такой записью -
* number !== number, если результатом будет true значит number содержит в себе NaN. Либо можно воспользоваться
* методом isNaN(значение) объекта Number, данный метод возвращает true, если аргумент является NaN. Поимимо
* этого в JS есть также глобальная функция isNaN(значение), которая похожа на метод isNaN(значение), но
* она также возвращает true, если аргумент имеет нечисловое значение и не может быть преобразован в число.
* Метод isFinite(значение) объекта Number вовзращает true, если аргумент представляет собой число отличающееся
* от NaN, Infinity и -Infinity. Глобальная функция isFinite(значение) возвращает true, если аргумент
* является или может быть преобразован в конечное число. Отрицательный ноль равен положительному нулю, т.е.
* два значения почти не различимы, за исключением случая когда эти значения выступают в качестве делителя.
*
* 	Вещественных чисел бесконечно много, но с помощью формата плавающей точкий JS может быть
* представлено только конечное их число. Это означает что при работе с вещественными числами
* в JS представление числа часто будет аппроксимацией фактического числа.
* Двоичные представления чисел с плавающей точкой не способны точно представить даже такие простые
* числа как .1.
*
* 	BigInt - это числовой тип с целыми значениями. Значения BigInt могут иметь тысячи и даже миллионы цифр.
* Литерал BigInt записывается как строка цифр за которой следует буква n в нижнем регистре. Арифметические
* действия с BigInt работают подобно арифметическим действиям с обыкновенными числами, за исключением
* того, что при делении BigInt отбрасывает любой остаток и округляет в меньшую сторону. Смешивать
* операнды BigInt с обычными числовыми операндами нельзя, исключением являются операторы сравнения.
* Ни один из методов объекта Math не принимает в качестве аргумента значения типа BigInt.
* Для преобразования обычных чисел и строк в BigInt можно воспользоваться функцией BigInt(значение).
*
* 	В JS определен класс Date для представления и манипулирования числами, которые представляют
* дату и время. Экземпляры класса Date являются объектами, но они также имеют числовое представление
* в виде отметок времени которые указывают на количество миллисекунд прошедших со дня 1 января 1970 года.
* */

// 56 || Текст