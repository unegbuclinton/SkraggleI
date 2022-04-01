import React from "react";

import styled from "styled-components";
import { COLORS } from "constants/colors";

const FileUploadButton = ({ className, children }) => {
  const hiddenFileInput = React.useState(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
    console.log(event);
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log("file uploaded", fileUploaded);
  };

  // const [selectedFile, setSelectedFile] = useState()
  //   const [preview, setPreview] = useState()

  //   // create a preview as a side effect, whenever selected file is changed
  //   useEffect(() => {
  //       if (!selectedFile) {
  //           setPreview(undefined)
  //           return
  //       }

  //       const objectUrl = URL.createObjectURL(selectedFile)
  //       setPreview(objectUrl)

  //       // free memory when ever this component is unmounted
  //       return () => URL.revokeObjectURL(objectUrl)
  //   }, [selectedFile])

  //   const onSelectFile = e => {
  //       if (!e.target.files || e.target.files.length === 0) {
  //           setSelectedFile(undefined)
  //           return
  //       }

  //       // I've kept this example simple by using the first image instead of multiple
  //       setSelectedFile(e.target.files[0])
  //   }
  


  return (
    <>
      <UploadButtonWrapper
        type="button"
        className={className}
        onClick={handleClick}
      >
        {children}
      </UploadButtonWrapper>
      <FileUploadInput
        type="file"
        accept="image/png"
        ref={hiddenFileInput}
        onChange={handleChange}
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
