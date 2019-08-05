function show(data) {
    console.log(data);
}

var login='Admin';
var password='Other';
if (login=='Admin' && password=='TheMaster'){
    show('Cancel')
}else if (login=='Admin' && password=='Other'){
    show('Wrong password')
}
else if (login=='Admin' && password=='Cencel'){
    show('Canceled.')
}
else if(login=='Cancel'){
    show('Canceled.');
}else if(login!='Admin'){
    show('I dont know you')
}

