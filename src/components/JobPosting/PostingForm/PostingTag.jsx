import { BsXLg } from "react-icons/bs";
import {
  PostingFormGroup,
  PostingFormLabel,
  FormInput,
  FormError
} from "./PostingFormStyle";

const PostingTag = (props) => {
  return (
    <PostingFormGroup>
      <PostingFormLabel htmlFor={props.id}>
        {props.placeholder}
      </PostingFormLabel>
      {props.tags.map((tag, index) => (
        <span key={index}>
          {tag}
          <BsXLg size={15} onClick={() => props.onClick(tag)} />
        </span>
      ))}
      <FormInput
        id={props.id}
        type="text"
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onKeyDown={props.onKeyDown}
      />
      {props.errors && <FormError>{props.errors}</FormError>}
      
    </PostingFormGroup>
  );
};

export default PostingTag;
