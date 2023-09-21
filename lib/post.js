import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'data/comments')

export async function getAllPostNames() {
  const res = await fetch('http://127.0.0.1:3000/api/pid', {})
  const posts = await res.json()
  return posts.data.map(x => {
    return {
      params: {pid: x},
    }
  })
}

export function getAllPostPids() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(x => {
    return {
      params: {
        pid: x.replace(/\.md$/, ''),
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
