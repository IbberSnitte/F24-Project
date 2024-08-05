// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
import Gallery from './Gallery.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Gallery />);


let dataschemas = [
    { columnname: 'Name', connection: '1' }
];

var thereAreNoErrors = true;
var idHelper = 0;
var SQLTypeArray = ["BIGINT", "BINARY", "DATE", "FLOAT", "INT", "VARCHAR"];

const tableName1 = document.createElement("div");
tableName1.setAttribute("class", "tableName");
tableName1.setAttribute("id", "tableName1");
tableName1.textContent = "SchemaNameA.DatabaseNameA";
tableName1.contentEditable = "true";

const newTable = document.createElement("table");
newTable.setAttribute("id", "data1");
for (dataschema of dataschemas) {
    const newColumn = document.createElement("tc");
    columnID(newColumn);
    const newRow1 = document.createElement("tr");
    const newRow2 = document.createElement("tr");
    const newRow3 = document.createElement("tr");
    const tdColumnname = document.createElement("td");
    const tdDatatype = document.createElement("td");
    const tdConnection = document.createElement("td");
    tdColumnname.append(addNameField());
    tdDatatype.appendChild(addDataType());
    tdConnection.appendChild(addConnection());
    newRow1.appendChild(tdColumnname);
    newRow2.appendChild(tdDatatype);
    newRow3.appendChild(tdConnection);
    newColumn.appendChild(newRow1);
    newColumn.appendChild(newRow2);
    newColumn.appendChild(newRow3);
    newColumn.appendChild(deleteColumnButton());
    newTable.appendChild(newColumn);
}

const target = document.getElementById('tablePosition1');
target.appendChild(tableName1);
target.appendChild(newTable);

var inputElement = document.createElement('button');
inputElement.textContent = "+";
inputElement.setAttribute("class", "addColumnButton");
inputElement.setAttribute("id", "addField1");
inputElement.addEventListener('click', function () {
    addColumn("data1");
});
target.appendChild(inputElement);

let dataschemas2 = [
    { columnname: 'Name' }
];

const tableName2 = document.createElement("div");
tableName2.setAttribute("class", "tableName");
tableName2.setAttribute("id", "tableName2");
tableName2.textContent = "SchemaNameB.DatabaseNameB";
tableName2.contentEditable = "true";

const newTable2 = document.createElement("table");
newTable2.setAttribute("id", "data2");
for (dataschema of dataschemas2) {
    const newColumn = document.createElement("tc");
    columnID(newColumn);
    const newRow1 = document.createElement("tr");
    const newRow2 = document.createElement("tr");
    const tdColumnname = document.createElement("td");
    const tdDatatype = document.createElement("td");
    tdColumnname.append(addNameField());
    tdDatatype.appendChild(addDataType());
    newRow1.appendChild(tdColumnname);
    newRow2.appendChild(tdDatatype);
    newColumn.appendChild(newRow1);
    newColumn.appendChild(newRow2);
    newColumn.appendChild(deleteColumnButton());
    newTable2.appendChild(newColumn);
}

const target2 = document.getElementById('tablePosition2');
target2.appendChild(tableName2);
target2.appendChild(newTable2);

var inputElement = document.createElement('button');
inputElement.textContent = "+";
inputElement.setAttribute("class", "addColumnButton");
inputElement.setAttribute("id", "addField2");
inputElement.addEventListener('click', function () {
    addColumn("data2");
});
target2.appendChild(inputElement);





function addNameField() {
    const editableField = document.createElement("div");
    editableField.setAttribute("class", "editableField");
    editableField.contentEditable = "true";
    editableField.textContent = dataschema.columnname;
    return editableField;
}

function addDataType() {

    var selectList = document.createElement("select");
    selectList.setAttribute("id", "dataTypes");

    for (var i = 0; i < SQLTypeArray.length; i++) {
        var option = document.createElement("option");
        option.value = SQLTypeArray[i];
        option.text = SQLTypeArray[i];
        selectList.appendChild(option);
    }

    return selectList;
}

