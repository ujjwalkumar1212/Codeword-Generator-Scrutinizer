var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0-orp8m.mongodb.net/codeword-dev?retryWrites=true', {useNewUrlParser: true})
.then(() => {
    console.log('DB Connected');
}, err => {
    console.log(err);
});
