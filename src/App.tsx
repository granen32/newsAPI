import React, { useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState(null);
  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&apiKey=8ecfcbbb387c4e7bae8ffb59f5282383"
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div>
        <div>
          <button type="button" onClick={onClick}>
            불러오기
          </button>
        </div>
        {data && (
          <textarea
            rows={7}
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          ></textarea>
        )}
      </div>
    </>
  );
}

export default App;
