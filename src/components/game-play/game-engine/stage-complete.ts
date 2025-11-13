import { GameEngine } from './';

export class StageComplete {
  constructor(protected gameEngine: GameEngine) {}

  /**
   * Draw stage complete notice board
   *
   * - Appears in middle of screen when player reaches flag pole
   */
  draw(stageNumber: number) {
    const { ctx, canvas, fontFamily } = this.gameEngine;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2 - 50, 300, 100);
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.strokeRect(canvas.width / 2 - 150, canvas.height / 2 - 50, 300, 100);
    ctx.fillStyle = '#FFD700';
    ctx.font = `bold 24px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.fillText('Stage Complete!', canvas.width / 2, canvas.height / 2 - 10);
    ctx.font = `18px ${fontFamily}`;

    ctx.fillStyle = '#fff';
    ctx.fillText(
      `Proceed to stage ${stageNumber}...`,
      canvas.width / 2,
      canvas.height / 2 + 20
    );
  }
}
