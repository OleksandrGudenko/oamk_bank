function ownsendingSubmit(){
    var url = 'http://localhost/oamk_bank/index.php/api/Bank/transactions';
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', url, true);
    var form = document.getElementById('ownsending_form');
    var formData = new FormData(form);
    xhttp.onreadystatechange = function() {
    };
    xhttp.send(formData);  
    
}

function othersendingSubmit(){
    var url = 'http://localhost/oamk_bank/index.php/api/Bank/transactions';
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', url, true);
    var form = document.getElementById('othersending_form');
    var formData = new FormData(form);
    xhttp.onreadystatechange = function() {
    };
    xhttp.send(formData);  
}


function receiver_othersendingSubmit(id){
    var f = document.createElement("form");
    f.setAttribute('method',"post");

    var user_id = document.createElement("input");
    user_id.setAttribute('name',"user_id");
    user_id.setAttribute('value', id);

    var sender = document.createElement("input");
    sender.setAttribute('name',"sender");
    sender.setAttribute('value', document.getElementById('sender_other').value);

    var receiver = document.createElement("input");
    receiver.setAttribute('name',"receiver");
    receiver.setAttribute('value', document.getElementById('reciever_payment').value);

    var amount = document.createElement("input");
    amount.setAttribute('name',"amount");
    amount.setAttribute('value', -document.getElementById('amount_payment').value);

    var reference = document.createElement("input");
    reference.setAttribute('name',"reference");
    reference.setAttribute('value', document.getElementById('other_reference').value);
    
    f.appendChild(user_id);
    f.appendChild(sender);
    f.appendChild(receiver);
    f.appendChild(amount);
    f.appendChild(reference);

    var formData = new FormData(f);
    var url = 'http://localhost/oamk_bank/index.php/api/Bank/transactions';
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', url, true);
    xhttp.onreadystatechange = function() {
    };
    xhttp.send(formData);  
}

function onchangeValue(){
    if(selectedNodeBalance == '' && selectedNodePayBalance == ''){
        return;
    }
    else{
    var sender_own = document.getElementById("sender_transfer");
    var selectedNode = sender_own[sender_own.selectedIndex].value;
    var selectedNodeBalance = sender_own[sender_own.selectedIndex].id;
    var receiver_own = document.getElementById("reciever_transfer");
    var selectedNode2 = receiver_own[receiver_own.selectedIndex].id;

    var sender_other = document.getElementById("sender_payment");
    var selectedNode3 = sender_other[sender_other.selectedIndex].value;
    var selectedNodePayBalance = sender_other[sender_other.selectedIndex].id;

    
    document.getElementById('curr_balance').value = selectedNodeBalance + '\u00A0'+'€';
    document.getElementById('curr_balance_payment').value = selectedNodePayBalance + '\u00A0'+'€';
    
    document.getElementById("sender_own").value = selectedNode;
    document.getElementById("receiver_own").value = selectedNode2;
    document.getElementById("sender_other").value = selectedNode3;
    }
}