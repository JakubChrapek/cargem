require('dotenv').config()
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const message = {
  to: process.env.SENDGRID_AUTHORIZED_EMAIL
}

const handler = (req, res) => {
  try {
    if (req.method !== 'POST') {
      res.json({ message: 'Try a POST!' })
    }

    if (req.body) {
      message.from = req.body.email
      message.subject =
        req.body.subject ??
        'Kontakt ze strony ambasadav8.pl'
      message.text = req.body.message ?? 'Pusta wiadomość'
      message.html =
        req.body.message.replace('/r/n', '<br>') ?? 'empty'
    }

    return sendgrid.send(message).then(
      () => {
        res.status(200).json({
          message: 'Everything ok. Sending message.'
        })
      },
      (error) => {
        console.error(error)
        if (error.response) {
          return res.status(500).json({
            error: error.response
          })
        }
      }
    )
  } catch (err) {
    console.log(err)
    return res
      .status(500)
      .json({ message: 'There was an error', error: err })
  }
}

module.exports = handler
