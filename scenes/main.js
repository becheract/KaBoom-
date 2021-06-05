const player = add([
  sprite('player'),
  scale(2.0),
  pos(10,10),
  body()
])

const moveSpeed = 200

keyDown('right', () => {
  player.move(moveSpeed,0)
})

keyDown('left', () => {
  player.move(-moveSpeed,0)
})

addLevel([
  '           ',
  '        @  ',
  '           ',
  'xxxxxxxxxxx',
], {
  width: 40,
  height: 40,
  'x' : [sprite('ground'), solid()],
  '@' : [sprite('enemy'), scale(1.00),body(), 'dangerous']
})

player.collides('dangerous', () => {
  destroy(player)
})