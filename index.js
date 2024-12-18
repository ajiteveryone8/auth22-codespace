const app = require('./app')

const {PORT} = process.env

console.log(PORT)

app.listen(PORT, () =>{
    console.log(`server is running is at port : ${PORT}`)
})