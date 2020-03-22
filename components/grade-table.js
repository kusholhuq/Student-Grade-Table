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
  renderGradeRow(data, deleteGrade){
    var delRow = document.createElement("tr");

    var delName = document.createElement("td");
    var delCourse = document.createElement("td");
    var delGrade = document.createElement("td");
    var delBtnTd = document.createElement("td");
    var delButton = document.createElement("button");

    delName.textContent = data.name;
    delCourse.textContent = data.course;
    delGrade.textContent = data.grade;
    delButton.textContent = "DELETE";
    delButton.classList.add("btn btn-secondary");
    delButton.addEventListener("click", function(){
      deleteGrade(data.id);
    })

    delRow.appendChild(delName);
    delRow.appendChild(delCourse);
    delRow.appendChild(delGrade);
    delBtnTd.appendChild(delButton);
    delRow.appendChild(delBtnTd);

    return delRow;
  }
}
