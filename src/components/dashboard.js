import { CenterBar } from "./centerbar";
import { LeftBar } from "./leftbar";
import { RightBar } from "./rightbar";


export function DashBoardMy(params) {
    return (
      <div className='Dashboard-div'>
        <LeftBar/>
        <CenterBar/>
        <RightBar/>
      </div>
    );
  }
