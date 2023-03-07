export const getTaskRequest = async () => {
    try {
        const response = await fetch("https://creador-tareas-production.up.railway.app/tasks/");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}