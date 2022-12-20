import view_iveskite_savo_tel_nr from "../views/view_iveskite_savo_tel_nr.mjs"
import view_neteisingas_tel_nr from "../views/view_neteisingas_tel_nr.mjs"
import view_neteisingas_zinute from "../views/view_neteisinga_zinute.mjs"

const controller_handle_form_pagrindinis = function (req, res)
{

    const regexp_tel_nr = /^\+370[0-9]{8}$/

    const regexp_zinute = /^[a-zA-Z0-9 .,!?]{1,128}$/

    if (regexp_tel_nr.test(req.body.tel_nr) === false)
    {
        const html = view_neteisingas_tel_nr()
        res.write(html)
        res.end()
        return
    }

    if (regexp_zinute.test(req.body.zinute) === false)
    {
        const html = view_neteisingas_zinute()
        res.write(html)
        res.end()
        return

    }

    const html = view_iveskite_savo_tel_nr()
    res.write(html)
    res.end()
}

export default controller_handle_form_pagrindinis