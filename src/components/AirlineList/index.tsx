import React, { useState, useEffect } from "react";
import "./index.less";

const AirlineList: React.FC<{
  filePath: string;
}> = ({ filePath }) => {
  const [airlineData, setAirlineData] = useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(filePath);
      const json = await result.json();
      setAirlineData(json);
    };
    fetchData();
  }, [filePath]);

  const { data } = airlineData;
  if (!data) {
    return <div>Loading airline list...</div>;
  }

  const airlineList = data.map((item: any) => item.id);
  airlineList.sort();
  airlineList.unshift("Show All");

  return (
    <div>
      <ul className="airline-list">
        {airlineList.map((item: any) => (
          <li key={item} id={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AirlineList;
