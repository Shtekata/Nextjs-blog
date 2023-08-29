function Profile3() {
  fetch('http://localhost:3000/api/pid')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.error(e))
}

console.log('In test3!')

Profile3()
