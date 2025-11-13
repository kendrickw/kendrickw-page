import { GameEngine } from './';

export class Player {
  // Current position of player
  x: number;
  y: number;
  // Dimension of player
  width: number;
  height: number;
  // Animation states
  velocityY: number;
  velocityX: number;
  speed: number;
  jumpPower: number;
  isJumping: boolean;
  //  1 for right, -1 for left
  direction: 1 | -1;
  frame: number;
  frameTimer: number;

  constructor(protected gameEngine: GameEngine) {
    const { groundY } = gameEngine;

    this.x = 100;
    this.y = groundY - 72;
    this.width = 48;
    this.height = 72;
    this.velocityY = 0;
    this.velocityX = 0;
    this.speed = 5;
    this.jumpPower = 15;
    this.isJumping = false;
    this.direction = 1;
    this.frame = 0;
    this.frameTimer = 0;
  }

  /** Draw player */
  draw() {
    const { ctx, camera } = this.gameEngine;
    const { direction, frame } = this;
    const x = this.x - camera.x;
    const y = this.y;

    ctx.save();
    ctx.translate(x + this.width / 2, y);
    if (direction === -1) {
      ctx.scale(-1, 1);
    }
    ctx.translate(-this.width / 2, 0);

    // Currently the paint logic assume player is 48x72

    // Skin tone
    ctx.fillStyle = '#D4A574';

    // Head
    ctx.fillRect(9, 0, 30, 30);

    // Hair
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(8, 0, 32, 14); // Top
    ctx.fillRect(6, 6, 6, 10); // Left side
    ctx.fillRect(36, 6, 6, 10); // Right side
    // Hair spikes
    ctx.fillRect(12, -4, 5, 5);
    ctx.fillRect(21, -5, 6, 6);
    ctx.fillRect(31, -4, 5, 5);

    // Face outline
    ctx.fillStyle = '#D4A574';
    ctx.fillRect(12, 10, 24, 18);

    // Glasses frame
    ctx.fillStyle = '#333';
    ctx.fillRect(14, 14, 8, 8); // Left lens
    ctx.fillRect(26, 14, 8, 8); // Right lens
    ctx.fillRect(22, 16, 4, 3); // Bridge

    // Glasses lenses
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(15, 15, 6, 6);
    ctx.fillRect(27, 15, 6, 6);

    // Eyes
    ctx.fillStyle = '#000';
    ctx.fillRect(16, 16, 4, 4); // Left eye
    ctx.fillRect(28, 16, 4, 4); // Right eye

    // Eye highlights
    ctx.fillStyle = '#FFF';
    ctx.fillRect(17, 17, 2, 2);
    ctx.fillRect(29, 17, 2, 2);

    // Smile
    ctx.fillStyle = '#000';
    ctx.fillRect(20, 24, 8, 2);
    ctx.fillRect(18, 23, 2, 2);
    ctx.fillRect(28, 23, 2, 2);

    // Body (shirt)
    ctx.fillStyle = '#3498db';
    ctx.fillRect(12, 30, 24, 18);

    // Collar/neck
    ctx.fillStyle = '#2980b9';
    ctx.fillRect(18, 30, 12, 3);

    // Arms
    const armOffset = Math.sin(frame * 0.3) * 3;
    ctx.fillStyle = '#3498db';
    ctx.fillRect(4, 32 + armOffset, 8, 12); // Left arm
    ctx.fillRect(36, 32 - armOffset, 8, 12); // Right arm

    // Hands
    ctx.fillStyle = '#D4A574';
    ctx.fillRect(4, 43 + armOffset, 8, 4);
    ctx.fillRect(36, 43 - armOffset, 8, 4);

    // Legs
    const legOffset = Math.sin(frame * 0.3) * 4;
    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(15, 48, 8, 14); // Left leg
    ctx.fillRect(25, 48, 8, 14); // Right leg

    // Feet
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(13, 61 + legOffset, 11, 6); // Left foot
    ctx.fillRect(24, 61 - legOffset, 11, 6); // Right foot

    ctx.restore();
  }
}
