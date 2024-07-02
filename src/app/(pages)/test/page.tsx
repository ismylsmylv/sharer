"use client";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import app from "../../../../src/lib/firebase/firebaseConfig";
type Props = {};
function Test({}: Props) {
  const [datas, setdatas] = useState([]);
  const getFirestoreFunc = async () => {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "apps"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.data());
      setdatas([...datas, doc.data()]);
      console.log(doc.id, " => ", doc.data());
    });
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
              <img src={elem.icon} alt="" />
            </div>
          );
        })}
    </div>
  );
}

export default Test;
