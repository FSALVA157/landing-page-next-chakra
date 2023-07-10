import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Spacer  
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import Image from "next/image";

//const Links = ["Inicio", "Servicios", "Precios", "Testimonios"];
const Links = [
  {
    path: "home",
    label: "Inicio",
  },
  {
    path: "feature",
    label: "Servicios",
  },
  {
    path: "pricing",
    label: "Precios",
  },
  {
    path: "testimonial",
    label: "Testimonios",
  },
];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box            
       //bg={useColorModeValue("gray.100", "gray.900")}               
       bg={useColorModeValue("rgba(210, 217, 232, 0.8)", "rgba(19, 24, 33, 0.8)")}
        //backgroundColor="rgba(255, 255, 255, 0.8)" 
        //backgroundColor="rgba(210, 217, 232, 0.8)" 
        backdropFilter="saturate(180%) blur(5px)" 
        py={7}
        px={{ base: 4, md: 20 }}
        fontSize={"lg"}        
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image
                src={
                  colorMode === "light"
                    ? "/assets/logo.svg"
                    : "/assets/logo-blanco.png"
                }
                alt="logo"
                width={90}
                height={90}
              ></Image>
            </Box>
          </HStack>
          <Flex>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, i) => (
                
                  <React.Fragment key={link.label}>
                  <ScrollLink
                    activeClass="active"
                    to={link.path}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={i}
                  >
                    {link.label}
                  </ScrollLink>               
                  <Spacer />
                  </React.Fragment>
                
              ))}
            </HStack>
          </Flex>
          <Flex alignItems={"center"}>
            <Button
              aria-label="Toggle Color Mode"
              onClick={toggleColorMode}
              _focus={{ boxShadow: "none" }}
              w="fit-content"
              size={"xs"}
              mr={5}
              bg={"transparent"}
              // {...props}
            >
              {colorMode === "light" ? (
                <BsMoonStarsFill color="black" />
              ) : (
                <BsSun color="white" />
              )}
            </Button>
            <Button
              variant={colorMode === "light" ? "outline" : "solid"}
              // colorScheme={'teal'}
              size={"lg"}
              fontSize={"sm"}
              color={"purple"}
              rounded={"full"}
              _hover={{
                bg: "purple.500",
                color: "white",
              }}
              _focus={{
                bg: "purple.500",
                color: "white",
              }}
              px={10}
            >
              Tomar Accion
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
                px={5}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <>
                  <NavLink key={link.label}>{link.label}</NavLink>
                </>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
