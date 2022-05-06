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
*
* 	В качестве типа для представления текста используется строка.
* Строка это неизменяемая упорядоченная последовательность символов.
* Строки используют индексацию начинающуюся с нуля.
* Чтобы создать строковый литерал нам необходимо поместить символы внутрь совпадающей пары
* одинарных, двойных или обратных кавычек. Строки в обратных кавычках допускают наличие в
* строковых литералах встроенных(интерполированных) выражений JS.
* Строковый литерал можно разбивать на множество строк помещая в конец каждой строки кроме последней
* обратную косую черту. Ни обратная косая черта, ни находящийся за ней разделитель строк, не входят
* в состав строкового литерала. Синтаксис с обратными кавычками разрешает разбивать строки на множество строк
* и в этом случае перенос строки будет являться частью строкового литерала.
* Символ обратной косой черты имеет специальное назначение в строках JS. В сочетании со следующим за ним
* символом он представляет символ который по другому не может быть представлен внутри строки. Например
* \n является управляющей последовательностью которая представляет символ новой строки. Помимо \n
* есть также такие управляющие последовательности как \t - символ табуляции,
* \' - символ одинарной кавычки, \" - символ двойной кавычки, \\ - символ обратной косой черты и другие.
*
* 	В JS есть возможность конкатенировать(объединять) строки при помощи оператора +. Если оператор +
* использовать с числами, то он складывает их, но если данный оператор использовать со строками, то
* он их объединит. В JS можно сравнивать строки при помощи обычных операторов сравнения. Две строки равны,
* если они содержат в точности одну и ту же последовательность. Для определения длины строки
* можно воспользоваться свойством length. В дополнение к свойству length строки располагают такими методами
* как slice(0, [7]), split(' '), indexOf('a', [3]), lastIndexOf('a'), trim(),
* includes('a'), trimEnd(), trimStart(), padEnd(10, ['*']), padStart(10, ['*']),
* toLowerCase(), toUpperCase(), startsWith('start'), endsWith('end'),
* replace('a', 'b'), repeat(3) и другие. Не стоит забывать что строки неизменяемы и методы по типу
* toLowerCase() и replace() возвращают новые строки и не модифицируют строки на которых они были вызваны.
* Для получения символа строки можно воспользоваться таким синтаксисом - '10a'[1] - '0'.
*
* 	Строковый литерал можно создать при помощи обратных кавычек. Такие литералы называются шаблонными.
* Шаблонные литералы позволяют включать в них произвольные выражения JS. Финальное значение шаблонного литерала
* вычисляется за счет оценки всех включенных выражений, преобразовании их в строки и объединенией их
* с строковыми литералами внутри обратных кавычек. В шаблонном литерале все что расположено между символами ${}
* воспринимается как выражение JS. Если перед открывающей обратной кавычки стоит имя функции, то все содержимое
* обратных кавычек будет переданно функции как аргумент - FUNCTION_NAME`10`.
*
* 	В JS определен тип данных, который называется регулярным выражением и предназначен для описания и
* сопоставления с шаблонами в строках текста. Текст между парой обратных косых черт образует литерал
* регулярного выражения. Вторая косая черта в паре также может сопровождаться одной и более букв, которые
* модифицируют смысл шаблона.
*
* 	Булевское значение представляет истинность или ложность. Существует только два возможных значения этого
* типа - true и false. Булевские значения обычно являются результатом сравнений. Любое значение в JS
* может быть преобразованно в булевское значение. null, undefined, NaN, 0, '' преобразуются в false,
* все остальные значения в true. Булевские значения имеют метод toString() который можно использовать для
* преобразования их в строки.
*
* 	null и undefined служат признаком отсутствия значения и часто могут использоваться взаимозаменяемо.
* Операция равенства == считает их равными. Оба значения при преобразовании в булевский тип станут false.
* Ни null, ни undefined не имеют свойств либо методов. На самом деле при использовании . или [] для
* доступа к какому-то свойству или методу данных значение приводят к ошибке. Значение undefined
* представляет более глубокий вид отсутствия. Это значение переменных которым не присвоенно никакого
* значения, значение которое мы получаем при попытке получить свойство объекта или элемент массива
* которых не существует, значение возвращаемое функцией которая явно не возвращает никакого значения и
* параметра функции для которого не было переданно аргумента.
*
* 	Символ может выступать в качестве ключа объекта. Символ можно создать при помощи функции Symbol()
* которая принимает необязательный строковый аргумент и возвращает уникальное
* значение, если предоставить строковый аргумент, то переданная строка будет включена в выход метода
* toString(), но тем не менее вызов Symbol() с одной и той же строкой вернет два совершенно разных
* значения. В JS определен глобальный реестр символов. Symbol.for() принимает в качестве аргумента
* строку и возвращает значение ассоциированное с переданной строкой, если такого нет, тогда создается
* и возвращается новое значение. Symbol() совершенно отличается от Symbol.for(). Symbol() всегда
* возвращает уникальное значение. Symbol.for() в свою очередь всегда возвращает то же самое значение
* когда вызывается с одной и той же строкой. Symbol.keyFor() принимат в качестве аргумента символ
* созданный при помощи Symbol.for() и возвращает строку переданную при создании данного символа.
*
* 	Глобальный объект это обыкновенный объект JS. Его свойствами являются глобально определенные
* идентификаторы. Когда интерпретатор JS запускается он создает новый глобальный объект и
* предоставляет ему начальный набор свойств которые определяют глобальные константы, глобальные
* функции, функции конструкторы и глобальные объекты. В node глобальный объект имеет свойство
* global значением которого является сам глобальный объект. В браузере глобальным объектом является
* Window который располагает свойством window значением которого также является сам глобальный объект.
* В качестве стандартного способа ссылки на глобальный объект в любом контексте есть свойство globalThis.
*
* 	Существует фундаментальное отличие между элементарными значениями и объектами.
* Элементарные значения являются неизменяемыми, никакого способа модифицировать элементарное значение
* не предусмотрено. Объекты изменяемы, их значения можно модифицировать. Элементарные значения сравниваются
* по величине, два значения будут одинаковы, если они имеют одну и ту же величину. В случае сравнения двух
* строковых значений JS трактует их как равные тогда и только тогда, когда они имеют одну и ту же последовательность
* символов. Объекты не сравниваются по величине, два отдельных объекта не равны, даже когда имеют те же самые
* свойства и методы. Объекты являются ссылками и два объекта будут равны только если они ссылаются на один
* и тот же объект. Объекты передаются по ссылке, элементарные типы по значению.
*		Если интерпретатор JS пожелает иметь строку, тогда любое переданное значение будет
* преобразовано в строку. Если число, то попробует преобразовать представленное значение
* в число (или в NaN когда осмысленное преобразование невозможно). При преобразовании
* в булевское значения null, undefined, 0, -0, '', NaN преобразуются в false,
* все остальные значения в true. Все элементарные типы при преобразовании в строку
* просто становятся строкой (String(10) === '10'). При преобразовании в число
* true преобразуется в 1, false в 0, undefined в NaN, null в 0. Строки которые
* могут быть разобраны как числа, преобразуются в эти числа. Начальные и конечные
* пробелы разрешены, но наличие начальных или конечных непробельных символов,
* приведет к тому что результатом вычисления будет NaN. При преобразовании пустого массива в строку
* результатом будет пустая строка, при преобразовании в число результатом будет
* 0 и при преобразовании в булевское значение результатом будет true. При преобразовании
* масива с одним числовым элементом в строку результатом будет строка с этим числом, при
* преобразовании в число результатом будет число которое содержится в данном массиве и
* при преобразовании в логическое значение результатом будет true. При преобразовании
* в строку массива с двумя или более элементов результатом будет строка где
* элементы разделены запятой, при преобразовании в число результатом будет NaN и при
* преобразовании в булевское значение результатом будет true.
*
* 	Оператор === не считает свои операнды равными, если они не относятся к
* одному и тому же типу. Помимо оператора ===, есть также оператор == который
* приводит операнды к одному типу, а уже после этого сравнивает их. Оператор
* == никогда не пытается преобразовать свои операнды в булевские значения.
*
* 	Простейший способ выполнения явных преобразований типов предусматривает применение функций
* String(), Number() и Boolean(). Помимо этого определенные операторы JS выполняют неявные
* преобразования и мы можем использовать их явно в целях преобразования типов. Если одним операндом
* оператора + является строка, то второй операнд также будет преобразован в строку. Унарный оператор
* + преобразует операнд в число. Оператор ! преобразует операнд в булевское значение и инвертирует его
* (!true === false). Любое значение кроме null и undefined имеет метод toString(), результат которого
* обычно будет таким же, как возвращаемый функцией String(). Метод toString() класса Number принимает
* необязательный аргумент, где задается основание системы счисления (по умолчанию 10). В классе
* Number определены три метода для преобразования чисел в строки которые предоставляют контроль
* над количеством десятичных разрядов или количеством значащих цифр в выводе. toFixed() преобразует
* число в строку с указанным количеством цифр после десятичной точки. toPrecision() преобразует число в
* строку с указанным количеством значащих цифр. Он использует экспоненциальную запись, если количество
* цифр недостаточно велико, чтобы полностью отобразить целую часть числа. toExponential() преобразует
* число в строку, применяя экспоненциальную запись с одной цифрой перед десятичной точкой и указанным
* количеством цифр после десятичной точки. Функция Number работает только с десятичными целыми числами
* и недопускает наличия конечных символов которые не относятся к литералу. Глобальные функции parseInt()
* и parseFloat() более гибкие. parseInt() разбирает только целые числа, в то время как parseFloat()
* целые числа и числа с плавающей точкой. Обе функции пропускают начальные пробельные символы, разбирают
* столько числовых символов, сколько могут и игнорируют все что находится за ними. Если первый непробельный
* символ не является частью допустимого числового литерала, то они возвращают NaN. Функция parseInt()
* принимает необязательный второй аргумент, указывающий основание системы счисления числа, которое подлежит
* разбору. Допустимые значения находятся между 2 и 36. Если строка начинается с 0x то parseInt() интерпретирует
* ее как шестнадцатеричное число.
*
* 	Одна из причин сложности преобразования объектов в элементарные значения связана с тем, что
* некоторые типы объектов имеют несколько элементарных представлений. В JS определены три фундаментальных
* алгоритма для преобразования объектов в элементарные значения. prefer-string возвращает элементарное
* значение отдавая предпочтение строке, если такое преобразование возможно. prefer-number возвращает
* элементарное значение отдавая предпочтение числу, если такое преобразование возможно. no-preference
* этот алгоритм не отдает никаких предпочтений относительно того, какой тип элементарного значения желателен
* и классы могут определять собственные преобразования. Все встроенные типы JS реализуют данный алгоритм
* как prefer-number. Исключение служит класс Date, он реализует его как prefer-string. Все объекты
* наследуют два метода преобразования toString() и valueOf(). Задача метода toString()
* возвратить строковое представление объекта. Стандартный метод toString() возвращает
* не особо интересное значение [object Object], но многие классы определяют более специфичные методы
* toString(). Например метод toString() класса Array преобразует каждый элемент в строку и объединяет
* результирующие строки вместе разделяя их запятыми. Задача метода valueOf() определена меннее четко,
* предполагается что он должен преобразовывать объект в элементарное значение, которое представляет
* объект, если такое существует. Объекты являются составными значениями, причем большинство объектов
* на самом деле не могут быть представлены единственным элементарным значением, а потому стандартный
* метод valueOf() возвращает сам объект вместо элементарного значения. Классы оболочки String, Number и
* Boolean определяют методы valueOf() которые просто возвращают содержащееся внутри элементарное значение.
* Алгоритм prefer-string сначала испытывает метод toString(). Если он определен и возвращает элементарное
* значение, тогда интерпритатор JS использует это значение (даже когда оно отлично от строки). Если
* метод toString() не определен или он возращает объект, то интерпретатор JS испытывает метод valueOf().
* Если он определен и возвращает элементарное значение, тогда интерпретатор JS использует это значение.
* Иначе преобразование терпит неудачу с выдачей ошибки типа TypeError. Алгоритм prefer-number работает
* аналогично алгоритму prefer-string, но первым испытывается valueOf(), а вторым toString(). Алгоритм
* no-preference зависит от класса преобразуемого объекта. Если объект относится к классу Date, тогда
* интерпретатор использует алгоритм prefer-string. Для любого другого объекта интепретатор JS использует
* алгоритм prefer-number.
*
* 	Одной из наиболее фундаментальных методик в программировании является использование имен (идентификаторов)
* для представления значений. Привязка идентификатора к значение дает нам способ ссылки на это значение.
* Привязывая значение идентификатору мы обычно говорим что присваиваем значение переменной.
* Термин переменная подразумевает возможность привязать новое значение к идентификатору. Если мы присваиваем
* значение идентификатору на постоянной основе, тогда такой идентификатор будет называться константой.
* Прежде чем переменную и константу можно будет использовать ее необходимо объявить при помощи ключевых слов
* let и const.
*
* 	Перменная объявляется при помощи ключевого слова let. В одном операторе let можно объявить сразу несколько
* переменных. Хорошей практикой считается присваивать начальное значение переменным при их объявлении, когда
* это возможно. Если не указывать начальное значение, то переменная объявится, но ее значением будет undefined.
* Константа объявляется при помощи ключевого слова const. При создании константы необходимо указать значение.
* Значение константы изменяться не может и любая попытка изменения приведет к ошибке типа TypeError. Общепринятое
* (но не универсальное) соглашение предусматривает объявление констант с использованием идентификаторов,
* содержащих все заглавные буквы по типу PI или POSITIVE_INFINITY, как способ их различения от переменных.
* */

// 79 < Когда использовать const >
