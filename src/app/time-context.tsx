import { AsyncLocalStorage } from "async_hooks";

export type TimeContext = {
  currentTime: Date;
};

export const timeContext = new AsyncLocalStorage<TimeContext>();

export const getTimeContextStore = () => {
  const store = timeContext.getStore();
  if (!store) {
    throw new Error(
      "Db context not found. You need to wrap your code in a TimeContext.run() block."
    );
  }
  return store;
};

export const withTimeContext =
  <T,>(withTimeContextImpl: React.FC<T>, timeContextStore: TimeContext) =>
  (props: T) => {
    return timeContext.run(timeContextStore, () => withTimeContextImpl(props));
  };
