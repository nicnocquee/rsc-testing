import { getTimeContextStore, withTimeContext } from "./time-context";

export const Greeting = async () => {
  const timeContextStore = getTimeContextStore();
  const { currentTime } = timeContextStore;

  if (currentTime.getHours() < 12) {
    return <div>Good morning</div>;
  }

  return <div>Good afternoon</div>;
};

// This is the default export for the component for production
export default withTimeContext(Greeting, {
  currentTime: new Date(),
});
