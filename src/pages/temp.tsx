import { EyeFilledIcon } from '@/ui/icons/EyeFilledIcon';
import { EyeSlashFilledIcon } from '@/ui/icons/EyeSlashFilledIcon';
import { useBooleanToggle } from '@/utils/react/hooks/useBooleanToggle';
import {
  Avatar,
  AvatarIcon,
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Input,
  Listbox,
  ListboxItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
  User,
  useDisclosure,
} from '@nextui-org/react';

const MainPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [isVisible, toggleVisibility] = useBooleanToggle(false);

  return (
    <div className='mx-auto h-full justify-center p-5 w-96 flex flex-col gap-5'>
      <h1 className='font-bold text-2xl mb-10 text-primary-600'> 내가 필요한 컴포넌트들 </h1>

      <Button color='primary'>버튼</Button>
      <Button color='secondary'>버튼</Button>
      <Button color='primary' isLoading>
        버튼
      </Button>
      <Input width={200} className='' placeholder='아이디를 입력해주세요' />
      <div className='flex gap-4 items-center'>
        <Avatar showFallback icon={<AvatarIcon />} />
        <User
          name='김민수'
          avatarProps={{
            showFallback: true,
            fallback: <AvatarIcon />,
          }}
        />
      </div>

      <Card className='py-4'>
        <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
          <p className='text-tiny uppercase font-bold'>무슨무슨회사</p>
          <small className='text-default-500'>이게뭐야</small>
          <h4 className='font-bold text-large'>백엔드 개발자</h4>
        </CardHeader>
        <CardBody className='overflow-visible py-2'>
          <Image
            alt='Card background'
            className='object-cover rounded-xl'
            src='https://nextui.org/images/hero-card-complete.jpeg'
            width={300}
          />
        </CardBody>
      </Card>

      <Card className='w-[200px] space-y-5 p-4' radius='lg'>
        <Skeleton className='rounded-lg'>
          <div className='h-24 rounded-lg bg-default-300'></div>
        </Skeleton>
        <div className='space-y-3'>
          <Skeleton className='w-3/5 rounded-lg'>
            <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
          </Skeleton>
          <Skeleton className='w-4/5 rounded-lg'>
            <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
          </Skeleton>
          <Skeleton className='w-2/5 rounded-lg'>
            <div className='h-3 w-2/5 rounded-lg bg-default-300'></div>
          </Skeleton>
        </div>
      </Card>

      <Listbox aria-label='Actions'>
        <ListboxItem key='new' onClick={() => alert('first')}>
          New file
        </ListboxItem>
        <ListboxItem key='copy'>Copy link</ListboxItem>
        <ListboxItem key='edit'>Edit file</ListboxItem>
        <ListboxItem key='delete' className='text-danger' color='danger'>
          Delete file
        </ListboxItem>
      </Listbox>

      <>
        <Button onPress={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>삭제하시겠습니까?</ModalHeader>
                <ModalBody>
                  <p>돌이킬 수 없어요~</p>
                </ModalBody>
                <ModalFooter>
                  <Button color='default' variant='light' onPress={onClose}>
                    취소
                  </Button>
                  <Button color='danger' onPress={onClose}>
                    삭제
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
      <Input
        label='Password'
        variant='bordered'
        placeholder='Enter your password'
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
        className='max-w-xs'
      />
    </div>
  );
};

export default MainPage;
