import { Icon } from '@iconify/react';
import React from 'react';
import { GameEngine } from './';

export class InfoBox {
  constructor(
    protected gameEngine: GameEngine,
    public x: number,
    public y: number,
    public label: string,
    public color: string,
    public title: React.ReactNode,
    public content: React.ReactNode
  ) {}

  static getInfoBoxes(gameEngine: GameEngine) {
    const { groundY } = gameEngine;
    const configList = [
      {
        x: 340,
        y: groundY - 200,
        color: '#4CAF50',
        label: '🙋🏻‍♂️',
        title: "🙋🏻‍♂️ I'm Kendrick!",
        content: (
          <ul>
            <li>✨ Full Stack Developer by day.</li>
            <li>🧙‍♂️ Stack Whisperer by night.</li>
          </ul>
        ),
      },
      {
        x: 900,
        y: groundY - 180,
        color: '#2156A3',
        label: '🧰',
        title: '🧰 My Dev Toolbox',
        content: (
          <ul>
            <li className="flex items-center gap-2">
              <Icon icon="devicon:react" />
              React & Next.js
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="devicon:tailwindcss" />
              TailwindCSS
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="devicon:nodejs" />
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="material-icon-theme:prisma" />
              Prisma
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="devicon:azure" />
              Azure
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="fa6-brands:aws" />
              AWS
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="devicon:googlecloud" />
              Google
            </li>
          </ul>
        ),
      },
      {
        x: 1400,
        y: groundY - 200,
        color: '#FF9800',
        label: '📫',
        title: '📫 Contact',
        content: (
          <ul>
            <li className="flex items-center gap-2">
              <Icon color="white" icon="mdi:github" />
              <a href="https://github.com/kendrickw">kendrickw</a>
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="devicon:linkedin" />
              <a href="https://www.linkedin.com/in/kendrickwong0">
                kendrickwong0
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Icon color="orange" icon="memory:email" />
              <a href="mailto:kendrickw@luumitech.com">
                kendrickw@luumitech.com
              </a>
            </li>
          </ul>
        ),
      },
    ];

    return configList.map((config) => {
      const { x, y, label, color, title, content } = config;
      return new InfoBox(gameEngine, x, y, label, color, title, content);
    });
  }

  /**
   * Draw InfoBox
   *
   * - Optionally provide an x-offset
   * - Glows when `isNear` flag is true
   */
  draw(offsetX: number = 0, isNear: boolean) {
    const { ctx, fontFamily } = this.gameEngine;

    const boxWidth = 80;
    const boxHeight = 80;
    const x = this.x + offsetX;

    ctx.save();
    // Add Glow effect
    ctx.shadowBlur = isNear ? 30 : 10;
    ctx.shadowColor = this.color;
    ctx.fillStyle = this.color;
    ctx.fillRect(x, this.y, boxWidth, boxHeight);
    ctx.restore();

    // Label on Info box
    ctx.fillStyle = '#fff';
    ctx.font = `24px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.fillText(this.label, x + boxWidth / 2, this.y + boxHeight / 2 + 8);
  }
}
