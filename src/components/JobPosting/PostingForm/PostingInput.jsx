import React from "react";
import {
  PostingFormGroup,
  PostingFormLabel,
  FormInput,
  FormError,
  RequiredField,
} from "./PostingFormStyle";

const PostingInput = React.forwardRef((props, ref) => {
  return (
    <PostingFormGroup>


      <PostingFormLabel htmlFor={props.id}>
        {props.labelTitle}
        {props.isRequired && <RequiredField>*</RequiredField>}
      </PostingFormLabel>
      <FormInput
        id={props.id}
        type={props.type}
        aria-invalid={props.errors ? "true" : "false"}
        placeholder={props.placeholder}
        {...props}
        ref={ref}
      />
      {props.errors && (
        <FormError role="alert">{props.errors.message}</FormError>
      )}

      
    </PostingFormGroup>
  );
});

export default PostingInput;
