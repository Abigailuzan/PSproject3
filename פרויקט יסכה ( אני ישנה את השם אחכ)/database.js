//each user has his contacts saved in an array, with his username as the key

function get(username, id)
{
    let items=JSON.parse(localStorage.getItem(username));
    return items.find(x=>x.id===id);
    /*for (i = 0; i < items.length; i++) {
        if(items[i].id==id){
            return items[i]
        }
    }
    return null;*/
}
function getAll(username)
{
    return JSON.parse(localStorage.getItem(username))
    /*if(items==null){
        return result;
    }
    for(i=0; i<items.length; i++){
        console.log(items[i]);
        if(items[i].id!=-1){
            result.push(items[i]);
        }
    }
    return result;*/
}
function update(username, id, item)
{
    let items=JSON.parse(localStorage.getItem(username));
    if(items===null){
        return false;
    }
    let found=false;
    item.forEach(x=> {
        if (x.id === id) {
            x.name = item.name;
            x.description = item.description;
            x.finished = item.finished;
            found = true;
        }
    });
    /*for(i=0; i<items.length; i++){
        if(items[i].id==id){
            items[i].firstname = item.firstname;
            items[i].lastname = item.lastname;
            items[i].phonenumber = item.phonenumber;
            items[i].email = item.email;
            found=true;
        }
    }*/
    if(found===false){
        return false;
    }
    localStorage.removeItem(username);
    localStorage.setItem(username, JSON.stringify(items));
    return true;
}
function remove(username, id)// שינינו את זה לשלנו
{
    let items=JSON.parse(localStorage.getItem(username));
    if(items===null){
        return false;
    }
    if (items.contain(x=>x.id ===id)){
        let newItems = items.remove(x=>x.id===id)
        localStorage.removeItem(username);
        localStorage.setItem(username, JSON.stringify(newItems));
        return true;
    }
    return false;
    /*for(i=0; i<items.length; i++){
        if(items[i].id==id){
            items[i].id=-1;
            found=true;
        }
    }*/
    /*if(found===false){
        return false;
    }*/
    /*localStorage.removeItem(username);
    localStorage.setItem(username, JSON.stringify(items));*/
}
function set(username, item) {
    console.log(username);
    let serialTask = localStorage.serialTask;
    if(serialTask){
        serialTask++;
    }
    else{
        serialTask = 0;
    }
    localStorage.serialTask = serialTask;
    item.id = serialTask;
    let items=JSON.parse(localStorage.getItem(username));
    if(items===null)
    {
        console.log(items);
        items=[];
    }
    else{
        localStorage.removeItem(username);
    }
    items.push(item);
    localStorage.setItem(username, JSON.stringify(items));

}
//there is an array of users
function setUser(person){
    let users=JSON.parse(localStorage.getItem("users"));
    if(users==null){
        users=[];
    }
    for(i=0; i<users.length; i++){
        if(users[i].password===person.password||users[i].name===person.name){
            return false;
        }
    }
    users.push(person);
    localStorage.removeItem("users");
    localStorage.setItem("users", JSON.stringify(users));
    return true;
}
function getUser(username){
    let users=JSON.parse(localStorage.getItem("users"));
    return users.find(x=>x.name ===username.name)?.password;
    /*if(users!==undefined){
        for(i=0; i<users.length; i++){
            if(users[i].name===username){
                return users[i].password;
            }
        }
    }
    
    return null;*/
}
//the current user is saved in the local storage
function getCurrentUser(){
     return JSON.parse(localStorage.getItem("currentuser"));
}
function setCurrentUser(name){
    let cu = localStorage.currentUser;
    if(cu!==undefined){
        localStorage.removeItem("currentuser");
    }
    localStorage.setItem("currentuser", JSON.stringify(name));
}

