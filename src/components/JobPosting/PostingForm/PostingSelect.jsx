import React from "react";
import {
  FormSelect,
  PostingFormGroup,
  PostingFormLabel,
  FormError,
  RequiredField
} from "./PostingFormStyle";

const PostingSelect = React.forwardRef((props, ref) => {
  return (
    <PostingFormGroup>
      <PostingFormLabel htmlFor={props.id}>
        {props.labelTitle}
        {props.isRequired && <RequiredField>*</RequiredField>}
      </PostingFormLabel>
      <FormSelect
        id={props.id}
        defaultValue={props.defaultValue}
        aria-invalid={props.errors ? "true" : "false"}
        {...props}
        ref={ref}
      >
        <option value="" disabled>
          Select a type
        </option>
        {typeof props.data[0] !== "object"
          ? props.data.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : props.data.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
      </FormSelect>
      {props.errors && (
        <FormError role="alert">{props.errors.message}</FormError>
      )}
    </PostingFormGroup>
  );
});

export default PostingSelect;
