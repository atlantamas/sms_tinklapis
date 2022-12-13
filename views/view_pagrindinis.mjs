const view_pagrindinis = function()
{
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
        html {
            height: 100%;
            width: 100%;
            padding: 0;
            border: 0;
            margin: 0;
        }

        body {
            height: 100%;
            width: 100%;
            padding: 0;
            border: 0;
            margin: 0;
            display: grid;
            place-content: center;
            place-items: center;
        }

        form {
            height: fit-content;
            width: fit-content;
            border: 1px solid black;
            padding: 1em;
            display: grid;
            place-content: center;
            place-items: center;
        }
    </style>
    </head>
    
    <body>
    
        
    <form method="POST" action="/pagrindinis">
    
            <span>Tel nr</span>
            <input type="text" name="tel_nr">
    
    
            <span>Zinute</span>
            <input type="text" name="zinute">
            <br>
    
            <input type="submit">
    
        </form>
    </body>
    
    </html>`

}
export default view_pagrindinis