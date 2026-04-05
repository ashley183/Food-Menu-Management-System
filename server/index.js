const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

// Routes
app.use('/api/categories', require('./routes/categories'));
app.use('/api/menu-items', require('./routes/menu-items'));
app.use('/api/ingredients', require('./routes/ingredients'));
app.use('/api/item-ingredients', require('./routes/item-ingredients'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
