import generate_random_interger from "./generate-random_interger.mjs"

const alowed_chars = "abcdefghijklmnoprstuvz"

const generate_random_string = function (param_length)
{
    var result = ""

    const alowed_chars_length = alowed_chars.length

    for (var i=0;i<param_length ; i++)
    {
        const random_index = generate_random_interger(0, alowed_chars_length - 1)
        result += alowed_chars[random_index]
    }

    return result
}

export default generate_random_string