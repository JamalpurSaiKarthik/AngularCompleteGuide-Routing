// This will be the class which will reach the server and get data.
export class AuthService{
loggedIn = false;

isAuthenticated(){
    const promise = new Promise(
        (resolve,reject)=>{
            setTimeout(()=>{resolve(this.loggedIn);},800);
        }
    );
    return promise;
}

login()
{
    this.loggedIn = true;
}

logOut(){
    this.loggedIn = false;
}

}