class server{
  serverRecieve(fajax)
  {
  
    let text="";
    let statusnum=404;
    let statustext="not found";
    let url = fajax.url.replace("/api/", "");
    let dealt=false;//we have not yet dealt with the request
    if(fajax.method==="POST"){
      if(url === 'tasks'){//add tasks
        set(fajax.username, fajax.data);
        statusnum=200;
        statustext="ok";
        dealt=true;
      }
      if(url === 'signup'){//user sign up
        dealt=true;
        let check= setUser(fajax.data);
        if(check===false){
          statusnum=403;
          statustext="forbidden";
        }
        else{
          statusnum=200;
          statustext="ok";
        }
      }
      if(url === "setcurrentuser"){
        dealt=true;
        setCurrentUser(fajax.username);
        statusnum=200;
        statustext="ok";
      }
    }
    if(fajax.method==="GET"){
      console.log(url);
      let id = url.replace("tasks/", "");
      console.log(id);
      if(url.startsWith("tasks/") && !isNaN(parseInt(id))){//get one tasks
        dealt=true;
        text= get(fajax.username, id);
        console.log("text: " + text);
        if(text!==undefined){
          statusnum=200;
          statustext="ok";
        }
        else{
          statusnum=404;
          statustext = "not found";
        }
      }
      if(url === "tasks"){//get all tasks
        dealt=true;
        text= getAll(fajax.username);
        console.log("text: " + text);
        if(text!=null){
          statusnum=200;
          statustext="ok";
        }
        else{
          statusnum=404;
          statustext = "not found";
        }
      }
      if(url === "getcurrentuser"){
        dealt=true;
        text=getCurrentUser();
        if(text!=null){
          statusnum=200;
          statustext="ok";
        }
        else{
          statusnum=404;
          statustext = "not found";
        }
      }
      if(url === "login"){
        dealt=true;
        text= getUser(fajax.username);
          if(text===undefined){
            statusnum=404;
            statustext="not found";
          }
          else{
            statusnum=200;
            statustext="ok";
          }
        }
    }
    if(fajax.method==="PUT"){ 
      let id = url.replace("tasks/", "");
      console.log(id);
      if(url.startsWith("tasks/") && !isNaN(parseInt(id))){//update
        dealt=true;
        let check=update(fajax.username, id, fajax.data);
        if(check===true){
        statusnum=200;
        statustext="ok";
        }
        else{
          statusnum=404;
          statustext = "not found";
        }
      }
    }
    if(fajax.method==="DELETE"){
      let id = url.replace("tasks/", "");
      console.log(id);
      if(url.startsWith("tasks/") && !isNaN(parseInt(id))){//delete
          dealt=true;
          let check=remove(fajax.username, id);
          if(check===true){
          statusnum=200;
          statustext="ok";
          }
          else{
            statusnum=404;
            statustext = "not found";
          }
      }
    }
    if(dealt===false){//if the request did not match any of the actions the server can perform, it means something was wrong with the request
      statusnum=403;
      statustext="forbidden";
    }
    let response={
      responsetext: text,
      status: statusnum,
      message: statustext

    }
    return response;
  
  }
}

