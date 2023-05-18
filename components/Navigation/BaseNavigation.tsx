import { NavigationChild } from "@/types/Datatype";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
  Link
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { IoLogoGithub } from "react-icons/io5";

export const BaseNavigation = ({ data }: NavigationChild) => {
  const bgCustomColor = useColorModeValue("teal.200", "teal");
  const router = useRouter();
  return (
    <Breadcrumb
      separator=""
      display={{ base: "none", sm: "flex", md: "flex" }}
      mr={3}
      fontSize={18}
      spacing={4}
    >
      {data?.Links?.map((link) => {
        const { Title, href } = link;
        const isActive = href === router.route;
        return (
          <BreadcrumbItem key={"BaseLink" + Title}>
            <Link
              as={NextLink}
              scroll={false}
              href={href}
              p="2.5px"
              borderRadius="5px"
              bg={isActive ? bgCustomColor : undefined}
            >
              {Title}
            </Link>
          </BreadcrumbItem>
        );
      })}
      <BreadcrumbItem>
        <Link
          as={NextLink}
          href={data?.Source?.href}
          target={data?.Source?.target}
          rel={data?.Source?.rel}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
        >
          <IoLogoGithub />
          {data?.Source?.Title}
        </Link>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
