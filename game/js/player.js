
class Player {

    constructor(ctx, playerPosX, playerPosY, playerSizeW, playerSizeH) {
        this.ctx = ctx

        this.imageInstance = undefined

        this.playerSpecs = {
            pos: { x: playerPosX, y: playerPosY },
            size: { w: playerSizeW, h: playerSizeH },
            //vel: { x: 6, y: 2 }
        }

        this.init()
        this.drawPlayer()
        //  this.move()

    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './img/prueba_enemies.png'
    }

    drawPlayer() {
        // console.log("hola")
        // this.move()

        this.ctx.drawImage(
            this.imageInstance,
            this.playerSpecs.pos.playerPosX,
            this.playerSpecs.pos.playerPosY,
            this.playerSpecs.size.playerSizeW,
            this.playerSpecs.size.playerSizeH
        )
    }

    //move() { }

    //limit() { }

}
