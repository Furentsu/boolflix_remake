import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-screen h-screen bg-white flex justify-center items-center text-center">
      <div className="flex-col">
        <h1 className="text-5xl">Oops!</h1>
        <p className="text-xl py-10">
          Sorry, an unexpected error has occurred. Try again later!
        </p>
        <p className="text-lg italic">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
