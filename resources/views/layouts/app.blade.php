<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Chipper CRM</title>
    <link rel="stylesheet" href="{{ mix('assets/css/app.css') }}">
</head>
<body class="container mx-auto bg-yellow-600 bg-opacity-5 font-sans">
@yield('content')
<script type="text/javascript" src="{{ mix('assets/js/app.js') }}"></script>
</body>
</html>
