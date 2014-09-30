var actualCode = ['/* Code here. Example: */alert(0);',
                  ' // Beware! This array have to be joined',
                  ' // using a newline. Otherwise, missing semicolons',
                  ' //  or single-line comments (//) will mess up your',
                  ' //  code ----->'].join('\n');

var script = document.createElement('script');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);