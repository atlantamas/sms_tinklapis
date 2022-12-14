import arr_naudotojai from "../data/arr_siuntusiu_registras.mjs"

const model_siuntusiu_registras_prideti_nauja = function (param_naudotojo_tel_nr)
{
    arr_naudotojai.push(param_naudotojo_tel_nr)
}

export default model_siuntusiu_registras_prideti_nauja