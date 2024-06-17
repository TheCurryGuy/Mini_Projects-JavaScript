const users = [
    {email : "admin.pwlive", password : "admin123"},
    {email : "user.pwlive", password : "user123"},
    {email : "guest.pwlive", password : "guest123"},
    {email : "admin", password : "admin"},
    {email : "user", password : "user"}
]

function login(users, email, password){
    let found = false;
    for(k in users){
        if(users[k].email === email && users[k].password === password){
            console.log("Login Successful");
            found = true;
            break;
        }
        else if(users[k].email === email && users[k].password !== password){
            console.log("Incorrect Password");
            found = true;
            break;
        }
        else if(users[k].email !== email && users[k].password === password){
            console.log("Incorrect Email");
            found = true;
            break;
        }
    }
    if(!found){
        console.log("User not found");
    }
}

login(users, "user", "user");