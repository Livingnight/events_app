export default function handler( req, res ) {
  const { commentId } = req.query.commentId

  console.log(commentId)

  // res.status(200).json({
  //   commentId,
  //   message: 'Comments Retrieved',
  // })
}
