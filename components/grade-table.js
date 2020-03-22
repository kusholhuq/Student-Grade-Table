class GradeTable{
  constructor(tableElement){
    this.tableElement = tableElement;
  }
  updateGrades(grades){
    console.log(grades);
    var tbody = this.tableElement.querySelector("tbody");
    tbody.innerHTML = "";
    for (var i = 0; i<grades.length; i++){
      var row = document.createElement("tr");

      var name = document.createElement("td");
      var course = document.createElement("td");
      var grade = document.createElement("td");
      //maybe make a del button var here?

      name.textContent = grades[i].name;
      course.textContent = grades[i].course;
      grade.textContent = grades[i].grade;

      row.appendChild(name);
      row.appendChild(course);
      row.appendChild(grade);

      tbody.appendChild(row);
    }
  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
}
