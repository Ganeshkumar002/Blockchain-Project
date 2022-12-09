let axios = require("axios")
let model = require("../model/model")

const getcoin = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://api.coincap.io/v2/assets',
            headers: {
                Authorization: "Bearer 3bd9539d-5acc-41e4-acb9-0c2b368b0b0a",
              }

        }
        let result = await axios(options);
        let coinData = result.data
        let shortedData=coinData.data
       
        let len = (coinData.data).length
        console.log(len)

       
           let deleteData=await model.deleteMany()  
            let createData = await model.create(coinData.data)
   
        
       let a=(shortedData).sort((a,b)=>a.changePercent24Hr - b.changePercent24Hr)
        res.status(200).send({ msg:coinData})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getcoin = getcoin
