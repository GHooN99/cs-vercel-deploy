import { httpClient } from '@/configs/http-client';
import { delay } from '@/utils/functions/delay';
import { User } from '../models/user';
import { UserLoginDto } from '../models/userLoginDto';

export const sendLoginRequest = async (userLoginDto: UserLoginDto) => {
  await delay(2000);
};

// async (userLoginDto: UserLoginDto) => httpClient.post<User>('/login', userLoginDto);
