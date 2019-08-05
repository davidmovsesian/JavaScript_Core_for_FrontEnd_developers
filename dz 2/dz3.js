function show(data) {
    console.log(data);
}

var login='Admin';
var password='Cancel';

switch (login) {
    case "Admin":{
        switch (password) {
            case "TheMaster":{
                show('Welcome!');
                break;
            }
            case "Other":{
                show('Wrong password');
                break;
            }
            case "Cancel":{
                show('Canceled.');
                break;
            }
        }
    break;
    }

    case "Cancel":{
        show('Canceled.');
        break;
    }
    default:{
        show('I dont know you');
    }
}



