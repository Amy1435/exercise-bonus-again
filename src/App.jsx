import { useState } from "react";
import "./App.css";
import CustomFormElement from "./CustomFormElement";

function App() {
    const [formData, setFormData] = useState([
        {
            id: "user-name",
            label: "User Name",
            value: "",
            mode: "input",
        },
        {
            id: "user-surname",
            label: "User surname",
            value: "",
            mode: "input",
        },
        {
            id: "sex",
            label: "Sex",
            value: "",
            mode: "radio",
            options: ["m", "f"],
        },
        {
            id: "color",
            label: "Favorite color",
            value: "",
            mode: "select",
            options: ["blue", "red", "purple"],
        },
        {
            id: "privacy-policy",
            label: "Privacy Policy",
            value: "",
            mode: "checkbox",
            options: ["yes", "no"],
        },
    ]);

    const [btnClicked, setBtnClicked] = useState(false);

    return (
        <>
            <div className="main-container">
                <h1>Form</h1>
                <div className="data-container">
                    {formData.map((data, i) => (
                        <div key={i} className="data">
                            <p>{data.id}</p>
                            <CustomFormElement
                                label={data.label}
                                id={data.id}
                                value={data.value}
                                mode={data.mode}
                                options={data.options}
                                parentIndex={i}
                                setFormData={setFormData}
                            />
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={() => setBtnClicked(true)}>Send</button>
                </div>
                {btnClicked && (
                    <div>
                        <p>Thanks for filling up the form.</p>
                        {formData.map((data) => console.log(data.value))}
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
