/* ESERCIZIO 1 */

class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    AgeDifference(utente) {
        let name1 = this.firstName
        let name2 = utente.firstName
        let age1 = this.age
        let age2 = utente.age
        if (age1 > age2) {
            console.log(`${name1} è più vecchio/a di ${name2}`)
        }
        else if (age1 === age2) {
            console.log(`${name1} ha la stessa età di ${name2}`)
        }
        else {
            console.log(`${name1} è più piccolo/a di ${name2}`)
        }
    }
}

const Utente1 = new User('Francesco', 'Cannizzo', 26, 'Perugia')
const Utente2 = new User('Olga', 'Cannizzo', 22, 'Perugia')
const Utente3 = new User('Yulia', 'Nagovistyna', 36, 'Perugia')
const Utente4 = new User('Giuseppe', 'Cannizzo', 59, 'Perugia')
const Utente5 = new User('Elena', 'Nagovistyna', 61, 'Volgograd')

/* ESERCIZIO 2 */

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }

    checkOwner(pet2) {
        if (this.ownerName === pet2.ownerName) {
            console.log(`${this.petName} e ${pet2.petName} hanno lo stesso padrone!`)
        }
        else {
            console.log(`${this.petName} e ${pet2.petName} non hanno lo stesso padrone!`)
        }
    }
}

let schedePets = []

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()

    let namePet = document.querySelector('.namePet').value
    let nameOwner = document.querySelector('.nameOwner').value
    let speciesPet = document.querySelector('.speciesPet').value
    let breedPet = document.querySelector('.breedPet').value

    const newPet = new Pet(namePet,nameOwner,speciesPet,breedPet)

    schedePets.push(newPet)

    displayPet(newPet)
})

function displayPet(pet) {
    const petUl = document.querySelector('.schedeContainer')
    const petLi = document.createElement('li')
    petLi.textContent = `Pet name: ${pet.petName}, Owner name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`
    petUl.appendChild(petLi)
}