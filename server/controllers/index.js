// index.js
// Darosh Irani
// 822955068
// Project Name - Favourite Book List App

export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}