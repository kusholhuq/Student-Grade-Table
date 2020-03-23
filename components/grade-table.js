class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades){
    console.log(grades);
    var tbody = this.tableElement.querySelector("tbody");
    tbody.innerHTML = "";
    for (var i = 0; i<grades.length; i++){
      tbody.appendChild(this.renderGradeRow(grades[i], this.deleteGrade));
    }
    if(grades.length){
      this.noGradesElement.className="d-none";
    }
    else{
      this.noGradesElement.className="";
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
    delButton.classList.add("btn");
    delButton.classList.add("btn-secondary")
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
