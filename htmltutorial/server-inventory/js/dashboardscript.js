window.onload=function(){
    const role=localStorage.getItem('role');


if(!role)
{
    alert('you must log in first!');
    window.location.href='login.html';
}

if(role==='admin'){
    document.getElementById('addserver').style.display='block';
    document.getElementById('exportdata').style.display='block';
}

document.getElementById('viewinventory').addEventListener('click', function() {
    window.location.href = 'inventory.html';
  });

document.getElementById('addserver').addEventListener('click', function(){
    window.location.href='add-edit.html';
});

document.getElementById('exportdata').addEventListener('click', function(){
    window.location.href='export.html';
});

};