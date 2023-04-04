import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

//This is the same as spreading the props above:
// const formInput = ({ label, changeHandler, value }) => {
// return (
//     <div>
//       <label>{label}</label>
//       <input
//         type='text'
//         required
//         onChange={changeHandler}
//         name={label}
//         value={value}
//       />
//     </div>
//   );
// };
