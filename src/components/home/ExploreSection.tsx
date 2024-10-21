import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function ExploreSection() {
  return (
    <section
      id="about"
      className={
        "grid grid-cols-1 sm:grid-cols-2 gap-12 items-center justify-center mt-24"
      }
    >
      <Image src={"/images/ninja-hero-3.webp"} alt={"hero-2"} isBlurred />

      <div className={"space-y-4"}>
        <h1
          className={
            "text-2xl text-center sm:text-left sm:text-3xl font-semibold"
          }
        >
          Diligence paves the path to{" "}
          <span className={"text-primary-600"}>Success!</span>
        </h1>
        <p className={"text-gray-600 dark:text-gray-400 text-sm text-justify"}>
          The Coding Ninjas CUH has various people working in different teams
          according to their skill set. Here are the different teams from the
          club: Organizing team, Content team, Graphic team, Social Media team,
          Web team, Technical team, Promotion team, Community Coordinator,
          Competitive Programming team, Video Editing team.
        </p>

        <Button color={"primary"} variant={"ghost"}>
          Explore
        </Button>
      </div>
    </section>
  );
}
