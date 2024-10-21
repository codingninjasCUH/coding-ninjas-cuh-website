import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className={
        "grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center mt-12 md:mt-24"
      }
    >
      <div className={"space-y-4"}>
        <h1
          className={
            "text-xl sm:text-3xl font-semibold md:text-left text-center"
          }
        >
          Welcome to{" "}
          <p>
            <span className={"text-primary-600"}>Coding Ninjas</span> Student
            Chapter
          </p>{" "}
          Central University of Haryana
        </h1>
        <p className={"text-gray-600 dark:text-gray-400 text-sm text-justify"}>
          The coding Ninjas CUH student chapter is CUH’s best competitive
          programming club. Coding Ninjas motive is: Aspire, Learn, Code, Debug,
          and Achieve! We arrange different types of events and hackathons to
          help you explore your coding journey.
        </p>

        <div className={"flex gap-4 justify-center sm:justify-start"}>
          <Button color={"primary"} variant={"solid"}>
            Upcoming Events
          </Button>

          <Button color={"primary"} variant={"ghost"}>
            Past Events
          </Button>
        </div>
      </div>
      <Image
        className={"hidden md:block"}
        src={"/images/ninja-hero.webp"}
        alt={"hero image"}
        isBlurred
      />
    </section>
  );
}
