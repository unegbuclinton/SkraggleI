import { React } from "react";

import { DPIconUploadFile } from "icons";

import styled from "styled-components";
import { COLORS } from "constants/colors";
import { FONTSIZES } from "constants/font-spec";

const FileUploadButton = (props) => {
  //     const hiddenFileInput = React.useState(null);

  //   const handleClick = event => {
  //     hiddenFileInput.current.click();
  //   };

  //   const handleChange = event => {
  //     const fileUploaded = event.target.files[0];
  //     props.handleFile(fileUploaded);
  //   };

//   const [selectedFile, setSelectedFile] = useState();
//   const [isFilePicked, setIsFilePicked] = useState(false);

//   const changeHandler = (event) => {
//     setSelectedFile(event.target.files[0]);
//     // setIsFilePicked(true);
//   };
//   const handleSubmission = () => {};
let inputRef;
  return (
    <>
      <UploadButtonWrapper onClick={() => inputRef.click()}>
        <DPIconUploadFile />
      </UploadButtonWrapper>
      <FileUploadInput
        type="file"
        // ref={hiddenFileInput}
        // onChange={handleChange}
        ref={refParam => inputRef = refParam}
        // onChange={changeHandler}
      />
    </>
  );
};

export default FileUploadButton;

export const UploadButtonWrapper = styled.button`
  width: 12.6rem;
  height: 8.1rem;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS["gray-500"]};
  border-radius: 0.5rem;
`;

export const FileUploadInput = styled.input`
  display: none;
`;
