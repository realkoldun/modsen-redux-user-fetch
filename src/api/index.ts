export async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
        const result = await response.json();
        return result.map((user: any) => ({
            id: user.id,
            name: user.name,
            username: user.username,
        }))
    } else throw new Error('Error status: ' + response.status.toString());
}