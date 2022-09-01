function letters(){
    var name=document.getElementById("name").value;
    if(name.length==''){
        document.getElementById("spa").style.display="none";
    } else if(name.length>=5){
        document.getElementById('spa').style.display="inline";
        document.getElementById("spa").innerHTML="values entered";
    }
    else{document.getElementById('spa').style.display="inline";
        document.getElementById("spa").innerHTML="Enter min 5letters";
    }
}
function password(){
    var pass=document.getElementById("pass").value;
    if(pass.length==''){
        document.getElementById('spb').style.display="none";
    }
    else if(pass.length<6){
        document.getElementById('spb').style.display="inline";
        document.getElementById('spb').innerHTML="Weak Password";
    }else if(pass.length>=6 && pass.length<8){
        document.getElementById('spb').style.display="inline";
        document.getElementById('spb').innerHTML="Medium Password";
    }else{
        document.getElementById('spb').style.display="inline";
        document.getElementById('spb').innerHTML="Strong Password";
    }
}
function mobile(){
    var phoneno=document.getElementById("phno").value;
    if(phoneno==''){
        document.getElementById('spn').style.display="none";
    }
    else if(isNaN(phoneno)){
        document.getElementById('spn').style.display="inline";
        document.getElementById('spn').innerHTML="only Numbers"; 
    }
    else if(phoneno.length<10 || phoneno.length>10){
        document.getElementById('spn').style.display="inline";
        document.getElementById('spn').innerHTML="Enter 10 digits";
    }
    else{ document.getElementById('spn').style.display="inline";
        document.getElementById('spn').innerHTML="Number entered";
    }
}
function mailid(){
    var email=document.getElementById("mail").value;
    if(email==''){
        document.getElementById('spm').style.display="none";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        document.getElementById('spm').style.display="inline";
    }else{
        document.getElementById('spm').innerHTML="Mail entered";
    }
}

function sub(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("mail").value;
    var pass=document.getElementById("pass").value;
    var phoneno=document.getElementById("phno").value;
    if(name==''){
        document.getElementById('spa').style.display="inline";
        document.getElementById('spa').innerHTML="Name Required";
    }
    if(email==''){
        document.getElementById('spm').style.display="inline";
        document.getElementById('spm').innerHTML="Mail Required";
    }
    if(pass==''){
        document.getElementById('spb').style.display="inline";
        document.getElementById('spb').innerHTML="Pass required";
    }
    if(phoneno==''){
        document.getElementById('spn').style.display="inline";
        document.getElementById('spn').innerHTML="Mobile no Required";
    }else{alert('Do you want to Submit');} 
}
function res(){
    alert('All the Data will be delete');
}