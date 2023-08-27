export default (req, res) => {
  const body = req.body
  console.log('body: ', body)
  if (body.firstName != 'Asen' || body.lastName != 'Geshev')
    return res.status(400).json({data: "First or last name don't match"})
  res.status(200).json({data: `First Name: ${body.firstName}, Second Name: ${body.lastName}`})
}
