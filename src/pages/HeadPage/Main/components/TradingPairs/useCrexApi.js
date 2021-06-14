import { useEffect, useState } from "react";

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://wallet.xxp.group'

export const useApiData = () => {
  const [detail, setDetail] = useState();

  useEffect(() => {
    fetch(`${url}/landing/info`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setDetail(json);
      })
  }, []);

  return detail;
}
