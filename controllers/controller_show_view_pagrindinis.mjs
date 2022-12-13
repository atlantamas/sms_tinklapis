import view_pagrindinis from "../views/view_pagrindinis.mjs"

const controller_show_view_pagrindinis = function (req, res)
{
    const html = view_pagrindinis()

    res.write(html)
    res.end()
}

export default controller_show_view_pagrindinis