const miInput = document.querySelector('[data-function="toFilterStreamers"]');

const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];


function filtrarStreamers(streamer) {
    return streamer.name.includes(miInput.value);
}
miInput.addEventListener('input', () => {
    let newStreamers = streamers.filter(filtrarStreamers)
    console.log(newStreamers);
});



