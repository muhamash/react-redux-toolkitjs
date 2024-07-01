export const getPost = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    console.log(response)
    return response.json();
};