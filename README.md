## About

This is a sample project that shows how to test async React Server Components in Next.js using

- this gist: https://gist.github.com/sroebert/a04ca6e0232a4a60bc50d7f164f101f6
- Vitest
- [React Testing Library](https://github.com/testing-library/react-testing-library#readme)

Hopefully there will be official support for this in the future.

## The component

The component that is being tested is a [Greeting](./src/app/greeting.tsx) component that displays "Good morning" if the current time is before 12pm, and "Good afternoon" if the current time is after 12pm.

## Running the tests

The test file can be found in [greeting.test.tsx](./src/app/greeting.test.tsx).

```bash
npm run test
```

So far this hack still works with Next.js 15.4.1 and React 19.1.0.

## Blog Post

Read the blog post [here](https://nico.fyi/blog/how-to-test-react-server-component).
