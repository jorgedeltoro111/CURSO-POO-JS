//Prototipos pero con sintaxis de class
class Student{//Creacion de la clase estudiante
    constructor(name, age, certyfies){//Constructor con sus 3 parametros
        this.name = name;
        this.age = age;
        this.certyfies = certyfies;
    }
    addCertify(course){//Agregar un certificado nuevo
        this.certyfies.push(course);
    }
    showInformation(){//Metodo para mostrar la informacion
        console.log(`Nombre: ${this.name} Edad: ${this.age} Certificados: ${this.certyfies}`);
    }
};

const jorge = new Student('Jorge', 21, ['HTML', 'CSS', 'JS']);//Creacion del objeto
jorge.showInformation();//Informacion original
jorge.addCertify('PHP');//Agregamos un nuevo curso
jorge.showInformation();//Mostramos la nueva Informacion
