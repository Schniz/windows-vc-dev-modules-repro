// @ts-check

import '@vercel/node'
import { nanoid } from 'nanoid'

/** @type {import('@vercel/node').VercelApiHandler} */
const handler = (req, res) => {
    res.status(200).send("Hello, world! " + nanoid()).end()
}

export default handler;