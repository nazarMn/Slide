const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb+srv://admin:C0Urzbr1pymwOgsK@admin.i6lpg.mongodb.net/?retryWrites=true&w=majority&appName=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));

const commentSchema = new mongoose.Schema({
    comment: String,
    rating: Number,
    name: String
});
const comment = mongoose.model('Comment', commentSchema);
app.get('/feedbacks', (req, res) => {
    comment.find()
        .then(feedbacks => res.json(feedbacks))
        .catch(error => console.error('Error fetching feedbacks:', error));
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})