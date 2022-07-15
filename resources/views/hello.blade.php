<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YourGame</title>
</head>
<style>
    body{
        background-image: url({{ asset('img/back.jpg') }});
        background-size: cover;
        background-repeat: no-repeat;
    }
    h1{
        font-size: xxx-large;
    }
    h6{
        font-size: large;
    }
    container{
        text-align: center;
        height: 100%;
        font-family: system-ui;
        font-weight: bold;
        background-color: rgba(25,25,25,0.5);
        color: white;
        margin: 0;
        padding: 0;
        top: 0;
		left: 0;
        position: absolute;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
</style>
<body>
    <container>
    <div><h1>Itt hamarosan egy nagyszerű oldal fog indulni!</h1></div>
    <div><h6>Csak ezt még le kell játszanunk...</h6></div>
    </container>
</body>
</html>