const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit-reservation', (req, res) => {
    const { name, email, phone, terms } = req.body;
    
    // Log the submission (in production, you'd save to database)
    console.log('New reservation:', {
        name,
        email,
        phone,
        terms,
        timestamp: new Date().toISOString()
    });
    
    // Send success response
    res.json({
        success: true,
        message: 'Ďakujeme! Pošleme ti podrobnosti a inštrukcie na zaplatenie zálohy 100 EUR.'
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🎨 Medicína Maľovania website running at http://localhost:${PORT}`);
    console.log(`📱 Access from mobile: http://[your-ip]:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Server shutting down gracefully...');
    process.exit(0);
});
