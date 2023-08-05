# CSS (Cascading Style Sheets)

CSS is used to style web pages ontop of an existing HTML structure.

There are 3 ways to use CSS:

1. inline
    ```HTML
    <h1 style="color: blue;">
    ```

2. internal
    ```HTML
    <head>
         <style>
             body{
                 background-color: blue;
                 color: whitesmoke;
             }
         </style>
    </head>
    ```

3. external
    ```CSS
    /*inside index.html*/
    <head>
        <link rel="stylesheet" href="main.css">
    </head>
    /*inside main.css*/
        body{
            background-color: blue;
            color: whitesmoke;
        }
        .myclass{
            color: green;
            font-size: 20px;
        }
    ```
