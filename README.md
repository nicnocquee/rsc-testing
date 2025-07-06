This is a sample project that shows how to test async React Server Components in Next.js using

- this gist: https://gist.github.com/sroebert/a04ca6e0232a4a60bc50d7f164f101f6
- Vitest
- [React Testing Library](https://github.com/testing-library/react-testing-library#readme)

Hopefully there will be official support for this in the future.

## The component

The component that is being tested is a [Greeting](./src/app/greeting.tsx) component that displays "Good morning" if the current time is before 12pm, and "Good afternoon" if the current time is after 12pm.

## Running the tests

```bash
npm run test
```
