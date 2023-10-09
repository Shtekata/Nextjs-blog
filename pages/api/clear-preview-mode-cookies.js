export default function handler(req, res) {
  res.clearPreviewData({})
  res.end('Cookies are cleared')
}
