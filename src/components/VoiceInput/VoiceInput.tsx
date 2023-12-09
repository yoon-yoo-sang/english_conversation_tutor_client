import React from "react";
import * as S from "./VoiceInput.styles";

interface VoiceInputProps {
  onVoiceRecordStart: () => void; // Function to call when voice recording starts
  onVoiceRecordEnd: () => void; // Function to call when voice recording ends
  disabled?: boolean; // Optional prop to disable the voice input
}

const VoiceInput: React.FC<VoiceInputProps> = ({
  onVoiceRecordStart,
  onVoiceRecordEnd,
  disabled,
}) => {
  const handleMouseDown = () => {
    // Start recording
    onVoiceRecordStart();
  };

  const handleMouseUp = () => {
    // Stop recording
    onVoiceRecordEnd();
  };

  return (
    <S.Button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown} // for touch devices
      onTouchEnd={handleMouseUp}
      disabled={disabled}
    >
      <S.Icon /> {/* Replace with an actual icon component or element */}
    </S.Button>
  );
};

export default VoiceInput;
