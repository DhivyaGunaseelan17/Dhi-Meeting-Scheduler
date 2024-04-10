document.addEventListener("DOMContentLoaded", () => {
    // Display scheduler name and event date in table
    displayEventFromLocalStorage();

    // Handle adding new event
    const addEventSubmit = document.querySelector(".add-event-btn");
    addEventSubmit.addEventListener("click", () => {
        // Retrieve scheduler name and event date
        const schedulerName = document.querySelector(".your-name").value;
        const eventDate = document.querySelector(".event-date").textContent;

        // Create a new row for the new event
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${schedulerName}</td>
            <td>${eventDate}</td>
        `;

        // Append the new row to the table body
        const tableBody = document.getElementById("eventTableBody");
        tableBody.appendChild(newRow);

        // Clear the input fields
        document.querySelector(".your-name").value = "";

        // Save the scheduler name and event date to local storage
        localStorage.setItem("schedulerName", schedulerName);
        localStorage.setItem("eventDate", eventDate);
    });
});

function displayEventFromLocalStorage() {
    // Retrieve scheduler name and event date from local storage
    const schedulerName = localStorage.getItem("schedulerName");
    const eventDate = localStorage.getItem("eventDate");

    // Display scheduler name and event date in table if they exist in local storage
    if (schedulerName && eventDate) {
        const tableBody = document.getElementById("eventTableBody");
        
        // Create a new row for the new event
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${schedulerName}</td>
            <td>${eventDate}</td>
        `;
        
        // Append the new row to the table body
        tableBody.appendChild(newRow);

        // Clear the localStorage values to prevent duplication
        localStorage.removeItem("schedulerName");
        localStorage.removeItem("eventDate");
    }
}


// clear notification.js

document.addEventListener("DOMContentLoaded", () => {
    const clearButton = document.getElementById("clearButton");
    const eventTableBody = document.getElementById("eventTableBody");

    clearButton.addEventListener("click", () => {
        // Remove all rows from the table body
        eventTableBody.innerHTML = "";
    });
});
// logout
document.addEventListener("DOMContentLoaded", () => {
    const logoutLink = document.querySelector(".logout");

    logoutLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent the default action of the link

        // Display thanks message
        alert("Thank you for using our service!");

        // Redirect to index.html
        window.location.href = "index.html";

        // Display a message in the console for the user to close the window
        console.log("You may close this window.");
    });
});
