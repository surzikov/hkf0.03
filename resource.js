let resources = {
    knight: {
        properties:{
            health: 20,
            height: 120,
            width: 60,
            speed: 10
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
                forward: [],
                back: [],
                jump: []
            }
        }
    }
}