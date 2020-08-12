const express = require('express')
const app = express()
const router = require('./router.js')
const bodyParser = require('body-parser')

/*配置body-parser,用于解析post请求体*/
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/*使用模板引擎*/
app.engine('html', require('express-art-template'))
/*配置模板引擎和body-parser需要在挂在路由之前*/

/*公开目录*/
app.use('/node_modules',express.static('.././node_modules'))
app.use('/public',express.static('./public'))

/*路由*/
app.use(router)

app.listen(3000, () => {
    console.log('running in 127.0.0.1:3000')
})