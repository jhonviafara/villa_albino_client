/* eslint-disable react/prop-types */
// StyledInput.jsx
  // eslint-disable-next-line react/prop-types


const StyledInput = ({ placeholder, type, value, onChange, textColor }) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className={`text-label underline ${textColor}`}></span>
        <span className={`text-label-alt ${textColor}`}></span>
      </div>
      <input
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={onChange}
            className={`input ${textColor}`}
        />
      <div className="label">
        <span className={`text-label-alt ${textColor}`}></span>
        <span className={`text-label-alt ${textColor}`}></span>
      </div>
    </label>
  );
}


export default StyledInput;











