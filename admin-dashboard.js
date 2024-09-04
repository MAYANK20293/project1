window.addEventListener('load', function() {
    const availabilityList = document.getElementById('availability-list');
    
    // Example availability data
    const availabilities = [
        { day: 'Monday', start: '10:00 AM', end: '3:00 PM' },
        { day: 'Tuesday', start: '9:00 AM', end: '12:00 PM' },
        { day: 'Wednesday', start: '1:00 PM', end: '5:00 PM' },
    ];
    
    availabilities.forEach(avail => {
        const li = document.createElement('li');
        li.textContent = `${avail.day}: ${avail.start} - ${avail.end}`;
        availabilityList.appendChild(li);
    });
});
