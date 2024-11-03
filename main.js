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

//Task 3
//Dynamically display tickets on the page
function displayTickets(tickets) {
    const container = document.getElementById('Container');
    container.innerHTML = '';

    tickets.forEach(ticket => {
        const ticketElement = document.createElement('div');
        ticketElement.classList.add('ticket');

        ticketElement.innerHTML = `
            <h3>Ticket ID: ${ticket.id}</h3>
            <p><strong>Customer Name:</strong> User ID ${ticket.userId}</p>
            <p><strong>Issue Description:</strong> ${ticket.title}</p>
            <p><strong>Details:</strong> ${ticket.body}</p>`;

        container.appendChild(ticketElement);
    });
}