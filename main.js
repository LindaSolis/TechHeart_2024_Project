function redirectOnChange() {
    var dropdown = document.getElementById("hearAbout");
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;

    // Add more cases as needed for each option
    switch (selectedOption) {
        case "Giving Tuesday":
            window.location.href = "event.html";
            break;

        case "Year-End Campaign":
            window.location.href = "event.html";
            break;

        case "A Night for Hearts":
            window.location.href = "event.html";
            break;

        case "Drive to save lives":
            window.location.href = "event.html";
            break;

        case "Heart month":
            window.location.href = "event.html";
            break;

        case "Facebook":
            window.location.href = "event.html";
            break;

        case "LinkedIn":
            window.location.href = "event.html";
            break;

        case "Instagram":
            window.location.href = "event.html";
            break;
        
        case "Email":
            window.location.href = "event.html";
            break;
    
        case "Other":
            window.location.href = "event.html";
            break;

        // Add more cases for other options

        default:
            // Handle default case or do nothing
            break;
    }
}

function redirectOnButtonClick(buttonId) {
    switch (buttonId) {
        case "becomeDonor":
            window.location.href = "become.html";
            break;

        case "subscribe":
            window.location.href = "become.html";
            break;

        case "pacemakerCandidate":
            window.location.href = "become.html";
            break;

        case "pacemakerReceptionists":
            window.location.href = "become.html";
            break;

        // Add more cases for other buttons if needed
        default:

            // Handle default case or do nothing
            break;
    }
}


function submitForm() {

    window.location.href = "thankyou.html";

    
    // Collect form data
    const formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        title: document.getElementById("title").value,
        cellPhone: document.getElementById("cellPhone").value,
        mailingAddress: document.getElementById("mailingAddress").value,
        gender: document.getElementById("gender").value,
        birthday: document.getElementById("birthday").value
    };

    // Send data to server for processing and CSV generation
    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.blob())
    .then(blob => {
        // Create a temporary anchor element to trigger the download
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'form_data.csv');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    })
    .catch(error => console.error('Error:', error));
}