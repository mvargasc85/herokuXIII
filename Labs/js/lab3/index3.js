$(document).ready(function(){
	init();
});

function init(){
	
	$('#container').append('<section id="main"></section>');
	$('section#main').append('<article><header><h2>Parrafo I</h2></header></article>');	
	$('article').append('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue pharetra eros in imperdiet. In sit amet ex bibendum, mollis sem eu, volutpat tortor. Sed nec arcu rutrum, sagittis enim nec, volutpat mi. Proin fringilla ante vitae nulla facilisis, sed euismod ligula tincidunt. Nam venenatis aliquam porttitor. Ut id molestie arcu. Nulla viverra augue id sapien pulvinar fringilla. Mauris condimentum finibus est quis ultrices. Duis vitae sapien feugiat lorem vestibulum euismod eget in nisi. Nam in auctor ex. Donec lectus felis, consectetur molestie gravida eget, lacinia porttitor felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum euismod sem ac nibh lacinia, eu dictum tellus vestibulum. Cras ut pretium mauris, sed luctus neque. Nullam egestas, justo id congue bibendum, ligula metus interdum mauris, et porta diam ipsum nec tellus. Sed ultrices congue massa, non sollicitudin mauris hendrerit ut.</p>');
	$('article').append('<h2>Párrafo II</h2>');
	$('article').append('<p>Donec posuere vitae libero nec sollicitudin. Suspendisse at mauris at nulla semper tempor ac non tortor. Nulla tincidunt vestibulum sagittis. Praesent tempus ex eu urna rutrum aliquet. Mauris feugiat rhoncus nunc, eget luctus lorem varius at. Curabitur eu velit risus. Duis gravida sed urna nec suscipit.</p>');	
	
}

