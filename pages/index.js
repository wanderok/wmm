const express = require("express")
const app = express()
const port = 8081

//app.get("/", function (req, res) {
//    res.send("Seja bem vindo.")
//});

// this is the last line of the code
//app.listen(port, function () {
//    console.log("servidor running...")
//});


function Home() {
    return <div>Const definition!</div>
}

export default Home