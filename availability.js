document.getElementById('availability-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const day = document.getElementById('day').value;
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;
    alert(`Availability submitted for ${day}: ${start} - ${end}`);
    // Submit the data to the backend or save locally
});
