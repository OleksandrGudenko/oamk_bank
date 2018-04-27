function ownsendingSubmit(){
    var url = 'http://localhost/oamk_bank/index.php/api/bank/transactions';
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', url, true);
    var form = document.getElementById('ownsending_form');
    var formData = new FormData(form);
    xhttp.onreadystatechange = function() {
    };
    xhttp.send(formData);  
    
}

function othersendingSubmit(){
    var url = 'http://localhost/oamk_bank/index.php/api/bank/transactions';
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST', url, true);
    var form = document.getElementById('othersending_form');
    var formData = new FormData(form);
    xhttp.onreadystatechange = function() {
    };
    xhttp.send(formData);  
}

function onchangeValue(){
    var sender_own = document.getElementById("sender_transfer");
    var selectedNode = sender_own[sender_own.selectedIndex].id;
    var receiver_own = document.getElementById("reciever_transfer");
    var selectedNode2 = receiver_own[receiver_own.selectedIndex].id;
    var sender_other = document.getElementById("sender_payment");
    var selectedNode3 = sender_other[sender_other.selectedIndex].id;
    document.getElementById("sender_own").value = selectedNode;
    document.getElementById("receiver_own").value = selectedNode2;
    document.getElementById("sender_other").value = selectedNode3;
}