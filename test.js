console.log('Hello from test.js')
/*
const uri = 'https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'
const encoded = encodeURIComponent(uri)
console.log(encoded)
const decoded1 = decodeURIComponent(encoded)
console.log(decoded1)
const decoded2 = decodeURIComponent(decoded1)
console.log(decoded2)
*/

const siteTitle = 'Next.js Sample Website'
const content = `https://og-image.vercel.app/${encodeURI(
  siteTitle
)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.sv\g`
console.log(content)
const decodedContent = decodeURIComponent(content)
console.log(decodedContent)

/*
try {
  console.log(decodeURIComponent(uri))
} catch (e) {
  console.log(e)
}
*/
