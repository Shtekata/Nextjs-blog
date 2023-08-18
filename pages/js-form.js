export default () => {
  const handleSubmit = async e => {
    e.preventDefault()
    const data = {
      first: e.target.first.value,
      last: e.target.last.value,
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/form'
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSONdata,
    }
    const response = await fetch(endpoint, options)
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='first'>First name</label>
      <input type='text' id='first' name='first' required />

      <label htmlFor='last'>Last name</label>
      <input type='text' id='last' name='last' required />

      <button type='submit'>Submit</button>
    </form>
  )
}
