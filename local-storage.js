<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Local Storage</title>
</head>
<body>
    <button onclick="saveToLocalStorage()">Save to Local Storage</button>
    <script>
        function saveToLocalStorage() {
            localStorage.setItem('message', 'Hello, Local Storage!');
            alert('Data saved to local storage.');
        }
    </script>
</body>
</html>
