import Link from 'next/link';
import { pageRoutes } from '@/constants/pageRoutes';
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { CardLayout } from '../ui/components/CardLayout';
import { UserIdInput } from '../ui/components/UserIdInput';
import { UserNameInput } from '../ui/components/UserNameInput';
import { UserPasswordInput } from '../ui/components/UserPasswordInput';
import { useRegisterFormAction } from '../ui/hooks/useRegisterFormAction';
import { useRegisterFormState } from '../ui/hooks/useRegisterFormState';

export const RegisterScreen = () => {
  const { form, userId, password, confirmPassword, userName } = useRegisterFormState();

  const { onSubmitLoginForm, isSubmitting } = useRegisterFormAction({
    form,
    userId: userId.value,
    password: password.value,
    userName: userId.value,
  });

  const isButtonDisabled = !form.isValid && form.isDirty;

  return (
    <CardLayout>
      <Card className='p-8 w-[450px] shadow-none sm:shadow-medium'>
        <CardHeader>
          <h1 className='text-2xl font-bold text-center w-full'>회원가입</h1>
        </CardHeader>
        <CardBody className='flex flex-col overflow-hidden'>
          <form onSubmit={onSubmitLoginForm}>
            <div className='flex flex-col gap-5 mb-5'>
              <UserIdInput
                userId={userId.value}
                onChange={userId.onChange}
                isValid={userId.isValid}
                isDirty={form.isDirty}
              />

              <UserNameInput
                userName={userName.value}
                onChange={userName.onChange}
                isValid={userName.isValid}
                isDirty={form.isDirty}
              />

              <UserPasswordInput
                password={password.value}
                onChange={password.onChange}
                isValid={password.isValid}
                isDirty={form.isDirty}
              />

              {/* password confirm  */}
              <UserPasswordInput
                isConfirmPassword
                password={confirmPassword.value}
                onChange={confirmPassword.onChange}
                isValid={confirmPassword.isValid}
                isDirty={form.isDirty}
              />
            </div>

            <Button
              size='lg'
              className='w-full'
              type='submit'
              color='primary'
              isLoading={isSubmitting}
              isDisabled={isButtonDisabled}
              disabled={isButtonDisabled}>
              회원가입
            </Button>
          </form>
        </CardBody>

        <CardFooter className='mb-5'>
          <div className='text-center w-full'>
            <span className='mr-2'>계정이 이미 있으신가요?</span>
            <Link className='text-primary hover:underline' href={pageRoutes.login}>
              로그인
            </Link>
          </div>
        </CardFooter>
      </Card>
    </CardLayout>
  );
};
