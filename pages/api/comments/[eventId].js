import { MongoClient } from 'mongodb'

import { connectDatabase, insertDocument, getAllDocuments } from '../../../helpers/db-util'

export default async function handler(req, res) {
  const eventId = req.query.eventId

  let client

  try {
    client = await connectDatabase()
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed' })
    return
  }

  if (req.method === 'POST') {
    const { email, name, comment } = req.body

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !comment ||
      comment.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input.' })
      client.close()
      return
    }
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      comment,
      eventId
    }

    let result

    try {
      result = await insertDocument(client, 'comments', newComment)

      newComment.id = result.insertedId

      res.status(201).json({ message: 'Added comment.', comment: newComment })
    } catch (error) {
      res.status(500).json({ message: 'Inserting Comment Failed' })
    }

  }

  if (req.method === "GET") {
    try {
      const documents = await getAllDocuments(client, 'comments', { _id: -1 })
      res.status(200).json({ comments: documents })
    } catch (error) {
      res.status(500).json({ message: 'Getting Documents Failed' })
    }

  }
  client.close()
}
