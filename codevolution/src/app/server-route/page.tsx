//import { clientSideFunction } from "../utils/client-utils";
import { ServerSideFunction } from "../utils/server-utils";

const ServerRoutePage = async () => {
  const { message } = await ServerSideFunction();
  //should cause build error
  //const clientResult = clientSideFunction();
  return (
    <div>
      <h1>Server Route Page</h1>
      <p>This page is rendered on the server.</p>
      <p>{message}</p>
    </div>
  );
};
export default ServerRoutePage;
