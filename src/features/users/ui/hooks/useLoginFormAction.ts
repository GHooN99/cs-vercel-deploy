import { FormEvent } from 'react';
import { useLoginMutation } from './useLoginMutation';

interface LoginFormActionHookParams {
  form: {
    isValid: boolean;
    isDirty: boolean;
    setIsDirty: (value: boolean) => void;
  };
  userId: string;
  password: string;
}

export const useLoginFormAction = ({
  form,
  userId,
  password,
}: Readonly<LoginFormActionHookParams>) => {
  const { mutate, isPending } = useLoginMutation();

  const handleLoginFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.isValid) {
      !form.isDirty && form.setIsDirty(true);
      return;
    }

    console.log('debug:', userId, password);
    mutate({ userId, password });
  };

  return {
    onSubmitLoginForm: handleLoginFormSubmit,
    isSubmitting: isPending,
  };
};
