"use client";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import { v4 as uuidv4 } from "uuid"; // import the uuid function
import app from "../../../../src/lib/firebase/firebaseConfig";
type Props = {};
const db = getFirestore(app);
const fields = [
  { name: "name", type: "text" },
  { name: "price", type: "number" },
  { name: "info", type: "text" },
  { name: "releaseDate", type: "text" },
  { name: "size", type: "number" },
  { name: "supportContact", type: "text" },
  { name: "trailer", type: "text" },
  { name: "updateDate", type: "text" },
  { name: "email", type: "text" },
  { name: "inAppPurchases", type: "text" },
  { name: "description", type: "text" },
  { name: "cover", type: "text" },
  { name: "downloads", type: "text" },
];

function Add({}: Props) {
  return (
    <Formik
      initialValues={{
        name: "",
        price: 0,
        info: "",
        releaseDate: "",
        size: 0,
        supportContact: "",
        trailer: "",
        updateDate: "",
        email: "",
        inAppPurchases: "",
        description: "",
        cover: "",
        downloads: "",
        screenshots: [""],
        category: [""],
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          console.log(values);
          const uuid = uuidv4();
          await setDoc(doc(db, "apps", uuid), {
            name: values.name,
            price: values.price,
            info: values.info,
            releaseDate: values.releaseDate,
            size: values.size,
            supportContact: values.supportContact,
            trailer: values.trailer,
            updateDate: values.updateDate,
            email: values.email,
            inAppPurchases: values.inAppPurchases,
            description: values.description,
            cover: values.cover,
            downloads: values.downloads,
            screenshots: values.screenshots,
            category: values.category,
          });
          setSubmitting(false);
          console.log("posted");
        }, 400);
      }}
    >
      {({ values }) => (
        <Form className="flex flex-col">
          {fields.map((field) => (
            <div className="my-1" key={field.name}>
              <label htmlFor={field.name} className="mr-1">
                {field.name}
              </label>
              <Field name={field.name} type={field.type} className="border-2" />
              <ErrorMessage name={field.name} component="div" />
            </div>
          ))}
          <label htmlFor="screenshots" className="mr-1">
            screenshots
          </label>
          <FieldArray
            name="screenshots"
            render={(arrayHelpers) => (
              <div>
                {values.screenshots && values.screenshots.length > 0 ? (
                  values.screenshots.map((screenshot, index) => (
                    <div key={index}>
                      <Field
                        name={`screenshots.${index}`}
                        className="border-2 mb-1"
                      />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")}
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    Add a screenshot
                  </button>
                )}
              </div>
            )}
          />
          <label htmlFor="category" className="mr-1">
            category
          </label>
          <FieldArray
            name="category"
            render={(arrayHelpers) => (
              <div>
                {values.category && values.category.length > 0 ? (
                  values.category.map((cat, index) => (
                    <div key={index}>
                      <Field
                        name={`category.${index}`}
                        className="border-2 mb-1"
                      />
                      <button
                        type="button"
                        onClick={() => arrayHelpers.remove(index)}
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => arrayHelpers.insert(index, "")}
                      >
                        +
                      </button>
                    </div>
                  ))
                ) : (
                  <button type="button" onClick={() => arrayHelpers.push("")}>
                    Add a category
                  </button>
                )}
              </div>
            )}
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Add;
