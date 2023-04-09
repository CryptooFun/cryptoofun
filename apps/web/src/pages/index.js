import DefaultLayout from '@/components/layouts/DefaultLayout';
import { HelloRequest } from '@/genproto/hello_pb';
import { helloClient } from '@/grpc';

function Home(props) {
  return (
    <DefaultLayout>
      <h1 className="text-teal-500 font-bold">CRYPTOO FUN</h1>
      <h2 className="text-white">message: {props.message.body}</h2>
    </DefaultLayout>
  );
}

export default Home;

export async function getServerSideProps() {
  return await new Promise((resolve, reject) => {
    const req = new HelloRequest();
    req.setFirstName('Sleepy');
    req.setLastName('Joe');
    helloClient.hello(req, (error, response) => {
      if (error) {
        return reject(error);
      }

      const { message } = response.toObject();
      console.log('response.msg:', message);
      return resolve({ props: { message } });
    });
  });
}
