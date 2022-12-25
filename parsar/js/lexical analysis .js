let str=prompt("enter the syntax you want to examine :)");
document.write('<div class="text-center text-danger"> the code is :'+str+'</div>');
let star=[]; 
let num=[];
let i=0;
let j=0;
let devide=(j,st=[])=>{
    let index=0;
    let ar=[];
    for(i=j;i<st.length;i++){
        if(st[i]!=" " &&st[i]!="; "){
            ar[index]=st[i];
            index++;
        }else if(st[i]!=" "){
            console.log(st[i]+" :is an operator");
            break;
        }else{
            break;
        }
    }
    return ar;
}
 function number(j,st){
     for(i=j;i<st.length;i++){
        e=st[i]
            if(e==0||e==1||e==2||e==3||e==4||e==5||e==6||e==7||e==8||e==9)
            {
                num[i]=e
            }else{
                break;
            }
    }
            return num;
}


// console.log(number(0,str));
for(i=0 ;i<str.length;i++){
    let a=devide(i,str);
    if((a.reduce((acc,cur)=>acc+cur))==="if"||(a.reduce((acc,cur)=>acc+cur))=="else"||(a.reduce((acc,cur)=>acc+cur))=="for"||(a.reduce((acc,cur)=>acc+cur))=="while"||(a.reduce((acc,cur)=>acc+cur))=="break"||(a.reduce((acc,cur)=>acc+cur))=="print"||(a.reduce((acc,cur)=>acc+cur))=="class"||(a.reduce((acc,cur)=>acc+cur))=="System")
        {
            console.log((a.reduce((acc,cur)=>acc+cur))+" :is a key word");
        }
    else if(isNaN(a.reduce((acc,cur)=>acc+cur))){
        if(a.reduce((acc,cur)=>acc+cur)==="("||a.reduce((acc,cur)=>acc+cur)==="&&"||a.reduce((acc,cur)=>acc+cur)==="||"||a.reduce((acc,cur)=>acc+cur)===")"||a.reduce((acc,cur)=>acc+cur)==="="||a.reduce((acc,cur)=>acc+cur)==="+"||a.reduce((acc,cur)=>acc+cur)==="-"||a.reduce((acc,cur)=>acc+cur)==="*"||a.reduce((acc,cur)=>acc+cur)==="&"||a.reduce((acc,cur)=>acc+cur)==="^"||a.reduce((acc,cur)=>acc+cur)==="!="||a.reduce((acc,cur)=>acc+cur)==="=="||a.reduce((acc,cur)=>acc+cur)===">="||a.reduce((acc,cur)=>acc+cur)==="<="||a.reduce((acc,cur)=>acc+cur)==="<"||a.reduce((acc,cur)=>acc+cur)===">"||a.reduce((acc,cur)=>acc+cur)==="/"||a.reduce((acc,cur)=>acc+cur)==="{"||a.reduce((acc,cur)=>acc+cur)==="}"||a.reduce((acc,cur)=>acc+cur)==="){"||a.reduce((acc,cur)=>acc+cur)===";"||a.reduce((acc,cur)=>acc+cur)===","){
            console.log(a.reduce((acc,cur)=>acc+cur)+"  :is an operator");
        }else if(a[0]==='"'||a[a.length-1]=='"'){
            console.log(a.reduce((acc,cur)=>acc+cur)+" :is a text");
        }else if(a.reduce((acc,cur)=>acc+cur)==="System.out.print"){
            console.log((a.reduce((acc,cur)=>acc+cur))+" :the print code");
        }else{
            console.log(a.reduce((acc,cur)=>acc+cur)+" :is a variable"); 
        }    
        }else{
            console.log((a.reduce((acc,cur)=>acc+cur))+" :is a number");
        }
    }
    console.log("EndOfSystem");

    //if ( a1 = 234 ) { print ( "safaa" ) ; }
    //for ( num1 = 5 && num2 = 4 ) { System.out.print ( "hello world" ) }

