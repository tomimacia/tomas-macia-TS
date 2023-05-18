import { NavigationChild } from "@/types/Datatype";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
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
        const isActive = href === router.asPath;
        return (
          <BreadcrumbItem key={"BaseLink" + Title}>
            <BreadcrumbLink
              as={Link}
              href={href}
              p="2.5px"
              borderRadius="5px"
              bg={isActive ? bgCustomColor : undefined}
            >
              {Title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          href={data?.Source?.href}
          target={data?.Source?.target}
          rel={data?.Source?.rel}
          display="inline-flex"
          alignItems="center"
          style={{ gap: 4 }}
        >
          <IoLogoGithub />
          {data?.Source?.Title}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
