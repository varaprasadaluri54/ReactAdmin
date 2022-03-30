import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Widget() {
  return (
    <div className="widget">
      <div className="left">
        <span className="title">USERS</span>
        <span className="counter">21312</span>
        <span className="link ">See all user</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpIcon />
          20%
        </div>
      </div>
    </div>
  );
}
