import Hello from "./Hello";
import { Message } from "./Message";

function AppRender() {
  return (
    <div>
      <Hello></Hello>
      <Message />
    </div>
  );
}

export default AppRender;

//yes i can use "Message multiple time in every .jsx file like "app" if i do it my "message" components get just render multiple time
