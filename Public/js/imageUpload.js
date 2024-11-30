document.getElementById("userImage").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById("preview");
            preview.src = e.target.result;
            preview.style.display = "block";  // Show the preview image
        };
        reader.readAsDataURL(file);
    }
});


document.getElementById("yourFormId").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const userImage = document.getElementById("userImage").files[0];

    if (userImage) {
        formData.append("userImage", userImage); // Ensure file is appended correctly
    }

    fetch("/submit-form1", {
        method: "POST",
        body: formData,
    }).then(response => response.json())
      .then(data => console.log("Data received:", data))
      .catch(error => console.error("Error uploading image:", error));
});


