import { Divider } from "@nextui-org/divider";
import { FacebookIcon } from "@/icons/FacebookIcon";
import { Link } from "@nextui-org/link";
import { InstagramIcon } from "@/icons/InstagramIcon";
import { LinkedinIcon } from "@/icons/LinkedinIcon";
import { TwitterIcon } from "@/icons/TwitterIcon";
import { Image } from "@nextui-org/image";

export default function Footer() {
  return (
    <footer className="">
      <div className={"pt-20 pb-8 max-w-5xl mx-auto"}>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 items-center justify-center">
          <Divider className={"hidden sm:block"} />
          <div className={"flex gap-4 items-center justify-around"}>
            <Link href="#">
              <FacebookIcon width={24} height={24} />
            </Link>
            <Link href="#">
              <InstagramIcon width={24} height={24} />
            </Link>
            <Link href="#">
              <LinkedinIcon width={24} height={24} />
            </Link>
            <Link href="#">
              <TwitterIcon width={24} height={24} />
            </Link>
          </div>
          <Divider className={"hidden sm:block"} />
        </div>

        <div
          className={
            "flex flex-col gap-3 items-center justify-center mt-8 sm:mt-12"
          }
        >
          <Image src={"/images/logo.webp"} alt={"logo"} height={56} isBlurred />
          <h1 className={"text-2xl font-semibold"}>
            <span className={"text-primary-600"}>Coding Ninjas</span> CUH
            Chapter
          </h1>

          <p className={"text-sm leading-none"}>
            Copyright © {new Date().getFullYear()} Coding Ninjas CUH
          </p>
        </div>

        <div
          className={
            "flex font-bold gap-2 items-center justify-center mt-4 h-5"
          }
        >
          <Link
            href="https://cuh.ac.in/"
            color={"foreground"}
            underline={"always"}
            className={"hover:text-primary-600 text-sm"}
          >
            Central University of Haryana
          </Link>

          <Divider orientation={"vertical"} />

          <Link
            className={"hover:text-primary-600 text-sm"}
            href=""
            color={"foreground"}
            underline={"always"}
          >
            Coding Ninjas
          </Link>
        </div>
      </div>
    </footer>
  );
}
