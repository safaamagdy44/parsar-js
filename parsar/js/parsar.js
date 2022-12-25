// console.log("safaa");

let code=prompt("enter the code<br>");

document.write("code : "+code+"<br>")
 let devide = (j, st = []) => {
    let index = 0;
    let ar = [];
    for (i = j; i < st.length; i++) {
        if (st[i] != " " ) {
            ar[index] = st[i];
            index++;
        } else if (st[i] != " ") {
            console.log(st[i] + " :is an operator");
            break;
        } else {
            break;
        }
    }
    return ar;
}
let i=0;
let compound=[];
let ifs=[];
let text=[];
let simble=[];
let LOOP=[]; 
for(i=0;i<code.length;i++){
    document.write("__________________________")
    let ar=devide(i,code)
    let b=ar.reduce((acc,cur) => acc+cur)
    if(b==="BEGIN"){
        for(s=i;s<code.lastIndexOf("END");s++){
            compound[s]=code[s];
        }
        document.write("<div>")
        document.write("compound statement::::: BEGIN "+(compound.reduce((acc,cur) => acc+cur))+"END");
        document.write("</div>")
    }//compound statement
    else if(b==="FOR"||b==="WHILE"||b==="REPEAT"){
        for(s=i;s<code.indexOf("END");s++){
            // console.log(code[s])
            LOOP[s]=code[s];
        }
        document.write("<div>")
        document.write(" LOOP statement:::::  "+b+" "+(LOOP.reduce((acc,cur) => acc+cur))+"END");
        document.write("</div>")
    }//loop   
    else if(b==="('"){
        for(s=i;s<code.indexOf("')");s++){
            text[s]=code[s];
        }
        document.write("<div>")
        document.write("text:::::"+(text.reduce((acc,cur) => acc+cur)));
        document.write("</div>")
    }//text
    else if(b==="("){
        l=0;
        for(s=i;s<code.indexOf(")");s++){
            simble[l]=code[s];
            l=l+1;
            console.log(code);
        }
        document.write("<div>")
        document.write("simble expression::::: ( "+(simble.reduce((acc,cur) => acc+cur))+")");
        document.write("</div>")
    }//(expression) 
    else if(b==="IF"){
        l=0;
        for(s=i;s<code.indexOf(";");s++){
            ifs[l]=code[s];
            l=l+1;
            console.log(code)
        }
        document.write("<div>")
        document.write(" if statement:::::  IF"+(ifs.reduce((acc,cur) => acc+cur))+";");
        document.write("</div>")
    }//if statement 
}

 




//   IF ( i = j ) THEN t := 200
//   ELSE f := -200 ;






// FOR ( n := 1 ) TO 20 DO BEGIN 
//   writeln (' n square root ') ; 
//    root := n  ;
//   writeln (' root ') ; 
//   END