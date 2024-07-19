import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { pageRoutes } from '@/constants/pageRoutes';
import { sendRegisterRequest } from '../../services/sendRegisterRequest';

export const useRegisterMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: sendRegisterRequest,
    onSuccess: () => {
      router.replace(pageRoutes.login);
    },
  });
};
