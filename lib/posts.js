import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'data/posts')

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostData = fileNames.map(x => {
    const id = x.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, x)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    return {id, ...matterResult.data}
  })
  return allPostData.sort((x, y) => {
    if (x.date < y.date) return 1
    else return -1
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(x => {
    return {
      params: {
        id: x.replace(/\.md$/, ''),
      },
    }
  })
}
