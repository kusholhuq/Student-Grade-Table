var table = document.querySelector("table");
var gradeTable = new GradeTable(table);

//might need to make this just the span badge not the whole header
var header = document.querySelector("header");
var pageHeader = new PageHeader(header);

var app = new App(gradeTable, pageHeader);
app.start();
