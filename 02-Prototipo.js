//Prototipo de clase
function Student(name, age, certifyCourses){
    this.name = name;
    this.age = age;
    this.certifyCourses = certifyCourses;
}
Student.prototype.addCertify = function (course) {
    this.certifyCourses.push(course);
}
//Instacia de prototipo
const jorge = new Student ('Jorge', 21, ['HTML', 'CSS', 'JS']);
jorge.addCertify('PHP');
console.log(jorge);