class App{
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    //console.log(grades);
    //can remove this console log later
    this.gradeTable.updateGrades(grades);
    var sumOfGrades = 0;
    for(var k = 0;k<grades.length; k++){
      sumOfGrades = sumOfGrades + grades[k].grade;
    }
    var computedAverage = sumOfGrades/grades.length;
    this.pageHeader.updateAverage(computedAverage);
  }
  constructor(gradeTable, pageHeader, gradeForm){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }
  getGrades(){
    $.ajax({
      method: "GET",
      headers: {"X-Access-Token":"xxmeSwK0"},
      url: "https://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  createGrade(name, course, grade){
    console.log(name, course, grade);
    $.ajax({
      method: "POST",
      headers: {"X-Access-Token":"xxmeSwK0"},
      url: "https://sgt.lfzprototypes.com/api/grades",
      //data:{"name":name, "course":course, "grade":grade} also works
      data: {name, course, grade},
      success:this.handleCreateGradeSuccess,
      error:this.handleCreateGradeError,
    })
  }
  handleCreateGradeError(error){
    console.error(error);
  }
  handleCreateGradeSuccess(){
    this.getGrades();
  }
  deleteGrade(id){
    console.log(id);
  }
  handleDeleteGradeError(error){
    console.error(error);
  }
  handleDeleteGradeSuccess(){
    this.getGrades();
  }
}
