import { headerTopNavTree } from "../../../config/headerMenuConfig";
import { BottomMenu } from "./bottomMenu/BottomMenu";
import { TopMenu } from "./topMenu/TopMenu";

export const Header = () => {
  return (
    <header>
      <TopMenu props={headerTopNavTree} />
      <BottomMenu />
    </header>
  );
};
