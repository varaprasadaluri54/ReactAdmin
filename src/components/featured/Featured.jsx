import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./featured.scss";

export default function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontsize="small" />
      </div>
      <div className="bottom"></div>
    </div>
  );
}
