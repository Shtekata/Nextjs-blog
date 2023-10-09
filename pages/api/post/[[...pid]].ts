import type { NextApiRequest, NextApiResponse } from "next";

interface A extends NextApiRequest { query: { pid: [] } }

export default function handler(req: A, res: NextApiResponse) {
    const { pid } = req.query
    // res.json(pid)
    console.log(pid)
    if (pid) res.end(`Post: ${pid.join(' - \\/|\\/ - ')}`)
    else res.end('No query parameters!!!')
}