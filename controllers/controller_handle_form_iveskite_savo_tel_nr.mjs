import model_siuntusiu_registras_tikrinti_ar_yra_registre from "../models/model_arr_siuntusiu_registras_tikrinti_ar_yra_registre.mjs"
import service_send_sms_axios from "../services/service_send_sms_axios.mjs"
import generate_random_string from "../utilities/generate-random_string.mjs"
import view_iveskite_savo_gauta_zinute from "../views/view_iveskite_savo_gauta_zinute.mjs"
import view_vartoto_tel_nr_neteisingas from "../views/view_vartotojo_tel_nr_neteisingas.mjs"
import view_virsitas_zinuciu_limitas from "../views/view_virsitas_zinuciu_limitas.mjs"

const controller_handle_form_iveskite_savo_tel_nr = function (req, res)
{
    const regexp_tel_nr = /^\+370[0-9]{8}$/

    if (regexp_tel_nr.test(req.body.tel_nr) === false)
    {
        const html = view_vartoto_tel_nr_neteisingas()
        res.write(html)
        res.end()
        return
    }

    if (model_siuntusiu_registras_tikrinti_ar_yra_registre(req.body.tel_nr))
    {
        const html = view_virsitas_zinuciu_limitas()
        res.write(html)
        res.end()
        return
    }

    //siusti zinute su kodu 

    const patvirtinimo_kodas = "abcd"
    const message = `Patvirtinimo kodas: $(patvirtinimo_kodas)`

    service_send_sms_axios(req.body.tel_nr, generate_random_string(4))

    const html = view_iveskite_savo_gauta_zinute()
    res.write(html)
    res.end()
}
export default controller_handle_form_iveskite_savo_tel_nr