function loginUser(email, senha) {
    console.log('Sending login data:', { email, senha });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // Set a timeout of 5 seconds

    fetch('https://hook.us2.make.com/w477lqahuysbymwoefaf4q89iow7ibxl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, senha }),
        signal: controller.signal // Attach the signal to the fetch request
    })
    .then(response => {
        clearTimeout(timeoutId); // Clear the timeout if the request completes
        console.log('Response status:', response.status); // Log the response status
        if (!response.ok) { // Check if response is not ok
            throw new Error('Failed to login, status code: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log('Login successful:', data);
        window.location.href = 'index.html'; // Redirect to index.html on successful login
    })
    .catch(error => {
        if (error.name === 'AbortError') {
            console.error('Login request timed out');
            alert('Login request timed out. Please try again.');
        } else {
            console.error('Error during login:', error);
            alert('Login failed: ' + error.message); // Alert user on error
        }
    });
}

function handleLogin(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    loginUser(email, senha);
}

