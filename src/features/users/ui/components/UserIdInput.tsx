import { type ChangeEvent } from 'react';
import { Input } from '@nextui-org/react';
import { MAX_USER_ID_LENGTH } from '../../models/validationPolicy';

interface UserIdInputProps {
  userId: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  isDirty: boolean;
}

export const UserIdInput = ({
  isDirty,
  isValid: isUserIdValid,
  onChange: handleUserIdChange,
  userId,
}: UserIdInputProps) => {
  return (
    <Input
      label='아이디'
      variant='bordered'
      placeholder='아이디를 입력해주세요'
      className='w-full'
      onChange={handleUserIdChange}
      value={userId}
      isInvalid={!isUserIdValid && isDirty}
      errorMessage={`아이디는 1자 이상 ${MAX_USER_ID_LENGTH}자 이하로 입력해주세요`}
    />
  );
};
