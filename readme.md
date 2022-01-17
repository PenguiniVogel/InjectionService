### InjectionService

Provide ways to inject scripts or css with extensions on manifest V3

---
##### Code Injection
Example - TypeScript:
```JavaScript
InjectionService.injectCode(`console.log('Hi!')`);
// OR ---
InjectionService.injectCode(`console.log('Hi!')`, AppendOnType.HEAD);
// OR ---
InjectionService.injectCode(`console.log('Hi!')`, 'head');

// You can also choose to append to <body> instead
InjectionService.injectCode(`console.log('Hi!')`, AppendOnType.BODY);
// OR ---
InjectionService.injectCode(`console.log('Hi!')`, 'body');
```
Example - JavaScript:
```JavaScript
InjectionService.injectCode(`console.log('Hi!')`);
// OR ---
InjectionService.injectCode(`console.log('Hi!')`, 'head');

// You can also choose to append to <body> instead
InjectionService.injectCode(`console.log('Hi!')`, 'body');
```
![Result Image](docs/images/script_isl.png)

---

##### CSS Injection

CSS always gets appended to the &lt;head&gt; element. <br>
Example:
```JavaScript
InjectionService.injectCSS('e.isl { color: #00f; }');
```
![Result Image](docs/images/style_isl.png)