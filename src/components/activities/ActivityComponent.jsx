import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { convertToMonthDayTime } from "../../utility/date";

function ActivityComponent({ activity }) {
  const type = { add: " added ", delete: " deleted ", update: " updated " };
  const { user } = useAuth();

  return (
    <NavLink to={`../expense/${activity.expense}`}>
      <div className="activity">
        <h3>
          {activity.who === user.userName ? "You" : activity.who}
          <span className="regular-font"> {type[activity.type]}</span>
          {activity.title}
        </h3>
        <h3 className="date">
          {convertToMonthDayTime(activity.date.toDate())}
        </h3>
      </div>
    </NavLink>
  );
}

export default ActivityComponent;