export default () => (
  <form action='/api/form' method='post'>
    <label htmlFor='first'>First name</label>
    <input type='text' id='first' name='first' required />

    <label htmlFor='last'>Last name</label>
    <input type='text' id='last' name='last' required />

    <button type='submit'>Submit</button>
  </form>
)
