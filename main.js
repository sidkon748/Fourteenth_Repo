//Task 2
//Fetch Tickets Using Async/Await and Handle Errors
async function findUnresolvedTickets() {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Unresolved Ticket Fetch Failed.');
        }

        const ticketsFetched = await response.json();

        if (ticketsFetched.length === 0) {
            throw new Error('No unresolved tickets found.');
        }

        return ticketsFetched;
    } catch (error) {
        console.error('Error:', error.message);
    }
}
