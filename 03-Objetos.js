//Objeto literal
const natalia = {
    name: 'Natalia',
    age: 21,
    certifyCourses: ['HTML', 'CSS', 'JavaScript'],
    //Metodo de clase
    certifyCourse(course){
        this.certifyCourses.push(course);
    }
};
natalia.certifyCourses.push('Responsive design');
//Agregar el curso que apruebe con el metodo push
natalia.certifyCourse("matematicas");
console.log(natalia.certifyCourses);