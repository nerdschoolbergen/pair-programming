
/* Implement the roman numeral conversion here */
function convert(number) {
  return "Implement me."
}

answerBox = document.getElementById('roman-answer');
document.getElementById('roman-input').addEventListener('input', function() {
    answerBox.innerHTML = this.value ? convert(this.value) : '';
});