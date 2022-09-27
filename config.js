module.exports = {
    app: {
        px: 'BOT PREFIX',
        token: 'MTAyNDA4OTY5MjY2NjM1MTY5Nw.G3_av1.kk26tAcDz30HmYjQksssC4hri8vH4XTuIRw2Mk',
        playing: 'PLAYING STATUS OF THE BOT'
    },

    opt: {
        DJ: {                   // Custom DJ role
            enabled: false, 
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,            // The maximum Volume to select (Default = 100)
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
