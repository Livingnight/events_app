// comments api
export default function handler(req, res) {
  // creating a new comment
  if ( req.method === 'POST') {
    console.log('This was a post request')
    res.status(200).json({
      message: 'posted'
    })
  } else {
    // Getting all comments
    console.log('This was a get request')
    res.status(200).json({
      message: 'gotted'
    })
  }
}
