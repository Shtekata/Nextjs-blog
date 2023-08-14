export default function validateFormWithJS() {
  const name = document.querySelector('#name').value
  const rollNumber = document.querySelector('#rollNumber').value
  if (!name) {
    alert('Please enter your name.')
    return false
  }
  if (rollNumber.length < 3) {
    alert('Roll Number should be at least 3 digits long.')
    return false
  }
}
