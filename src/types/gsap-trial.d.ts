declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: Element[];
    words: Element[];
    lines: Element[];

    constructor(
      target: string | Element | NodeListOf<Element> | Array<string | Element>,
      vars?: {
        type?: string;
        linesClass?: string;
        [key: string]: unknown;
      }
    );

    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: Record<string, unknown>): ScrollSmoother;
    static refresh(force?: boolean): void;

    paused(value?: boolean): boolean | void;

    scrollTop(value?: number): number | void;

    scrollTo(
      target: string | Element | number,
      smooth?: boolean | number,
      position?: string
    ): void;

    refresh(): void;
    kill(): void;
  }
}
