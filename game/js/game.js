const game = {
    appName: 'BEST GAME EVER',
    author: 'Helena y Victor',
    version: '1.0.0',
    license: undefined,
    description: 'Basic plattform game',
    ctx: undefined,
    framesIndex: 0,
    //FPS: 60,
    background: undefined,
    player: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    init() {
        this.setContext()
        this.setDimensions()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
    },
    start() {
        this.reset()

        // setInterval(() => {
        //this.framesIndex > 5000 ? this.framesIndex = 0 : this.framesIndex++
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 10)
        //  this.clearAll()
        //this.drawAll()
        //this.framesIndex ++
        //}, 1000 / this.FPS)
    },
    reset() {
        this.player = new Player(this.ctx, 100, 100, 100, 100)
        this.background = 'yellow'
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.player.drawPlayer()
    },
    //createPlayer() { this.player.drawPlayer() }


}