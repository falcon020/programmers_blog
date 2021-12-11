function openbar(){
	let sidebar = document.getElementById("sidebar");
	sidebar.style.right = "0";
}
function closebar(){
	let sidebar = document.getElementById("sidebar");
	sidebar.style.right = "-350px";
}



function nextpage(){
	let login = document.getElementById("loginProfile")
	window.location = "../oynalar/profile2.html"
}