const axios = require("axios");

let createMemes = async function (req, res) {
    try {
        let id = 181913649
        let text0 = "College"
        let text1 = "FunctionUp"
        let name =  "chewie12345"
        let pass = "meme@123"

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${name}&password=${pass}`
        }
        let result = await axios(options);
        res.status(200).send({ data: result.data })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.createMemes = createMemes;

// template_id <meme_id>
//             text0 <text you want as a caption>
//             text1 <optional>
//             username chewie12345
//             password meme@123