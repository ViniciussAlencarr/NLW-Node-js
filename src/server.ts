import express from 'express'

const app = express()

app.get('/teste', (req, res, next) => {
    return res.send('Hello World!')
})

app.post('/teste01', (req, res, next) => {
    res.json({ message: 'Inserido com sucesso!'})
})

app.listen(3000, () => console.log('Server is running...'))