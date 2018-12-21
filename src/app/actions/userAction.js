export function setAge(number){
    return{
        type:"SET_AGE",
        payload:number
    }
}

export function setName(name){
    // return dispatch =>{
    //     setTimeout( () => {
    //         dispatch({
    //             type:"SET_NAME",
    //             payload:name
    //         })
    //     }
    //     ,3000);
    // }
    // return{
    //     type : "SET_NAME",
    //     payload: new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(name);
    //         },3000)
    //     })        
    // }; 
    return{
        type : "SET_NAME",
        payload: {
                promise: new Promise((resolve, reject) => { 
                    fetch("http://localhost:9000/api/getuser", {
                        method: 'GET',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json'
                        }
                        //,body: JSON.stringify({ email: email, password: password})
                    }
                    ).then(                
                        response => response.json(),
                        error => console.log('An error occurred.', error)
                    ).then(json => {
                        // want to updatePath for the route here:
                        //dispatch(updatePath('/'));
                        console.log(json);
                        json ?
                            resolve(json[1]["Name"]) : "Please run api";
                    })
                    .catch(error => {
                        reject(error);
                        //dispatch(error); -- promise Issue                        
                    })
                })
            }       
    }; 
}