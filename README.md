# rendered
Command-line filter tool that lets Chromium process an html text which includes inline JavaScript

## install
`$  npm i -g rendered`

## usage
```Bash
$ echo '<h1>hello</h1><script>document.write("world")</script>' | rendered
hello
world
$
$ # from a local html file
$ cat << EOS > sample.html
> <html>
>   <body>
>     <p>foo</p>
>     <p>bar</p>
>     <script>
>       document.querySelector('p:nth-of-type(2)').textContent = 'baz';
>     </script>
>   </body>
> </html>
> EOS
$ cat sample.html | rendered
foo

baz
$
$ # use with curl (though there is no inline script in example.com...)
$ curl -s http://example.com/ | rendered
Example Domain

This domain is for use in illustrative examples in documents. You may use this domain in literature without prior coordination or asking for permission.

More information...
```
