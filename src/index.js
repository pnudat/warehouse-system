const express = require('express')
const paths = require('./router')

const PORT = 5000
const app = express()

app.use('/api', paths)
app.use('*',(req, res, ) =>{
    res.status(500).json({massage: 'url not found'});
})

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});