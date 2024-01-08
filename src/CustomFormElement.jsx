const handleChange = (e, parentIndex, setFormData) => {
    setFormData((previuData) => {
        const newFormData = JSON.parse(JSON.stringify(previuData));

        let elementToModify = newFormData[parentIndex].value;

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
    parentIndex,
    setFormData,
}) => {
    switch (mode) {
        case "checkbox":
            return (
                <div className="option">
                    {options.map((option, i) => (
                        <label key={`option-check-${i}`}>
                            <input
                                type="checkbox"
                                id={id}
                                name={id}
                                value={option}
                                onChange={(e) =>
                                    handleChange(e, parentIndex, setFormData)
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
                    onChange={(e) => handleChange(e, parentIndex, setFormData)}
                >
                    {label}
                    {options.map((option) => (
                        <option key={`${id}${option}`} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            );

        case "radio":
            return (
                <div className="option">
                    {options.map((option, i) => (
                        <label key={`radio-${i}`}>
                            <input
                                type="radio"
                                id={id}
                                name={id}
                                value={option}
                                onChange={(e) =>
                                    handleChange(e, parentIndex, setFormData)
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
                    onChange={(e) => handleChange(e, parentIndex, setFormData)}
                />
            );
    }
};

export default CustomFormElement;
