function Profile2() {
  fetch('http://localhost:5000/api/user')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.error(e))
}

console.log('In test2!')

Profile2()
