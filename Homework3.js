
// 1. Создадим функцию для вычисления площади поверхности и объёма куба
function calculateVolumeAndArea(x){
    if (Number.isInteger(x)) // Проверяем, что число, которое попадает в функцию действительно является целым
        console.log('Объём куба: ' + x ** 3 + ', площадь всей поверхности: ' + 6 * (x ** 2))
    else // В случае, если это не так, то выводим сообщение об ошибке
        console.log('При вычислении произошла ошибка')
}

// Зададим тестировщики
calculateVolumeAndArea(5)
calculateVolumeAndArea(15)  
calculateVolumeAndArea(15.5)  
calculateVolumeAndArea('15')
calculateVolumeAndArea(-15)  

// 2. Создадим функцию для вычисления номеру купе по переданному ей номеру
function getCoupeNumber(x){
    if (!Number.isInteger(x) || x < 0){                                        //Делаем проверку того, что переменная является целым неотрицательным числом 
        console.log("Ошибка. Проверьте правильность введенного номера места")  
    }
    else if (x > 0 && x <= 36){                                                //Делаем проверку на то, что наше число лежит в нашем интервале
        console.log(Math.ceil(x / 4))
    }
    else                                                                       //Иначе
        console.log("Таких мест в вагоне не существует")
}

// Зададим тестировщики
getCoupeNumber(33)
getCoupeNumber(7) 
getCoupeNumber(300)  
getCoupeNumber(0)  
getCoupeNumber(7.7)  
getCoupeNumber(-10)  
getCoupeNumber('Hello')  

// 3. Создадим функцию, которая удваивает все числа в массиве, а ко всем строкам добавляет приписку " - done"
const data = [5, 10, "Shopping", 20, "Homework"]

function changeData(data){
    data.forEach((x, i, arr) => {  //Воспользуемся методом forEach, чтобы пройтись по каждому элементу массива
        if(typeof(x) === 'number') //Вводим проверку на число
            arr[i] = x * 2
        else                       //Иначе
            arr[i] = x + ' - done'
    })
}

// Проверим корректность работы функции
changeData(data)
console.log(data)

// 4. Создадим функцию, которая переворачивает массив
data = [5, 10, "Shopping", 20, "Homework"]

function reverseData(data){
    len = data.length - 1
    for (let i = 0; i <= Math.floor(len / 2); i++){
        a = data[i] 
        data[i] = data[len - i]
        data[len - i] = a
    }
}

// Проверим корректность работы функции
reverseData(data)
console.log(data)

// 5. Создадим функцию, которая по заданному массиву из имён членов семьи выводила бы их в консоль
family = ['Ann', 'Karen', 'Dan', 'Simon']
//family = []

function showFamily(family){
    if(!family.length){            //Вводим проверку на то, что массив не пустой 
        console.log('Семья пуста')
        return                     //Если массив пустой, то дальнейшее выполнение функции бессмысленно (возвращаемся)
    }
    s = ''
    family.forEach((member) => {   //Если массив не пустой, то проходимся по нему при помощи метода forEach и прибавляем по члену семьи в переменную строки
        s = s + ' ' + member
    })
    console.log('Семья состоит из:' + s) //Выводим всё в консоль
}

// Проверим корректность работы функции
showFamily(family)

//6. 
const restorantData = {
    menu: [
      {
        name: 'Salad Caesar',
        price: '14$',
      },
      {
        name: 'Pizza Diavola',
        price: '9$',
      },
      {
        name: 'Beefsteak',
        price: '17$',
      },
      {
        name: 'Napoleon',
        price: '7$',
      },
    ],
    waitors: [
      { name: 'Alice', age: 22 },
      { name: 'John', age: 24 },
    ],
    averageLunchPrice: '20$',
    openNow: true,
  }
  
  function isOpen(prop) {
    let answer = ''
    answer = prop ? 'Открыто' : 'Закрыто' // Ошибка - некорректное использование тернарного оператора (не был реализован возврат значения в переменную)
    return answer
  }
  
  console.log(isOpen(restorantData.openNow))

  function isAverageLunchPriceTrue(fDish, sDish, average) {                                             // Данные о ценах в объекте представлен в виде строк, а не чисел =>
    if (Number(fDish.price.slice(0, -1)) + Number(sDish.price.slice(0, -1)) < +average.slice(0, -1)) {  // Ошибка - неправильная работа с типами (Сложение строки с числом/сравнение двух строк/сравнение числа и строки)
      return 'Цена ниже средней'
    } else {
      return 'Цена выше средней'
    }
  }

  console.log(
    isAverageLunchPriceTrue(
      restorantData.menu[1],
      restorantData.menu[2],
      restorantData.averageLunchPrice
    )
  )

  function transferWaitors(data) {
    const copy = structuredClone(data)         //Ошибка - в функции использовалось частичное клонирование (объекты скопировались вместе с ссылками на значения в исходном), в то время как должно было использоваться полное 

    copy.waitors[0] = { name: 'Mike', age: 32 }
    return copy
  }
  console.log(transferWaitors(restorantData))
  console.log(restorantData.waitors)

//** Усложнённая задача. Создаём функцию, которая получая некоторое число n строила равнобедренный треугольник из n строк
function triangle(n){
    s = ''
    for (i = 0; i <= n; i++){               //Задаём цикл для "отрисовки" n строк
        for(j = 0; j <= n - i; j++){            //Задаём цикл для отступов в строке перед звёздочками (чтобы они были отцентрованы)
            s = s + ' '
        }
        for(j = 1; j <= (2 * i - 1); j++){      //Задаём цикл для отрисовки звёздочек в строке
            s = s + '*'
        }
        s = s + '\n'                            //Переходим на новую строку
    }
    console.log(s)
}

//Проверим корректность работы функции
triangle(8)
