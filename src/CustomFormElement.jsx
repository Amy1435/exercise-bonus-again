const handleChange = (e, formData, parentIndex, setFormData) => {
    // console.log("e " + e);
    // console.log("e.target.value " + e.target.value);
    // console.log("formData " + formData);
    // console.log("parentIndex " + parentIndex);

    setFormData((previuData) => {
        const newFormData = JSON.parse(JSON.stringify(previuData));

        // console.log(newFormData[parentIndex]);
        let elementToModify = newFormData[parentIndex].value;
        // console.log("elementToModify " + elementToModify);
        elementToModify = e.target.value;

        newFormData[parentIndex].value = elementToModify;

        return newFormData;
    });
};

const CustomFormElement = ({
    id,
    label,
    value,
    mode,
    options,
    formData,
    parentIndex,
    setFormData,
}) => {
    // console.log("formData ");
    // console.log(JSON.parse(JSON.stringify(formData)));
    switch (mode) {
        case "checkbox":
            return (
                <div>
                    {options.map((option, i) => (
                        <label key={`option-check-${i}`}>
                            <input
                                type="checkbox"
                                id={id}
                                name={id}
                                value={option}
                                onChange={(e) =>
                                    handleChange(
                                        e,
                                        formData,
                                        parentIndex,
                                        setFormData
                                    )
                                }
                            />
                            {option}
                        </label>
                    ))}
                </div>
            );

        case "select":
            return (
                <select
                    value={value}
                    onChange={(e) =>
                        handleChange(e, formData, parentIndex, setFormData)
                    }
                >
                    {label}
                    {options.map((option, i) => (
                        <option key={`option-sel${i}`} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            );

        case "radio":
            return (
                <div>
                    {options.map((option, i) => (
                        <label key={`radio-${i}`}>
                            <input
                                type="radio"
                                id={id}
                                name={id}
                                value={option}
                                onChange={(e) =>
                                    handleChange(
                                        e,
                                        formData,
                                        parentIndex,
                                        setFormData
                                    )
                                }
                            />
                            {option}
                        </label>
                    ))}
                </div>
            );

        case "input":
            return (
                <input
                    type="text"
                    value={value}
                    onChange={(e) =>
                        handleChange(e, formData, parentIndex, setFormData)
                    }
                />
            );
    }
};

export default CustomFormElement;
