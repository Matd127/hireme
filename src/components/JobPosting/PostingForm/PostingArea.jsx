import {
  PostingFormDescription,
  PostingFormGroup,
  PostingFormLabel,
  DescriptionArea,
  FormError,
  RequiredField,
} from "./PostingFormStyle";
import React from "react";

const PostingArea = React.forwardRef((props, ref) => {
  return (
    <PostingFormDescription>
      <PostingFormGroup>
        <PostingFormLabel htmlFor={props.id}>
          {props.placeholder}
          {props.isRequired && <RequiredField>*</RequiredField>}
        </PostingFormLabel>
        <DescriptionArea
          id={props.id}
          rows={props.rows}
          aria-invalid={props.errors ? "true" : "false"}
          placeholder="Description"
          {...props}
          ref={ref}
        />
        {props.errors && (
          <FormError role="alert">{props.errors.message}</FormError>
        )}
      </PostingFormGroup>
    </PostingFormDescription>
  );
});

export default PostingArea;
