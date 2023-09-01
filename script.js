const fullname = 'Oluwadamilare'
const school = 'gomycode'
const course = 'fullstack Web Development'
const instructor = 'king lee'
const sentence = `my name is ${fullname}, i attend ${school}, i am currently studying ${course}, my instructor is ${instructor}.`

const sentence2 = 'my name is' + fullname + ', i attend ' + school + ', i am currently studying ' + course + ', my instructor is ' + instructor + ','
console.log(sentence)

function agechecker(age) {
 (age <18) ? console.log("you are not eligible to vote") : console.log("you are eligible to vote")    
}

agechecker(16)
agechecker(23)
 
function agecheckerpro(age) {
 (age <=17) ? console.log("you are not eligibleto vote") :
  (age >= 18 && age <= 35) ? console.log("your future is in your hands") :
   (age >= 36 && age <= 65) ? console.log("please do not implicate us") :
    console.log("please stay in your house")    
}

agecheckerpro(14)
agecheckerpro(28)
agecheckerpro(65)
agecheckerpro(99)

function movieticket(age) {
(age <= 6) ? console.log("sell ticket for free") :
(age >= 7 && age <= 13) ? console.log("sell ticktets for 500") :
(age >= 14 && age <=17) ? console.log("sell tickets for 1000") :
(age >= 18 && age <= 35) ? console.log("sell tickets for 2000") :
console.log("sell tickets 5000")
}

movieticket(3)
movieticket(10)
movieticket(15)
movieticket(25)
movieticket(40)

const pprofit = (cp,sp) => {
    let profit = sp-cp
    return (profit/cp) *100
}

pprofit(4000,9000)
console.log(pprofit(4000,9000))

const nairaConverter = (naira) => {
    let dollar = naira / 776
    return dollar 
}
nairaConverter(1000)
console.log(nairaConverter(1000))

const areaOfaCircle = () => {
 let diameter = 200
 let r = diameter / 2
 let pie = 3.14
 let area = pie * (r**2)
 return area
}
areaOfaCircle(500)
console.log(areaOfaCircle(500))

const germanCars = ["bmw", "benz", "volvo", "volkswagen", "audi", "porsche"]
const nigerianCars = ["innoson", "nord"]
const allCars =  germanCars.concat(nigerianCars);
console.log(allCars)

const allCars2 = [...germanCars,...nigerianCars]
console.log(allCars2)

