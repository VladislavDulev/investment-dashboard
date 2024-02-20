import { useEffect, useRef } from "react";
import { ICard } from "../components/interfaces/card";

const useHighestId = (cardsData: ICard[]) => {
  const highestIdRef = useRef<number>(0);

  useEffect(() => {
    if (cardsData.length > 0) {
      const highestId = Math.max(...cardsData.map((item) => item.id));
      highestIdRef.current = highestId;
    }
  }, [cardsData]);

  return highestIdRef.current;
};

export default useHighestId;
