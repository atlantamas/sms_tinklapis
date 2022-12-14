import view_neteisingas_kodas from "../views/view_neteisingas_kodas.mjs"

const controller_handle_form_iveskite_zinuteje_gauta_koda = function (req, res)
{
    if (true)
    {
        const html = view_neteisingas_kodas()

        res.write(html)
        res.end()
        return
    }
}
export default controller_handle_form_iveskite_zinuteje_gauta_koda