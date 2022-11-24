 
 import{ Component}from "@angular/core";
 @Component({
selector:'app-server',
template:`<h1 id = "test1"> This is my server component </h1>
<h2 id="test2"> This is h2 </h2>
{{name}}ng `,

styleUrls:['./server.component.css']
 })

 export class ServerComponent{
name:string='Codemind';
 }