import { COLORS } from 'constants/colors';
import { React, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const FileUploadButton = ({ className, children, imgPreview }) => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const hiddenFileInput = useRef(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);
  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    if (fileUploaded) {
      setImage(fileUploaded);
    } else {
      setImage(null);
    }
  };

  return (
    <>
      {preview ? (
        <ImagePreview className={imgPreview} src={preview} onClick={handleClick} />
      ) : (
        <UploadButtonWrapper type="button" onClick={handleClick} className={className}>
          {children}
        </UploadButtonWrapper>
      )}
      <FileUploadInput type="file" accept="image/*" ref={hiddenFileInput} onChange={handleChange} />
    </>
  );
};

export default FileUploadButton;

export const UploadButtonWrapper = styled.button`
  cursor: pointer;
  width: 12.6rem;
  height: 8.1rem;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS['gray-500']};
  border-radius: 0.5rem;
`;

export const ImagePreview = styled.img`
  cursor: pointer;
  border-radius: 0.5rem;
  object-fit: cover;
`;

export const FileUploadInput = styled.input`
  display: none;
`;
