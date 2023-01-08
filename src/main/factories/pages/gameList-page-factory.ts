import { Title } from "../../../presentation/components/title";
import { GameListPage } from "../../../presentation/pages/gameList-page";
import { makeGameListFactory } from "../components/gameList-component-factory";
import { makeHeaderFactory } from "../components/header-component-factory";
import { makeMenuFactory } from "../components/menu-component-factory";

export function makeGameListPageFactory(): GameListPage {
  const header = makeHeaderFactory();
  const pageTitle = new Title("Game List", "gameList-titleDiv-title");
  const menuDiv = makeMenuFactory();
  const gamesDiv = makeGameListFactory();

  return new GameListPage(header, menuDiv, pageTitle, gamesDiv);
}
