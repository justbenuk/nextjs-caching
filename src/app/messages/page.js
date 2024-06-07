import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';
import { unstable_noStore } from 'next/cache'

//filewide caching
//export const revalidate = 5
//export const dynamic = 'force-dynamic'


export default async function MessagesPage() {
  // functionwid cache, this below would be the new common way
  //unstable_noStore()
  // const response = await fetch('http://localhost:8080/messages', {
  //   next: {
  //     tags: ['msg']
  //   }
  // });
  
  // const messages = await response.json();
  // changing from api to db
  const messages = await getMessages()


  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
