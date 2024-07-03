"use client";
import { getFirestore } from "@firebase/firestore";
import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import app from "../../../../src/lib/firebase/firebaseConfig";
import { Formik, Form, Field, FieldArray } from "formik";
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
      <Formik
        initialValues={{ friends: ["jared", "ian", "brent"] }}
        onSubmit={(values) =>
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500)
        }
        render={({ values }) => (
          <Form>
            <FieldArray
              name="friends"
              render={(arrayHelpers) => (
                <div>
                  {values.friends && values.friends.length > 0 ? (
                    values.friends.map((friend, index) => (
                      <div key={index}>
                        <Field name={`friends.${index}`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      {/* show this when user has removed all friends from the list */}
                      Add a friend
                    </button>
                  )}
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  );
}

export default Test;
