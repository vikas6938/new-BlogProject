const express = require('express')
const connectDB = require('./config/db')
const Config = require('./config');
const postRouter = require('./router/postRoutes');
const cors = require('cors');

const app = express()

const PORT = Config.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api', postRouter)



app.listen(PORT, (err) => {
    if(err){
        console.log(err, 'server is not Connected')
    }
    console.log(`listening on port : http://localhost:${PORT}`)
    connectDB()
})