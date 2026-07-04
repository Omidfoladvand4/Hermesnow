import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LabelFelid = styled.label`
  color: var(--color-primary);
  font-size: var(--font-size-xl);
  font-weight: 900;
`;

const InputFeild = styled.input`
  width: 90%;
  padding: 10px 12px;

  color: white;
  background: var(--color-info);

  border: 2px solid
    ${({ $error }) =>
      $error ? "var(--color-primary)" : "transparent"};

  border-radius: 8px;

  transition: .25s;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`;

const ErrorFelid = styled.span`
  color: var(--color-primary);
  font-size: var(--font-size-base);
`;

function FormField({
  id,
  label,
  type,
  placeholder,
  formik,
}) {
  const hasError =
    formik.touched[id] && formik.errors[id];

  return (
    <FormContainer>
      <LabelFelid htmlFor={id}>
        {label}
      </LabelFelid>

      <InputFeild
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        value={formik.values[id]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        $error={hasError}
      />

      {hasError && (
        <ErrorFelid>
          {formik.errors[id]}
        </ErrorFelid>
      )}
    </FormContainer>
  );
}

export default FormField;