/*eslint-env browser*/
// Initialize employee data array with 5 employees
const employees = [
    { name: "Michael Scott", title: "Regional Manager", extension: "101" },
    { name: "Jim Halpert", title: "Sales Rep", extension: "102" },
    { name: "Dwight Schrute", title: "Assistant to the Regional Manager", extension: "103" },
    { name: "Pam Beesly", title: "Designer", extension: "104" },
    { name: "Ryan Howard", title: "Developer", extension: "105" }
];

// Function to update the employee table
function updateEmployeeTable() {
    const employeeTable = document.getElementById("employeeTable");
    const tbody = employeeTable.querySelector("tbody");
    tbody.innerHTML = '';

    employees.forEach((employee, index) => {
        const row = tbody.insertRow();
        row.innerHTML = `
            <td>${employee.name}</td>
            <td>${employee.title}</td>
            <td>${employee.extension}</td>
            <td><button onclick="deleteEmployee(${index})">Delete</button></td>
        `;
    });

    document.getElementById("employeeCount").textContent = `Showing ${employees.length} Employees`;
}

function addEmployee() {
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const extension = document.getElementById("extension").value;

    clearErrorMessages();
    resetInputBorders();

    if (!name) {
        displayError("Name is required.", "name");
    }
    if (!title) {
        displayError("Title is required.", "title");
    }
    if (!extension) {
        displayError("Extension is required.", "extension");
    }

    if (name && title && extension) {
        employees.push({ name, title, extension });
        updateEmployeeTable();
        clearInputFields();
    }
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    updateEmployeeTable();
}

function clearErrorMessages() {
    const errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = '';
}

function displayError(message, inputId) {
    const errorContainer = document.getElementById("error" + inputId.charAt(0).toUpperCase() + inputId.slice(1));
    errorContainer.innerHTML = `<p class="error">${message}</p>`;
}

function resetInputBorders() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.style.border = "1px solid blue";
    });
}

function clearInputFields() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.value = '';
    });
}

document.getElementById("addEmployeeButton").addEventListener("click", addEmployee);

updateEmployeeTable();

