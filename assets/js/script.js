/* ESERCIZIO 1 */

class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    AgeDifference(utente1, utente2) {
        let resultAgeDifference = utente1.age - utente2.age
        if (resultAgeDifference >= 0) {
            console.log(`${utente1.firstName} è più vecchio di ${utente2.firstName}`)
        }
        else {
            console.log(`${utente2.firstName} è più vecchio di ${utente1.firstName}`)
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
    sameOwnerName(owner1,owner2) {

    }
}

const buttonSubmit = document.querySelector('button')

buttonSubmit.addEventListener('click', () => {
    const namePet = document.querySelector('.namePet').value
    const nameOwner = document.querySelector('.nameOwner').value
    const speciesPet = document.querySelector('.speciesPet').value
    const breedPet = document.querySelector('.breedPet').value
    const animale1 = new Pet(namePet, nameOwner, speciesPet, breedPet)
    return animale1
})