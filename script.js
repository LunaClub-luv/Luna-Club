function toggleParticipantOptions() {
    var participationType = document.getElementById('participation-type').value;
    var participantOptions = document.getElementById('participant-options');
    if (participationType === 'participate') {
        participantOptions.style.display = 'block';
    } else {
        participantOptions.style.display = 'none';
    }
}