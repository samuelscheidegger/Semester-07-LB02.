
*/
const genderType = ["weiblich","männlich"];

let person2 = {
    firstName: "Gertrud",
    lastName: "Müller",
    gender: genderType[0],
    birthday: new Date("2002-03-01"),
    getFullName(){
        return `Der Name ist ${this.firstName} ${this.lastName}.`
    },
    getGender(){
        return `${this.lastName} ist ${this.gender}`
    },
    getBirthday(){
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return `${this.lastName} ist am ` +
            `${this.birthday.toLocaleDateString('de-CH',options)} geboren.`
    },
    getAge(){
        let ageDifMs = Date.now() - this.birthday;
        let ageDate = new Date(ageDifMs); // miliseconds from epoch
        return  `${this.lastName} ist ${Math.abs(ageDate.getUTCFullYear() - 1970)} alt.`
    }
}


//Ausgabe des vollen Namens auf der Console
console.log(person2.getFullName());
//Ausgabe des Geschlechts
console.log(person2.getGender());
//Ausgabe des Geburtstags
console.log(person2.getBirthday());
//Ausgabe des Alters
console.log(person2.getAge());

