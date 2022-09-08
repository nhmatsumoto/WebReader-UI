const express = required('express')
const { resolve } = required('path')
const app = express()

app.use('/',  
    express.static(
        resolve(
        __dirname,
        './build'
        )
    )
)

app.listen(process.env.PORT || 5000, (error) => {
    if(error) {
        return console.log(error)
    }

    console.log("DEPLOY EFETUADO COM SUCESSO")
})