let user = prompt('Username:')

if(user == 'Admin'){

    let password = prompt('Password:')

    if(password == 'TheMaster'){
        alert('Welcome!')
    }
    else if( password == ''){
        alert('Cancel')
    }
    else{alert('GTFO!')}
} 
else if(user == ''){
    alert('Cancel')
}
else{alert('I dont know you')};