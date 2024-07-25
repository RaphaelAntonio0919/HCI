document.getElementById('search-input').addEventListener('input', function() {
    const searchButton = document.getElementById('search-button');
    if (this.value) {
        searchButton.style.display = 'none';
    } else {
        searchButton.style.display = 'block';
    }
});

function selectTransport(transport) {
    alert(transport + ' selected');
}

function selectSchedule(schedule) {
    alert('Schedule ' + schedule + ' selected');
}

function buyTicket() {
    alert('Ticket purchased');
}
