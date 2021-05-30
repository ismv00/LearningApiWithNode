const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ismv00:Igor2502@apinode.yobje.mongodb.net/apiNode?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
 mongoose.Promise = global.Promise;

module.exports = mongoose;