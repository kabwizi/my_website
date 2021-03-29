import { rest } from 'msw'

export const handlers = [
  rest.post('http://localhost:3000/sendEmail', (req, res, ctx) => {
    let error = []
    if (!req.body.fullName || req.body.fullName.trim() === '') {
      error.push('fullName')
    }
    if (!req.body.email || req.body.email.trim() === '') {
      error.push('email')
    }
    if (!req.body.message || req.body.message.trim() === '') {
      error.push('message')
    }
    if (!req.body.file || req.body.file.trim() === '') {
      error.push('file')
    }
    if (error.length == 0) {
      return res(
        ctx.json({
          error: undefined,
          status: 'ok'
        })
      )
    } else {
      ctx.status = 404
      return res(
        ctx.json({
          error: error,
          status: 'bad'
        })
      )
    }
  })
]
