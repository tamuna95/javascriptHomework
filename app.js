
// 1. მოცემულია მასივი:
//  py
//  let array = [5, 10, 25, 100, 6, 18];
//  map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 2-ზე გაყოფილი;
 
let array = [5, 10, 25, 100, 6, 18];
let result = array.map(function(item){
    return item/2
    
})
console.log(result)

//  2. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36;
//   მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): jaavscript და python;
let mas = [5,25,89,120,36]
mas.push('javascript','python')
console.log(mas)
//   მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
mas.unshift('html','css')
console.log(mas)
//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
var count = 0
mas.forEach(function(item){
  count ++;

})
console.log(count)
//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
mas.shift()
mas.pop()
//   დაბეჭდეთ მასივისი ახალი ელემენტები.
console.log(mas)





// 3.მოცემულია მასივი:
// let array = ["hello", "javscript", "html", 43, "css", "scss", 76, "boostrap", 88, 59];

// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო სტრინგები;

let array1 = ["hello", "javscript", "html", 43, "css", "scss", 76, "boostrap", 88, 59];
var y = array1.filter(item => typeof item === "string")



console.log(y)

//4. მოცემულია მასივი: 
// let array = ["hello", "javscript", "html", 43, "css", "scss", 76, "boostrap", 88, 59];

// filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; 

let array2 = ["hello", "javscript", "html", 43, "css", "scss", 76, "boostrap", 88, 59];
var y1 = array2.filter(item => typeof item !== "string")
console.log(y1)

// 5.მოცემულ მასივში გვაქვს 5 ობიექტი; 
// გამოიტანეთ ის ქალაქი, რომლის მოსახლეობა 3 მილიონზე ნაკლებია - filterის გამოყენებით;
let cities = [
    {name: 'los angeles', population: 3792621},
    {name: 'new york', population: 8175133},
    {name: 'chicago', population: 2695598},
    {name: 'houston', population: 2099451},
    {name: 'philadelphia', population: 1526006}
];

let y3 = cities.filter(item => item.population < 3000000)

for(let i in y3){
  console.log(y3[i].name)
}
// 6.შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;
let fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი']

//   გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
var fruitsCount = 0
fruits.forEach(function(item){
  fruitsCount ++;

})
console.log(fruitsCount)
//   მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
fruits.push('ვაშლი','ანანსი')
console.log(fruits)
//   მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
fruits.splice(0,1,'საზამთრო')
console.log(fruits)

//   გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
var fruitsCount1 = 0
fruits.forEach(function(item){
  fruitsCount1 ++;

})
console.log(fruitsCount1)


//   წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
fruits.splice(0,1)
console.log(fruits)
fruits.splice(fruits.length-1,1)

console.log(fruits)

//   გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში;

var fruitsCount2 = 0
fruits.forEach(function(item){
  fruitsCount2 ++;

})
console.log(fruitsCount2)
