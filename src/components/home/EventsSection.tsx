import { Card, CardBody } from "@nextui-org/card";
import { WorkshopIcon } from "@/icons/WorkshopIcon";
import { SeminarIcon } from "@/icons/SeminarIcon";
import { CodathonIcon } from "@/icons/CodathonIcon";
import { HackathonIcon } from "@/icons/HackathonIcon";
import { ExpertTalksIcon } from "@/icons/ExpertTalksIcon";
import { FunCulturalEventsIcon } from "@/icons/FunCulturalEventsIcon";

export default function EventsSection() {
  return (
    <section id="events" className={"mt-24"}>
      <h1 className={"text-2xl sm:text-3xl text-center font-bold"}>
        Events we <span className={"text-primary-600"}>Organize</span> for You!
      </h1>

      <div
        className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"}
      >
        <Card
          isBlurred
          className={"bg-background/60 dark:bg-default-100/50 p-6"}
        >
          <CardBody className="space-y-5">
            <WorkshopIcon
              width={64}
              height={64}
              className={"mx-auto text-primary-600"}
            />

            <h2 className={"font-semibold text-xl text-center"}>Workshops</h2>
            <p className={"text-justify"}>
              Regularly scheduled workshops provide a structured, hands-on
              learning environment to sharpen programming skills and steadily
              progress toward expertise.
            </p>
          </CardBody>
        </Card>
        <Card
          isBlurred
          className={"bg-background/60 dark:bg-default-100/50 p-6"}
        >
          <CardBody className="space-y-5">
            <SeminarIcon
              width={64}
              height={64}
              className={"mx-auto text-primary-600"}
            />

            <h2 className={"font-semibold text-xl text-center"}>Seminars</h2>
            <p className={"text-justify"}>
              Seminars are designed to equip students with essential knowledge
              and tools for excelling in the workplace and advancing their
              technical proficiency.
            </p>
          </CardBody>
        </Card>
        <Card
          isBlurred
          className={"bg-background/60 dark:bg-default-100/50 p-6"}
        >
          <CardBody className="space-y-5">
            <CodathonIcon
              width={64}
              height={64}
              className={"mx-auto text-primary-600"}
            />

            <h2 className={"font-semibold text-xl text-center"}>Codathons</h2>
            <p className={"text-justify"}>
              Codathons challenge coders of all levels to assess and enhance
              coding abilities, fostering growth and career advancement in a
              competitive, collaborative setting.
            </p>
          </CardBody>
        </Card>
        <Card
          isBlurred
          className={"bg-background/60 dark:bg-default-100/50 p-6"}
        >
          <CardBody className="space-y-5">
            <HackathonIcon
              width={64}
              height={64}
              className={"mx-auto text-primary-600"}
            />

            <h2 className={"font-semibold text-xl text-center"}>Hackathons</h2>
            <p className={"text-justify"}>
              Hackathons offer opportunities to develop innovative software
              projects, pitch ideas, and receive guidance, creating a space for
              innovation.
            </p>
          </CardBody>
        </Card>
        <Card
          isBlurred
          className={"bg-background/60 dark:bg-default-100/50 p-6"}
        >
          <CardBody className="space-y-5">
            <ExpertTalksIcon
              width={64}
              height={64}
              className={"mx-auto text-primary-600"}
            />

            <h2 className={"font-semibold text-xl text-center"}>
              Expert Talks
            </h2>
            <p className={"text-justify"}>
              Expert talks feature seasoned professionals sharing valuable
              insights, promoting knowledge exchange, continuous learning and
              collaboration.
            </p>
          </CardBody>
        </Card>
        <Card
          isBlurred
          className={"bg-background/60 dark:bg-default-100/50 p-6"}
        >
          <CardBody className="space-y-5">
            <FunCulturalEventsIcon
              width={64}
              height={64}
              className={"mx-auto text-primary-600"}
            />

            <h2 className={"font-semibold text-xl text-center"}>
              Fun & Cultural Events
            </h2>
            <p className={"text-justify"}>
              Cultural events promote understanding through diverse traditions,
              art, music, and meaningful dialogue, offering vibrant and
              enriching experiences.
            </p>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
