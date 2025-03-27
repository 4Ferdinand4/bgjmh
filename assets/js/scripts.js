// filepath: /class-webpage-project/class-webpage-project/assets/js/scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Cheating Probability Calculator
    const calculatorForm = document.getElementById('cheating-calculator-form');
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const numStudents = parseInt(document.getElementById('num-students').value);
            const teacherAttention = parseInt(document.getElementById('teacher-attention').value);
            const probability = calculateCheatingProbability(numStudents, teacherAttention);
            document.getElementById('result').innerText = `Cheating Probability: ${probability}%`;
            logUserAction('cheating-calculator');
        });
    }

    // Function to calculate cheating probability
    function calculateCheatingProbability(numStudents, teacherAttention) {
        if (numStudents <= 0 || teacherAttention < 0 || teacherAttention > 100) {
            return 0;
        }
        return Math.min(100, (numStudents * (100 - teacherAttention)) / 100);
    }

    // Function to log user actions
    function logUserAction(action) {
        const username = getUsername(); // Placeholder for getting the username
        console.log(`User: ${username} performed action: ${action}`);
    }

    // Placeholder function to get the username
    function getUsername() {
        return 'User'; // Replace with actual logic to retrieve the username
    }
});