let resources = {
    knight: {
        properties:{
            health: 20,
            height: 140,
            width: 20,
            speed: 9.5
        },
        buttons:[
            [
                ['KeyX'],
                ['push'],
                [0]
            ]
        ],
        abillities:[
            {
                name: 'Rush Nail',
                type: 'middle',
                frame_start: 10,
                frame_attack: 20,
                frame_end: 20,
                attack: {
                    attack_steps: 1,
                    distance: 140,
                    appear_in: 'player_position',
                    move_to: 'player_look',
                    special_flags: [
                        'ground'
                    ],
                    sprites: [
                        'image.png'
                    ]
                },
                damage: 1
            }
        ],
        sprites: {
            moving: {
                standing_left: 'images/sprites/knight/standing_left.png',
                standing_right: 'images/sprites/knight/standing_right.png',
                move_left: ['images/sprites/knight/move_left0.png','images/sprites/knight/move_left1.png','images/sprites/knight/move_left2.png','images/sprites/knight/move_left3.png','images/sprites/knight/move_left4.png'],
                move_right: ['images/sprites/knight/move_right0.png','images/sprites/knight/move_right1.png','images/sprites/knight/move_right2.png','images/sprites/knight/move_right3.png','images/sprites/knight/move_right4.png'],
                jump_left: ['images/sprites/knight/jump_left0.png'],
                jump_right: ['images/sprites/knight/jump_right0.png']
            }
        }
    }
}