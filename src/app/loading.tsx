import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
  return (
    <div
      className={
        "w-screen h-screen max-w-full max-h-full absolute top-1/2 left-1/2"
      }
    >
      <Spinner />
    </div>
  );
}
