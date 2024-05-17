import React, { useEffect, useState } from "react";
import { getAllCalls } from "../../services/axios";
import "./ActivityFeed.css";
const ActivityFeed = () => {
  const [allCalls, setAllCalls] = useState([]);
  const setCalls = async () => {
    const res = await getAllCalls();
    setAllCalls(res.data);
  };

  useEffect(() => {
    setCalls();
  }, []);
  return (
    <div className="activity-container">
      <p>ActivityFeed</p>
      <ul>
        {allCalls.length > 0 &&
          allCalls.map((call) => (
            <li key={call.id}>
              <div>
                <strong>Call Type:</strong> {call.call_type}
              </div>
              <div>
                <strong>Direction:</strong> {call.direction}
              </div>
              <div>
                <strong>From:</strong> {call.from}
              </div>
              <div>
                <strong>To:</strong> {call.to}
              </div>
              <div>
                <strong>Duration:</strong> {call.duration} seconds
              </div>
              <div>
                <strong>Archived:</strong> {call.is_archived ? "Yes" : "No"}
              </div>
              <div>
                <strong>Created At:</strong> {call.created_at}
              </div>
              {/* Add more details if needed */}
              <br />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
