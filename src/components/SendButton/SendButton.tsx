import React from "react";
import * as S from "./SendButton.styles";

interface SendButtonProps {
  onSend: () => void; // Callback function when the button is clicked
  disabled?: boolean; // Optional prop to disable the button
}

const SendButton: React.FC<SendButtonProps> = ({ onSend, disabled }) => {
  return (
    <S.Button onClick={onSend} disabled={disabled}>
      ⬆
    </S.Button>
  );
};

export default SendButton;
