const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://username:password@cluster0.tmw5z.mongodb.net/database_name?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));


