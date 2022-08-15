



export const getUsersByUsername = async( user, page = 0 )=>{

    const url = `https://api.github.com/search/users?q=${user}&page=${page}&per_page=10`;

    const resp = await fetch(url);
    const body = resp.json();

    return body

}