const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// var cors = require('cors')
var firebase = require('firebase')

var config = {
    apiKey: "AIzaSyAOsrmxOGSvTTPYtR4aYRxfxlfFAzeQT20",
    authDomain: "traffic-985d3.firebaseapp.com",
    databaseURL: "https://traffic-985d3.firebaseio.com",
    projectId: "traffic-985d3",
    storageBucket: "traffic-985d3.appspot.com",
    messagingSenderId: "868733561637"
  };
firebase.initializeApp(config); //ประกาศใช้ firebase

var database = firebase.database() //ใช้ database ของ firebase

// app.use(cors())

app.use(bodyParser.json())
app.get('/',async (req,res) => {
    let province = [] 
    await database.ref().once('value').then(snapshot => {
        province = snapshot.val()
    })
        res.send(province)
})


app.listen(3000, () => console.log('Example app listening on post 3000!'))

