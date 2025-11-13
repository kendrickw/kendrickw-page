export * from './cloud';
export * from './control-hint';
export * from './flag-pole';
export * from './info-box';
export * from './intro-screen';
export * from './platform';
export * from './player';
export * from './stage-complete';

interface CameraState {
  x: number;
  y: number;
}

/**
 * Control everything within the canvas
 *
 * - Render all graphics in canvas
 * - Physics parameters, etc..
 */
export class GameEngine {
  ctx: CanvasRenderingContext2D;
  camera: CameraState;

  // Font used within canvas
  fontFamily: string;

  /** Physics parameters within the game */
  // gravity: 0-1 (how fast player falls to ground)
  gravity: number;
  // width of a single stage
  loopWidth: number;
  // height from bottom edge where the physical ground is
  groundY: number;

  constructor(public canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      throw new Error('Canvas context cannot be null');
    }
    this.ctx = ctx;

    this.groundY = canvas.height - 100;
    this.camera = { x: 0, y: 0 };
    this.gravity = 0.8;
    this.loopWidth = 2000;

    /** Grab font family defined in `layout.tsx` */
    const style = getComputedStyle(document.documentElement);
    this.fontFamily = style.getPropertyValue('--default-font-family');
  }

  /**
   * Clear canvas
   *
   * - Render the canvas blank and fill wil background
   */
  clearCanvas() {
    this.ctx.fillStyle = '#87CEEB';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
