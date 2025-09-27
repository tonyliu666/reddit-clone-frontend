import { useEffect, useState } from "react";
import SpringAPI from "../api/api";

export default function CommunityList() {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    SpringAPI.get("/communities").then((res) => setCommunities(res.data));
  }, []);

  return (
    <div>
      <h2>Communities</h2>
      <ul>
        {communities.map(c => (
          <li key={c.id}>r/{c.name} - {c.description}</li>
        ))}
      </ul>
    </div>
  );
}
