import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { pageRoutes } from '@/constants/pageRoutes';
import { sendLoginRequest } from '../../services/sendLoginRequest';

export const useLoginMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: sendLoginRequest,
    onSuccess: () => {
      router.replace(pageRoutes.home);
    },
  });
};
