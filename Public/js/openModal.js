// modal book
function openModal() {
    const modal = document.getElementById('customModal');
    modal.style.display = 'flex'; // Show the modal
}

function closeModal() {
    const modal = document.getElementById('customModal');
    modal.style.display = 'none'; // Hide the modal
}



// modal cloth
function openModal1() {
    const modal = document.getElementById('customModal1');
    modal.style.display = 'flex'; // Show the modal
}

function closeModal1() {
    const modal = document.getElementById('customModal1');
    modal.style.display = 'none'; // Hide the modal
}



// modal 3 food

function openModal2() {
    const modal = document.getElementById('customModal2');
    modal.style.display = 'flex'; // Show the modal
}

function closeModal2() {
    const modal = document.getElementById('customModal2');
    modal.style.display = 'none'; // Hide the modal
}
// modal 4 Donate your own hand

function openModal3() {
    const modal = document.getElementById('customModal3');
    modal.style.display = 'flex'; // Show the modal
}

function closeModal3() {
    const modal = document.getElementById('customModal3');
    modal.style.display = 'none'; // Hide the modal
}



// Close the modal when clicking outside of it
window.onclick = function (event) {
    // Get all modals by class or manually list their IDs
    const modals = [
        document.getElementById('customModal'),
        document.getElementById('customModal1'),
        document.getElementById('customModal2'),
        document.getElementById('customModal3'),
    ];

    // Loop through the modals and check if the event target matches any
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};


function redirectToDonate() {
    window.location.href = '/donate';
}