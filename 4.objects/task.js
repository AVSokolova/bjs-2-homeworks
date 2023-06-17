function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []
}

anna = new Student("Anna", "female", 20);
john = new Student("John", "male", 21);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks")){
    this.marks = marks;
  }
}

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty("marks") || this.marks.length === 0){
    return 0;
  }
  sumOfMarks = this.marks.reduce((sum, currentMark) => sum + currentMark);
  return sumOfMarks/this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  this.excludeReason = reason;
}
