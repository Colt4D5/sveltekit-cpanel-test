/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const text = 'This is data from the server...'
    return {text};
};