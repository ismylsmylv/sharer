"use client";
import { collection, getDocs, getFirestore } from "@firebase/firestore";
import { useEffect, useState } from "react";
import app from "../../../../src/lib/firebase/firebaseConfig";
type Props = {};

function Test({}: Props) {
  const [datas, setDatas] = useState([]);

  const getFirestoreFunc = async () => {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "apps"));
    const newDatas = [];
    querySnapshot.forEach((doc) => {
      newDatas.push(doc.data());
      console.log(doc.id, " => ", doc.data());
    });
    setDatas(newDatas);
  };

  useEffect(() => {
    getFirestoreFunc();
  }, []);

  return (
    <div>
      Test
      {datas.length > 0 &&
        datas.map((elem) => {
          return (
            <div key={elem.name}>
              {elem.name}
              <img src={elem.icon} alt={elem.name} />
            </div>
          );
        })}
    </div>
  );
}

export default Test;
