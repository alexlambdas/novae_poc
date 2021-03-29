async function fetchAllUsers(){
    let response = await fetch("http://localhost:6001/api/v1/user");
    return await response.json();
}

async function fetchOneUser(dni){
    let response = await fetch(`http://localhost:6001/api/v1/user/${dni}`);
    return await response.json();
}

export {
    fetchAllUsers,
    fetchOneUser
}