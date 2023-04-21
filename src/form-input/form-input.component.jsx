import './form-input.styles.jsx';

import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
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
