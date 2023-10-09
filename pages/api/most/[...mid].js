export default function handler(req, res) {
  const {mid} = req.query
  // res.json(pid)
  console.log(mid)
  res.end(`Post: ${mid.join('-:-')}`)
}
