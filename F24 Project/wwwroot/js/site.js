// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let dataschemas = [
    { columnname: 'ID', datatype: 'BIGINT', connection: '1' },
    { columnname: 'Name', datatype: 'VARCHAR', connection: '2' },
    { columnname: 'Address', datatype: 'VARCHAR', connection: '3' }
];

const newTable = document.createElement("table");
newTable.setAttribute("id", "data1");
for (dataschema of dataschemas) {
    const newColumn = document.createElement("tc");
    const newRow1 = document.createElement("tr");
    const newRow2 = document.createElement("tr");
    const tdColumnname = document.createElement("td");
    const tdDatatype = document.createElement("td");
    const tdConnection = document.createElement("td");
    const editableField = document.createElement("div");
    editableField.setAttribute("class", "editableField");
    editableField.contentEditable = "true";
    editableField.textContent = dataschema.columnname;
    tdColumnname.append(editableField);
    tdDatatype.appendChild(datatypeField());
    tdConnection.textContent = dataschema.connection;
    newRow1.appendChild(tdDatatype);
    newRow2.appendChild(tdConnection);
    newColumn.appendChild(tdColumnname);
    newColumn.appendChild(newRow1);
    newColumn.appendChild(newRow2);
    newTable.appendChild(newColumn);
}

const target = document.getElementById('tablePosition1');
target.appendChild(newTable);

var inputElement = document.createElement('button');
inputElement.textContent = "+";
inputElement.setAttribute("class", "addColumnButton");
inputElement.setAttribute("id", "addField1");
inputElement.addEventListener('click', function () {
    addColumn("data1");
});
target.appendChild(inputElement);


function datatypeField() {
    //const datafield = document.createElement("div");
    //datafield.textContent = dataschema.datatype;

    const editableField = document.createElement("div");
    editableField.setAttribute("class", "dropdownSelect");

    editableField.textContent = dataschema.datatype;

    return editableField;
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
} 
let dataschemas2 = [
    { columnname: 'ID', datatype: 'BIGINT' },
    { columnname: 'Name', datatype: 'VARCHAR' },
    { columnname: 'Address', datatype: 'VARCHAR' }
];

const newTable2 = document.createElement("table");
newTable2.setAttribute("id", "data2");
for (dataschema of dataschemas2) {
    const newColumn = document.createElement("tc");
    const newRow1 = document.createElement("tr");
    const tdColumnname = document.createElement("td");
    const tdDatatype = document.createElement("td");
    const editableField = document.createElement("div");
    editableField.setAttribute("class", "editableField");
    editableField.contentEditable = "true";
    editableField.textContent = dataschema.columnname;
    tdColumnname.append(editableField);
    tdDatatype.textContent = dataschema.datatype;
    newRow1.appendChild(tdDatatype);
    newColumn.appendChild(tdColumnname);
    newColumn.appendChild(newRow1);
    newTable2.appendChild(newColumn);
}

const target2 = document.getElementById('tablePosition2');
target2.appendChild(newTable2);

var inputElement = document.createElement('button');
inputElement.textContent = "+";
inputElement.setAttribute("class", "addColumnButton");
inputElement.setAttribute("id", "addField2");
inputElement.addEventListener('click', function () {
    addColumn("data2");
});
target2.appendChild(inputElement);

function addColumn(target) {
    var tableX = document.getElementById(target);
    const newColumn = document.createElement("tc");
    const newRow1 = document.createElement("tr");
    const tdColumnname = document.createElement("td");
    const tdDatatype = document.createElement("td");
    const editableField = document.createElement("div");
    editableField.setAttribute("class", "editableField");
    editableField.contentEditable = "true";
    editableField.textContent = dataschema.columnname;
    tdColumnname.append(editableField);
    tdDatatype.textContent = dataschema.datatype;
    newRow1.appendChild(tdDatatype);
    newColumn.appendChild(tdColumnname);
    newColumn.appendChild(newRow1);
    if (target == "data1") {
        const newRow2 = document.createElement("tr");
        const tdConnection = document.createElement("td");
        tdConnection.textContent = dataschema.connection;
        newRow2.appendChild(tdConnection);
        newColumn.appendChild(newRow2);
    }
    tableX.append(newColumn);
}

function getView() {
    var viewMessage;
    if (thereAreErrors = true) {
        const table1 = document.getElementById('data1');
        var initialData = table1.innerText;
        var fields = initialData.split('\n');
        var message = "";

        for (let i = 0; i < fields.length; i++) {
            if (i % 4 == 0) {
                message = message + "name: " + fields[i] + "\n"
            }
            if (i % 4 == 1) {
                message = message + "datatype: " + fields[i] + "\n"
            }
            if (i % 4 == 3) {
                message = message + "connection: " + fields[i] + "\n"
            }
        }

        viewMessage = message;
    } else {
        viewMessage = "Errors were issued. As a result, no SQL has been generated as it would cause database errors. Please look at the errors and make any fixes necessary.";
    }
    window.alert(viewMessage);
}