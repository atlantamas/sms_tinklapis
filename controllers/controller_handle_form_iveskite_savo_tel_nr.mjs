import model_naudotojai_insert_one from "../models/model_naudotoaji_insert_one.mjs"
import naudotojai_insert_one from "../models/model_naudotoaji_insert_one.mjs"
import view_issiusta_sekmingai from "../views/view_issiusta_sekmingai.mjs"
import view_vartoto_tel_nr_neteisingas from "../views/view_vartotojo_tel_nr_neteisingas.mjs"

const controller_handle_form_iveskite_savo_tel_nr = function(req, res )
{
    const regexp_tel_nr = /^\+370[0-9]{8}$/

    if (regexp_tel_nr.test(req.body.tel_nr) === false)
    {
        const html = view_vartoto_tel_nr_neteisingas()
        res.write(html)
        res.end()
        return

    }
   model_naudotojai_insert_one
    const html = view_issiusta_sekmingai()
    res.write(html)
    res.end()
}
export default controller_handle_form_iveskite_savo_tel_nr