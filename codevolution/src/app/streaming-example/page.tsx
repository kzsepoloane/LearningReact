import { FifteenSecondsComponent } from "./fifteen-seconds-component";
import { TenSecondsComponent } from "./ten-second-component";
import { Suspense } from "react";

const SlowComponent = () => {
  return (
    <div>
      <h1>Slow Component</h1>
      <p>This component simulates a slow loading process.</p>
      <p>It will take a few seconds to load...</p>
      <Suspense fallback={<div>Loading...</div>}>
        <TenSecondsComponent />
      </Suspense>
        <p>More content can be added here while the slow component is loading.</p>
      <Suspense fallback={<div>Loading...</div>}>
        <FifteenSecondsComponent /> 
        </Suspense>
      <p>Even more content can be added here while the slow component is loading.</p>
    </div>
  );
}

export default SlowComponent;
export const dynamic = 'force-dynamic'; // This will force the component to be rendered dynamically