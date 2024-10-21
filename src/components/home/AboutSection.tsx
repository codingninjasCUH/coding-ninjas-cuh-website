import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import CheckIcon from "@/icons/CheckIcon";
import { Divider } from "@nextui-org/divider";

export default function AboutSection() {
  return (
    <section
      id="about"
      className={
        "grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center mt-24"
      }
    >
      <Image src={"/images/ninja-hero-2.webp"} alt={"hero image"} isBlurred />

      <div className={"space-y-4"}>
        <h1
          className={
            "text-2xl sm:text-3xl font-semibold text-balance text-center lg:text-left"
          }
        >
          We are the embodiment of{" "}
          <span className={"text-primary-600"}>individuality</span>, the
          architects of our own destiny.
        </h1>
        <p className={"text-gray-600 dark:text-gray-400 text-sm text-justify"}>
          At Coding Ninjas, we firmly believe in the inherent uniqueness of
          every individual, recognizing that each person harbors their own set
          of talents waiting to be discovered. Our mission is to offer pathways
          for skill enhancement and self-discovery, empowering students to
          unlock their full potential. Through active learning experiences and
          fostering meaningful connections, we create environments where
          students can thrive and excel.
        </p>

        <Card className={"text-sm sm:text-base"}>
          <CardBody className={"space-y-4"}>
            <div className={"flex gap-4 items-center"}>
              <CheckIcon className={"text-success-600"} />
              Become Ready for Industry with us
            </div>

            <Divider />

            <div className={"flex gap-4 items-center"}>
              <CheckIcon className={"text-success-600"} />
              Regular competition / events
            </div>

            <Divider />

            <div className={"flex gap-4 items-center"}>
              <CheckIcon className={"text-success-600"} />
              Ready to learn and earn
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
