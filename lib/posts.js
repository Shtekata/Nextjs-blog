import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

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

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContend = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContend.toString()
  return {id, contentHtml, ...matterResult.data}
}
