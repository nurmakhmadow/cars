let cars = ['17000', '37000', '13000', '12000', '14000', '5000', '5000', '10000', '43000', '80000', '2000', '3000']

let from = prompt('from $')
let up = prompt('to $')
 
if (from >= 10000 && up <= 16000){
    alert('Gentra and Cobalt or Nexia 3')
} else if (from <= 2000 && up <= 10000){
    alert('Tico and Matiz or Lada')
} else if (from >= 17000 && up <= 43000) {
    alert ('Black Gentra, Malibu, Equinox and Traiblazer')
}else if (from >= 44000 && up <= 80000){
    alert('Travers or Tahoe and Equinox redline ')
} else {
    alert('GM: Если ненравится наша машина то можешь посмотреть другие автосалоны, а если есть авто салон кроме, чувак!')
} 