function addConnection() {
    const connectionField = document.createElement("div");
    connectionField.setAttribute("class", "editableField");
    connectionField.setAttribute("onkeypress", "validate(event)");
    connectionField.contentEditable = "true";
    connectionField.textContent = dataschema.connection;
    return connectionField;
}

function addColumn(target) {
    var tableX = document.getElementById(target);
    const newColumn = document.createElement("tc");
    columnID(newColumn);
    const newRow1 = document.createElement("tr");
    const newRow2 = document.createElement("tr");
    const tdColumnname = document.createElement("td");
    const tdDatatype = document.createElement("td");
    tdColumnname.append(addNameField());
    tdDatatype.appendChild(addDataType());
    newRow1.appendChild(tdColumnname);
    newRow2.appendChild(tdDatatype);
    newColumn.appendChild(newRow1);
    newColumn.appendChild(newRow2);
    if (target == "data1") {
        const newRow3 = document.createElement("tr");
        const tdConnection = document.createElement("td");
        tdConnection.appendChild(addConnection());
        newRow3.appendChild(tdConnection);
        newColumn.appendChild(newRow3);
    }
    newColumn.appendChild(deleteColumnButton());
    tableX.append(newColumn);
}

function columnID(column){
    idHelper = idHelper + 1;
    column.setAttribute("id", "Column" + idHelper);
}

function deleteColumnButton() {
    const newRow = document.createElement("tr");
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "-";
    deleteButton.setAttribute("class", "deleteButton");
    var beancounter = idHelper;
    deleteButton.addEventListener('click', function () {
        removeColumn("Column" + beancounter);
    });
    newRow.appendChild(deleteButton);
    return newRow;
}

function removeColumn(columnID) {
    var elem = document.getElementById(columnID);
    elem.parentNode.removeChild(elem);
    console.log("beans");
}

function getView() {
    var viewMessage;
    if (thereAreNoErrors = true) {
        const table1 = document.getElementById('data1');
        var initialData1 = table1.innerText;
        var fields1 = initialData1.split('\n');
        const table2 = document.getElementById('data2');
        var initialData2 = table2.innerText;
        var fields2 = initialData2.split('\n');
        var message = "";
        var message2 = "";

        for (let i = 0; i < fields1.length; i++) {
            if (i % 6 == 0) {
                message2 = message2 + fields1[i] + " as ";
                message = message + "name: " + fields1[i] + "\n";
            }
            if (i % 6 == 3) {
                message2 = message2 + fields2[parseInt((fields1[i]) - 1) * 3] + ", ";
            }
        }
        message = "CREATE VIEW " + document.getElementById("tableName1").innerText + " AS\n" +
            "SELECT " + message2.substring(0, message2.length - 2) + "\n" +
            "FROM " + document.getElementById("tableName2").innerText + ";";
        viewMessage = message;
    } else {
        viewMessage = "Errors were issued. As a result, no SQL has been generated as it would cause database errors. Please look at the errors and make any fixes necessary.";
    }
    window.alert(viewMessage);
}

function getMoveCommand() {
    var moveMessage = "beans";
    if (thereAreNoErrors = true) {
        const table1 = document.getElementById('data1');
        var initialData1 = table1.innerText;
        var fields1 = initialData1.split('\n');
        const table2 = document.getElementById('data2');
        var initialData2 = table2.innerText;
        var fields2 = initialData2.split('\n');
        var message = "";

        for (let i = 0; i < fields2.length; i++) {
            if (i % 2 == 0) {
                message = message + fields2[i] + ", ";
            }
        }

        moveMessage =
            "INSERT INTO " + document.getElementById("tableName2").innerText + " (" + message.substring(0, message.length - 2) + ")" + "\n" +
            "SELECT *" + "\n" +
            "FROM " + document.getElementById("tableName1").innerText + ";\n";
    } else {
        viewMessage = "Errors were issued. As a result, no SQL has been generated as it would cause database errors. Please look at the errors and make any fixes necessary.";
    }

    window.alert(moveMessage);
}

function validate(evt) {
    var theEvent = evt || window.event;

    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }

    var regex = /[0-9]/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}