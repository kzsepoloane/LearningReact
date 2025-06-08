import { ServerSideFunction } from "../utils/server-utils";

const ServerRoutePage = async () => {
    const {message} = await ServerSideFunction();
  return (
    <div>
      <h1>Server Route Page</h1>
      <p>This page is rendered on the server.</p>
        <p>{message}</p>
    </div>
  );
}
export default ServerRoutePage;