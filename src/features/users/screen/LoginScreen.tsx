import Link from 'next/link';
import { pageRoutes } from '@/constants/pageRoutes';
import { Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { CardLayout } from '../ui/components/CardLayout';
import { UserIdInput } from '../ui/components/UserIdInput';
import { UserPasswordInput } from '../ui/components/UserPasswordInput';
import { useLoginFormAction } from '../ui/hooks/useLoginFormAction';
import { useLoginFormState } from '../ui/hooks/useLoginFormState';

export const LoginScreen = () => {
  const { form, userId, password } = useLoginFormState();

  const { onSubmitLoginForm, isSubmitting } = useLoginFormAction({
    form,
    userId: userId.value,
    password: password.value,
  });

  const isButtonDisabled = !form.isValid && form.isDirty;

  return (
    <CardLayout>
      <Card className='p-8 w-[450px] shadow-none sm:shadow-medium'>
        <CardHeader>
          <h1 className='text-2xl font-bold text-center w-full'>로그인</h1>
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

              <UserPasswordInput
                password={password.value}
                onChange={password.onChange}
                isValid={password.isValid}
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
              로그인
            </Button>
          </form>
        </CardBody>

        <CardFooter className='mb-5'>
          <div className='text-center w-full'>
            <span className='mr-2'>계정이 없으신가요?</span>
            <Link className='text-primary hover:underline' href={pageRoutes.register}>
              가입하기
            </Link>
          </div>
        </CardFooter>
      </Card>
    </CardLayout>
  );
};
