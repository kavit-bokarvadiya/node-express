const path = require("path");
console.log(path.sep, "--> in window"); // sep --> seperator for path
/*
PS K:\coding\Main Code\MERN_stack_pw\nodejs_express\path>node index.js
\ --> inwindow
*/

console.log(path.delimiter, "--> delimiter in window"); // delimiter
/*
 node "k:\coding\Main Code\MERN_stack_pw\nodejs_express\path\index.js"
\ --> in window
; --> delimiter in window
*/


console.log(process.env.PATH);

/*
C:\app\kavit\product\21c\dbhomeXE\bin;C:\Program Files\Common Files\Oracle\Java\javapath;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files (x86)\NVIDIA Corporation\PhysX\Common;C:\Program Files\NVIDIA Corporation\NVIDIA NvDLISR;C:\MinGW\bin;C:\Program Files\nodejs\;C:\Program Files\Microsoft SQL Server\150\Tools\Binn\;C:\Program Files\Microsoft SQL Server\Client SDK\ODBC\170\Tools\Binn\;C:\Program Files\dotnet\;C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\;C:\Program Files (x86)\Microsoft SQL Server\160\Tools\Binn\;C:\Program Files\Microsoft SQL Server\160\Tools\Binn\;C:\Program Files\Microsoft SQL Server\160\DTS\Binn\;C:\Program Files (x86)\Microsoft SQL Server\160\DTS\Binn\;C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\WINDOWS\System32\OpenSSH\;C:\src\flutter\bin;C:\Program Files\Git\cmd;C:\Windows\System32;C:\Windows\System32\WindowsPowerShell\v1.0;C:\Users\kavit\AppData\Local\Programs\Python\Python313\Scripts\;C:\Users\kavit\AppData\Local\Programs\Python\Python313\;C:\Program Files\MySQL\MySQL Shell 8.0\bin\;C:\Users\kavit\AppData\Local\Microsoft\WindowsApps;C:\Users\kavit\AppData\Local\Programs\Microsoft VS Code\bin;C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2024.1.4\bin;;C:\Program Files\MySQL\MySQL Server 8.0\bin;C:\Users\kavit\AppData\Roaming\npm;C:\Users\kavit\.dotnet\tools;C:\Program Files\Java\jdk-22\bin;
*/


/*
path methods
*/


