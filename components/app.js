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
  constructor(gradeTable, pageHeader){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
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
