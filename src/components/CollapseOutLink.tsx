import Collapse from "./Collapse";
import OutLink from "./OutLink";
import {FC, ReactElement} from "react";

interface CollapseOutLinkProps {
  OutLinkLink?: string;
  OutLinkText?: string;
  detail?: string;
  text?: string;
  isOk: boolean;
}

const CollapseOutLink: FC<CollapseOutLinkProps> = (props) => {
  const {OutLinkLink, OutLinkText, text, detail, isOk = false} = props;

  return (
    <Collapse
      detail={detail}
      text={
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}>
          <input type="checkbox" disabled={true} checked={isOk} />
          <span>{text} - </span>
          <OutLink link={OutLinkLink} text={OutLinkText}/>
        </div>
      }
    />
  )
};

/*
<CollapseOutLink
  OutLinkLink={""}
  text={""}
  detail={""}
  isOk={false}
/>
 */

export default CollapseOutLink;