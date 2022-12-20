import service_send_sms_axios from "../services/service_send_sms_axios.mjs"

const controller_handle_form_iveskite_zinuteje_gauta_koda = function (req, res)
{
    const reqexp_iveskite_savo_gauta_zinute = /^[a-z]{4}$/

    if (req.body.iveskite_savo_gauta_zinute !== "abcd")
    {

        const html = view_patvirtinimo_kodas_netaisiklingas()

        res.write(html)
        res.end()
        return
    }
service_send_sms_axios("+37068391634", "labas")
}
export default controller_handle_form_iveskite_zinuteje_gauta_koda