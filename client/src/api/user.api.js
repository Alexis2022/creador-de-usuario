export const createUserRequest = async (users) => {
    try {
        const response = await fetch("http://localhost:3000/users/", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(users)
        });
        const data = await response.json();
    } catch (error) {
        console.log(error)
    }
}

export const getUserRequest = async () => {
    try {
        const response = await fetch("http://localhost:3000/users/");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}