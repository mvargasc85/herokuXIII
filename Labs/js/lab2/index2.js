window.onload = init

function init(){
	var container = document.getElementById("container")
	
	var section = document.createElement("section");    
	section.setAttribute("id", "main");
	var article = document.createElement("article");    
	var header = document.createElement("header"); 
	var h2 = document.createElement("h2"); 
	var t = document.createTextNode("Parrafo I");
	h2.appendChild(t);
	header.appendChild(h2);
	article.appendChild(header);
	section.appendChild(article);
	container.appendChild(section);
	
	var p1 = document.createElement("p"); 
	var t1 = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue pharetra eros in imperdiet. In sit amet ex bibendum, mollis sem eu, volutpat tortor. Sed nec arcu rutrum, sagittis enim nec, volutpat mi. Proin fringilla ante vitae nulla facilisis, sed euismod ligula tincidunt. Nam venenatis aliquam porttitor. Ut id molestie arcu. Nulla viverra augue id sapien pulvinar fringilla. Mauris condimentum finibus est quis ultrices. Duis vitae sapien feugiat lorem vestibulum euismod eget in nisi. Nam in auctor ex. Donec lectus felis, consectetur molestie gravida eget, lacinia porttitor felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum euismod sem ac nibh lacinia, eu dictum tellus vestibulum. Cras ut pretium mauris, sed luctus neque. Nullam egestas, justo id congue bibendum, ligula metus interdum mauris, et porta diam ipsum nec tellus. Sed ultrices congue massa, non sollicitudin mauris hendrerit ut.");
	p1.appendChild(t1);
	article.appendChild(p1);
	
	var h3 = document.createElement("h2");
	var t2 = document.createTextNode("Parrafo II");
	h3.appendChild(t2);
	article.appendChild(h3);
	
	var p2 = document.createElement("p"); 
	var t3 = document.createTextNode("Donec posuere vitae libero nec sollicitudin. Suspendisse at mauris at nulla semper tempor ac non tortor. Nulla tincidunt vestibulum sagittis. Praesent tempus ex eu urna rutrum aliquet. Mauris feugiat rhoncus nunc, eget luctus lorem varius at. Curabitur eu velit risus. Duis gravida sed urna nec suscipit.");
	p2.appendChild(t3);
	article.appendChild(p2);
	
}

