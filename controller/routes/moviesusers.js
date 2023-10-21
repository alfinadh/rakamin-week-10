const Movies = require('./data')
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.get("/movies", function (req, res) {
    res.send(moviesList);
});

app.post("/movies", function (req, res) {
    movies.push({ title: req.body.title, genre: req.body.genre, year: req.body.year});
    res.json({ success: true});
});

app.put("/movies/:id", function (req, res) {
    const movieId = req.params.id;
    const updatedMovie = req.body;
    movies[movieId] = updatedMovie;
    res.send({ success: true});
});

app.delete("/movies/:id", function (req, res) {
    movies.splice(req.query.index, 1);
    res.send({ success: true});
});

//api users
app.get('/users', (req, res) => {
    res.json(userInfo);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    userInfo.push(newUser);
    res.json(userInfo);
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    userInfo[userId] = updatedUser;
    res.json(updatedUser);
});

app.delete('/users/:id', (req, res) => {
    userInfo.splice(userId, 1);
    res.send({ success: true });
});


module.exports = getMovies