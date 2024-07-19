import { delay } from '@/utils/functions/delay';
import { UserRegisterDto } from '../models/userRegisterDto';

export const sendRegisterRequest = async (userRegisterDto: UserRegisterDto) => {
  await delay(2000);
};

// async (userLoginDto: UserLoginDto) => httpClient.post<User>('/login', userLoginDto);
