import { useState } from 'react';
import { useInputState } from '@/utils/react/hooks/useInputState';
import {
  validatePasswordInput,
  validateRePasswordInput,
} from '../../services/validatePasswordInput';
import { validateUserIdInput } from '../../services/validateUserIdInput';
import { validateUserNameInput } from '../../services/validateUserNameInput';

export const useRegisterFormState = () => {
  const [userId, handleUserIdChange] = useInputState('');
  const [password, handlePasswordChange] = useInputState('');
  const [confirmPassword, handleConfirmPasswordChange] = useInputState('');
  const [userName, handleUserNameChange] = useInputState('');

  const isUserNameValid = validateUserNameInput(userName);
  const isUserIdValid = validateUserIdInput(userId);
  const isPasswordValid = validatePasswordInput(password);
  const isConfirmPasswordValid = validateRePasswordInput(password, confirmPassword);

  const isFormValid = isUserNameValid && isUserIdValid && isPasswordValid && isConfirmPasswordValid;

  const [isFormDirty, setIsFormDirty] = useState<boolean>(false);

  return {
    userId: {
      value: userId,
      onChange: handleUserIdChange,
      isValid: isUserIdValid,
    },
    userName: {
      value: userName,
      onChange: handleUserNameChange,
      isValid: isUserNameValid,
    },
    password: {
      value: password,
      onChange: handlePasswordChange,
      isValid: isPasswordValid,
    },
    confirmPassword: {
      value: confirmPassword,
      onChange: handleConfirmPasswordChange,
      isValid: isConfirmPasswordValid,
    },
    form: {
      isValid: isFormValid,
      isDirty: isFormDirty,
      setIsDirty: setIsFormDirty,
    },
  } as const;
};
