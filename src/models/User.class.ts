export class User {
    //Propiedades // Atributos
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    birthday: Date;

    //Metodos // Funciones
    constructor(email: string, password: string, firstname: string, lastname: string, birthday: Date) {
        this.email = email;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
    }
}
