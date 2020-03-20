class App{
  handleGetGradesError(error){
    console.error(error);
  }
  handleGetGradesSuccess(grades){
    //console.log(grades);
    //can remove this console log later
    this.gradeTable.updateGrades(grades)
  }
  constructor(gradeTable){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
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
  }
}
