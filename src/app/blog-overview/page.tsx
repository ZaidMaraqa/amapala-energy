"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Stack,
  Link,
} from "@chakra-ui/react";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const BlogOverview = () => {
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const heading3Ref = useRef<HTMLHeadingElement>(null);
  const heading4Ref = useRef<HTMLHeadingElement>(null);
  const heading5Ref = useRef<HTMLHeadingElement>(null);

  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  const handleScrollTo = (
    ref: React.RefObject<HTMLHeadingElement>,
    id: string
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveHeading(id);
    }
  };

  const handleMouseEnter = (id: string) => {
    setActiveHeading(id);
  };

  const handleMouseLeave = () => {
    setActiveHeading(null);
  };

  const handleScroll = () => {
    const headingElements = [
      { id: "heading2", ref: heading2Ref },
      { id: "heading3", ref: heading3Ref },
      { id: "heading4", ref: heading4Ref },
      { id: "heading5", ref: heading5Ref },
    ];

    const offsetTop = window.pageYOffset + window.innerHeight / 2;

    for (const { id, ref } of headingElements) {
      if (ref.current && ref.current.offsetTop < offsetTop) {
        setActiveHeading(id);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar />
      <Box bg="white" py={10}>
        <Container maxW="6xl">
          <Stack direction={{ base: "column", lg: "row" }} spacing={10}>
            <Box flex="3">
              <Text fontSize="sm" color="gray.500">
                Energy &gt; Insights
              </Text>
              <Heading fontSize="3xl" my={4}>
                Unlocking the Potential of Latin America's Energy Sector
              </Heading>
              <Text color="gray.500" mb={4}>
                By John Smith <br />
                January 11, 2022 &middot; 5 minutes read
              </Text>
              <Text fontSize="lg" mb={4}>
                Share this post:
              </Text>
              <Stack direction="row" mb={4} spacing={4}>
                <Link href={"https://facebook.com"}>
                  <FaFacebook />
                </Link>
                <Link href={"https://instagram.com"}>
                  <FaInstagram />
                </Link>
                <Link href={"https://twitter.com"}>
                  <FaTwitter />
                </Link>
                <Link href={"https://linkedin.com"}>
                  <FaLinkedin />
                </Link>
                <Link href={"https://youtube.com"}>
                  <FaYoutube />
                </Link>
              </Stack>
              <Image
                src="https://via.placeholder.com/600"
                alt="Main Image"
                mb={4}
              />
              <Heading
                ref={heading2Ref}
                fontSize="2xl"
                mt={8}
                mb={4}
                id="heading2"
                onMouseEnter={() => handleMouseEnter("heading2")}
                onMouseLeave={handleMouseLeave}
              >
                Heading 2
              </Heading>
              <Text mb={4}>
                Dolor enim eu tortor urna sed dui nulla. Aliquam vestibulum,
                nulla odio nisi vitae. In aliquet pellentesque aenean hac
                vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                vitae malesuada fringilla.
              </Text>
              <Text mb={4}>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel aliquam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisl tellus tincidunt.
                At feugiat sapien varius id.
              </Text>
              <Heading
                ref={heading3Ref}
                fontSize="2xl"
                mt={8}
                mb={4}
                id="heading3"
                onMouseEnter={() => handleMouseEnter("heading3")}
                onMouseLeave={handleMouseLeave}
              >
                Heading 3
              </Heading>
              <Text mb={4}>
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in
                volutpat mollis at volutpat lectus velit, sed auctor. Porttitor
                faucibus arcu quis fusce augue enim. Quis at habitant diam at.
                Suscipit tristique risus, at donec. In turpis et vel quam
                imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
              </Text>
              <Text mb={4}>
                Tristique odio senectus nam posuere ornare leo metus, ultricies.
                Blandit dui, ultrices vulputate morbi feugiat cras placerat
                elit. Aliquam tellus lorem sed ac. Montes, sed mattis
                pellentesque suscipit accumsan. Cursus viverra aenean magna
                risus elementum faucibus molestie pellentesque. Arcu ultricies
                sed mauris vestibulum.
              </Text>
              <Heading
                ref={heading4Ref}
                fontSize="2xl"
                mt={8}
                mb={4}
                id="heading4"
                onMouseEnter={() => handleMouseEnter("heading4")}
                onMouseLeave={handleMouseLeave}
              >
                Heading 4
              </Heading>
              <Text mb={4}>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
                id scelerisque est ultricies ultricies. Duis est sit sed leo
                nibh, blandit elit egestas. Quisque tristique consequat quam
                sed. Nisl at scelerisque amet nulla purus habitasse.
              </Text>
              <Heading
                ref={heading5Ref}
                fontSize="2xl"
                mt={8}
                mb={4}
                id="heading5"
                onMouseEnter={() => handleMouseEnter("heading5")}
                onMouseLeave={handleMouseLeave}
              >
                Heading 5
              </Heading>
              <Text mb={4}>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
                id scelerisque est ultricies ultricies. Duis est sit sed leo
                nibh, blandit elit egestas. Quisque tristique consequat quam
                sed. Nisl at scelerisque amet nulla purus habitasse.
              </Text>
              <Text mb={4} fontStyle="italic">
                “Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                mauris id. Non pellentesque congue eget consectetur turpis.
                Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt
                aenean tempus.”
              </Text>
            </Box>
            <Box flex="1" as="aside">
              <Box
                position="sticky"
                top="20px"
                p={4}
                borderWidth="1px"
                borderRadius="md"
              >
                <Heading fontSize="lg" mb={4}>
                  Table of contents
                </Heading>
                <Text
                  color="black"
                  mb={2}
                  cursor="pointer"
                  fontWeight={activeHeading === "heading2" ? "bold" : "normal"}
                  onClick={() => handleScrollTo(heading2Ref, "heading2")}
                >
                  Heading 2
                </Text>
                <Text
                  color="black"
                  mb={2}
                  cursor="pointer"
                  fontWeight={activeHeading === "heading3" ? "bold" : "normal"}
                  onClick={() => handleScrollTo(heading3Ref, "heading3")}
                >
                  Heading 3
                </Text>
                <Text
                  color="black"
                  mb={2}
                  cursor="pointer"
                  fontWeight={activeHeading === "heading4" ? "bold" : "normal"}
                  onClick={() => handleScrollTo(heading4Ref, "heading4")}
                >
                  Heading 4
                </Text>
                <Text
                  color="black"
                  mb={2}
                  cursor="pointer"
                  fontWeight={activeHeading === "heading5" ? "bold" : "normal"}
                  onClick={() => handleScrollTo(heading5Ref, "heading5")}
                >
                  Heading 5
                </Text>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default BlogOverview;
