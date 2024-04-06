// function make_album(artist: string, title: string, tracks?: number) {
//     let album = { artist, title };
//     if (tracks) {
//         album[`tracks`] = tracks;
//     return album;
// }
// console.log(make_album("Artist One", "The First Album"));
// console.log(make_album("Artist Two", "The Second Album"));
// console.log(make_album("Artist Three", "The Third Album", 12));
// }
function make_Album(name, title, tracks) {
    return console.log({
        artistName: name,
        Title: title,
        tracks: tracks
    });
}
make_Album("Vermeer", '"Remarkably"');
make_Album("Leonardo da Vinci", '"The original Renaissance Man"');
make_Album("Rembrandt", '"One the greatest artists"');
make_Album("Michael Jackson", '"King and Queen of pop"', 15);
export {};
