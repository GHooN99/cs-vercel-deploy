import { type ChangeEvent } from 'react';
import { Input } from '@nextui-org/react';
import { MAX_USER_NAME_LENGTH } from '../../models/validationPolicy';

interface UserNameInputProps {
  userName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  isDirty: boolean;
}

export const UserNameInput = ({
  isDirty,
  isValid: isUserNameValid,
  onChange: handleUserNameChange,
  userName: userName,
}: UserNameInputProps) => {
  return (
    <Input
      label='유저 이름'
      variant='bordered'
      placeholder='유저 이름을 입력해주세요'
      className='w-full'
      onChange={handleUserNameChange}
      value={userName}
      isInvalid={!isUserNameValid && isDirty}
      errorMessage={`유저 이름은 ${MAX_USER_NAME_LENGTH}자 이하로 입력해주세요`}
    />
  );
};
