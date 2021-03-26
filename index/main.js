// function khongduocClick(){
//     alert('Khong duoc click')
// }
function call(){
    // let a;
    // console.log(a.value);
    // document.querySelector("input").style.color="red"
    // alert(document.querySelector("input").value)
    // var i, fib=new Array(20);

	// var n=prompt("Ban hay nhap so phan tu trong day Fibonaci: ");
	// document.write("First n fibonacci numbers are<br/>");
	
	// fib[0]=1;
	// fib[1]=1;
	// document.write(fib[0],"<br/>",fib[1],"<br/>");

	// for(i=0;i<n-2;i++) {
	// 	fib[i+2]=fib[i+1]+fib[i];
	// 	document.write(fib[i+2],"<br/>");
	// }
    let sum=1;
    let num1 =0; num2=1;
    let count = document.querySelector("input").value;
    for(let i=0;i<count;i++)
    {
        sum = num1+num2;
        num1 = num2;
        num2 = sum;
    }
    document.querySelector("#output").innerHTML=sum;
}
    function addNote(){
       let note= document.querySelector("input").value;
       let numberItem = document.querySelectorAll("li").length;
       // add vao trong list ul
       document.querySelector("ul").innerHTML +='<li><button onClick="done('+numberItem +')">Done</button>'+ note + '</li>';
    }
    function done(numberItem) {
        let item = document.querySelectorAll("li")[numberItem];
        item.children[0].remove();
        let text = item.innerHTML;
        item.innerHTML="<del>"+text+"</del>";
    }
