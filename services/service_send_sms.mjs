import request from "request"

const service_send_sms = function (param_to, param_message)
{
    request.post({
        url: 'http://172.17.42.128/sms_outbox',
        form: {
            password: "labasrytas",
            to: param_to,
            message: param_message
    }
    })
}

service_send_sms("+37063539612", "a")

export default service_send_sms