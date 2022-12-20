import axios from 'axios'
import querystring from 'querystring'

const service_send_sms_axios = async function (param_to, param_message)
{
    const form = {
        password: "labasrytas",
        to: param_to,
        message: param_message
    }

    const result = await axios.post('https://exciting-glory-variraptor.glitch.me/sms_outbox', querystring.stringify(form))
}

//test 

service_send_sms_axios("+37068391634", "a")

export default service_send_sms_axios