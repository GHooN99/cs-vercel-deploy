import { FormEvent } from 'react';
import { useRegisterMutation } from './useRegisterMutation';

interface RegisterFormActionHookParams {
  form: {
    isValid: boolean;
    isDirty: boolean;
    setIsDirty: (value: boolean) => void;
  };
  userId: string;
  userName: string;
  password: string;
}

export const useRegisterFormAction = ({
  form,
  userId,
  userName,
  password,
}: Readonly<RegisterFormActionHookParams>) => {
  const { mutate, isPending } = useRegisterMutation();

  const handleRegisterFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.isValid) {
      !form.isDirty && form.setIsDirty(true);
      return;
    }

    console.log('debug:', userId, password, userName);
    mutate({ userId, userName, password });
  };

  return {
    onSubmitLoginForm: handleRegisterFormSubmit,
    isSubmitting: isPending,
  };
};
