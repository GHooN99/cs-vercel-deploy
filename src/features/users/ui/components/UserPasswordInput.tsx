import { type ChangeEvent } from 'react';
import { EyeFilledIcon } from '@/ui/icons/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/ui/icons/EyeSlashFilledIcon';
import { useBooleanToggle } from '@/utils/react/hooks/useBooleanToggle';
import { Input } from '@nextui-org/react';
import { MIN_USER_PASSWORD_LENGTH } from '../../models/validationPolicy';

interface UserPasswordInputProps {
  password: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  isDirty: boolean;
  isConfirmPassword?: boolean;
}

export const UserPasswordInput = ({
  isDirty,
  isValid: isPasswordValid,
  onChange: handlePasswordChange,
  isConfirmPassword = false,
  password,
}: UserPasswordInputProps) => {
  const [isVisible, toggleVisibility] = useBooleanToggle(false);

  return (
    <Input
      label={isConfirmPassword ? '비밀번호 확인' : '비밀번호'}
      variant='bordered'
      placeholder='비밀번호를 입력해주세요'
      onChange={handlePasswordChange}
      value={password}
      endContent={
        <button className='focus:outline-primary' type='button' onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
          ) : (
            <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
          )}
        </button>
      }
      type={isVisible ? 'text' : 'password'}
      className='w-full'
      isInvalid={!isPasswordValid && isDirty}
      errorMessage={
        isConfirmPassword
          ? `확인 비밀번호를 정확히 입력해주세요`
          : `비밀번호는 ${MIN_USER_PASSWORD_LENGTH}자 이상으로 입력해주세요`
      }
    />
  );
};
