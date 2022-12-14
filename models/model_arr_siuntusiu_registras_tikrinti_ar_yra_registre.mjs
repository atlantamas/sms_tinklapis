import arr_siuntusiu_registras from "../data/arr_siuntusiu_registras.mjs"

const model_siuntusiu_registras_tikrinti_ar_yra_registre = function (param_string)
{
    for (var i = 0; i < arr_siuntusiu_registras.length; i += 1)
    {
        if (arr_siuntusiu_registras[i] === param_string)
        {
            console.log(arr_siuntusiu_registras[i])

            return true
        }
        else
        {

        }
    }  

    return false
}

export default model_siuntusiu_registras_tikrinti_ar_yra_registre