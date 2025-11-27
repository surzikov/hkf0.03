let canvas = document.querySelector('#canvas')
canvas.height = screen.width /1.8
canvas.width = screen.width
let ctx = canvas.getContext('2d')
let background = 'images/backgrounds/bg1.png'
let floor = canvas.height *0.87

let img = new Image()
img.src = background
let player1_name = 'knight'
let player1_resources = resources.knight
let player1_properties = {
    health: player1_resources.properties.health,
    x: 300 * canvas.width / 2000,
    y: floor - player1_resources.properties.height * (canvas.width/2000 ),
    width: player1_resources.properties.width * (canvas.width/2000),
    height: player1_resources.properties.height * (canvas.width/2000),
    
    condition: 'ground',
    attack_flag: false,
    move_flag: false,
    img: new Image(),
    side: 'right',
    speed: player1_resources.properties.speed
}
console.log(player1_resources)

img.onload = function(){
    drawFrame()
}
let keys1 = []
function drawFrame(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    drawPlayer1()
    setTimeout(drawFrame, 5)
}
let game_start_flag = true

function drawPlayer1(){
    if(player1_properties.attack_flag == false & player1_properties.move_flag == false){
        // if(player1_properties.condition == 'ground'){
            if(player1_properties.side == 'right'){
                player1_properties.img.src = player1_resources.sprites.moving.standing_right
            }
            if(player1_properties.side == 'left'){
                player1_properties.img.src = player1_resources.sprites.moving.standing_left
            }
            
            
        // }
    }
    ctx.drawImage(player1_properties.img, player1_properties.x, player1_properties.y, player1_properties.width, player1_properties.height)
}
let count = 0
let keys1_history = []
function clearHistory1(){
    let time
    if(keys1_history.length != 0){
        time = 2000 / keys1_history.length
        setTimeout(()=>{
            if(keys1_history.length != 0){
                keys1_history.splice(0,1)
            }
            clearHistory1()
        },time)
    }else{
        setTimeout(clearHistory1, 10)
    }
    
}
document.addEventListener('keydown',(e)=>{
    if(!keys1.includes(e.code)){
        keys1.push(e.code)
        keys1_history.push(e.code)
    }
})
document.addEventListener('keyup', (e)=>{
    keys1.splice(keys1.indexOf(e.code),1)
})
function checkMove(){

        if(keys1.includes('KeyD') & player1_properties.x+player1_properties.speed < canvas.width-player1_properties.width/2){
            player1_properties.side = 'right'
            player1_properties.x+=player1_properties.speed
        }else if(keys1.includes('KeyA') & player1_properties.x-player1_properties.speed > 0 + player1_properties.width/2){
            player1_properties.side = 'left'
            player1_properties.x-=player1_properties.speed
        }
        if(keys1.includes('KeyZ') & player1_properties.condition == 'ground'){
            playerJump()
        }
    setTimeout(checkMove, 30)

}
let grav_flag = true
let jump_count = 0
function helpJump(){
    jump_speed = 3 - (jump_count/100 * 4)
    setTimeout(()=>{
        if(jump_count<50){
            player1_properties.y-=jump_speed
            jump_count++
            helpJump()
        }else{
            setTimeout(()=>{
               grav_flag = true 
               jump_count = 0
            }, 50)
            
        }
    },5)
}
function playerJump(){
    grav_flag = false
    player1_properties.condition = 'air'
    helpJump()
}
let grav_count = 0
function gravitation(){
    let fall_speed = 2 + grav_count/5
    if(player1_properties.condition != 'ground' & grav_flag == true){
        player1_properties.y+=Math.floor(fall_speed)
        grav_count++
        if(player1_properties.y >= floor-player1_properties.height){
            player1_properties.condition = 'ground'
            player1_properties.y = floor-player1_properties.height
            grav_count=0
        }
    }
    setTimeout(gravitation, 10)
}
clearHistory1()
checkMove()
gravitation()