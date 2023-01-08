import { PageInterface } from "../abstract/page-interface";
import { Div } from "../components/div";
import { Header } from "../components/header";

export class HomePage implements PageInterface {
  private readonly header: Header;
  private readonly gamesDiv: Div;
  private readonly menuDiv: Div;

  constructor(header: Header, gamesDiv: Div, menuDiv: Div) {
    this.header = header;
    this.gamesDiv = gamesDiv;
    this.menuDiv = menuDiv;
  }

  public render(): string {
    return `
        <main>
            ${this.header.render()}
            ${this.gamesDiv.render()}
            ${this.menuDiv.render()}
        </main>
    `;
  }

  // public gameCardClickTest(): void {
  //   this.gamesDiv.addEventListenerToChildren("click", (event: any) => {
  //     event.currentTarget.remove();
  //   });
  // }

  public updateHours(): void {
    const currentHours = `${new Date().toLocaleTimeString()}`;
    const clock = document.getElementById("homepage-header-clockDiv-clock");
    if (clock && clock.innerText) {
      clock.innerText = currentHours;
    }
  }
}
