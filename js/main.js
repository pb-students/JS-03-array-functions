console.log("ZADANIE1----------------------------")
let arr1 = [9,4,5]
let arr2 = [1,4,2]
console.log(arr1)
console.log("-----------------------------------")
console.log(arr2)
console.log("-----------------------------------")
 let c = zad1((x, y) => {return {x: x, y: y}}, arr1, arr2)
 console.log(c)
console.log("ZADANIE2----------------------------")
 let z2 = zad2(7,3)
console.log(z2())
console.log(z2())
console.log(z2())
console.log(z2())
console.log(z2())

console.log("ZADANIE3----------------------------")
let d = zad3("idsauhuqwuIAIUIuiuiwiUHAuIUhAIudiowewfaddsuAFDAHI")
console.log(d)
console.log("ZADANIE4----------------------------")
let z4 = [79,5,6,73,0,5,3,8];
z4 = zad4(z4);
console.log(z4);
console.log("ZADANIE5------------------------------")
let z5 = new Array(20)
z5.fill(0)
z5 = zad5(z5)
console.log(z5)
function zad1(fun, arr1, arr2) {
  if (arr1.length !== arr2.length) throw console.log("Arrays have not the same length");
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    arr3[i] = fun(arr1[i], arr2[i])
  }

  return arr3;
}


function zad2(a, b) {
  let increment;

  if (a <= b) increment = true;
  else if (a > b) increment = false;

  return function () {
    if (increment) {
      if (a > b) {
        return NaN
      }
      return a++;
    }  else {
      if (a < b) {
        return NaN
      }
      return a--;
    }
  };
}

function zad3(writing) {
  let obj = {}
  let characters = writing.split('');
  characters.forEach(function (v) {
    if (v in obj) obj[v]++
    else obj[v] = 1
  });

  return obj
}

function zad4(tab) {
  let min = tab[0];
  let max = tab[0];
  tab = tab.filter((el, i) => {
    if (i % 2 === 0) {
      if (min > el) {
        min = el;
      }

      if (max < el) {
        max = el
      }
    }

    return i % 2 === 0
  })

  tab = tab.map(val => {
    if (val === min) {
      return 0
    } else if (val === max) {
      return 1
    } else {
      return (val / (val + 1)).toFixed(2)
    }
  })

  return tab
}

function zad5(tab) {
  tab = tab.map(v => Math.floor(Math.random() * 10 + 1))

  let evenNumberAmount = tab.reduce((counter, val) => {
    if (val % 2 === 0) return ++counter;
    else return counter
  }, 0)
  let product = tab.reduce((total, val) => total * val, 1)

  console.log("Ilość liczb parzystych to " + evenNumberAmount)
  console.log("Iloczyn wynosi " + product)
  return tab
}
