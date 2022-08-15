


export const getUserByUsername = async( user )=>{

    const url = `https://api.github.com/users/${user}`;

    const resp = await fetch(url);
    const body = resp.json();

    return body

}