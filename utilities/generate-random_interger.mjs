const generate_random_interger = function (param_min, param_max)
{
const length = param_max - param_min

    const random_float_number = Math.random ()
    const multiplaye_by_length = random_float_number * length
    const rounded = Math.round(multiplaye_by_length)

    const result = param_min + rounded
    return result
}


export default generate_random_interger