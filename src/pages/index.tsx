import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { pageRoutes } from '@/constants/pageRoutes';

const MainPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(pageRoutes.login);
  }, [router]);

  return (
    <div className='flex h-screen'>
      {/* 이전 채팅기록 영역 */}
      <div className='flex-none w-72 bg-gray-300 hidden lg:flex'>이전 채팅기록 영역</div>
      {/* 대화창 영역 */}
      <div className='flex-grow bg-gray-400'>대화창 영역</div>
      {/* 검색된 공고 리스트 영역 */}
      <div className='flex-none w-72 bg-gray-300'>검색된 공고 리스트 영역</div>
    </div>
  );
};

export default MainPage;
