import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
  Box,
  Avatar,
  keyframes,
  Center,
} from "@chakra-ui/react";
import ModalVideo from "react-modal-video";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { ReactElement, useState } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function FeaturesComponent() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = () => {
    //e.preventDefault();    
    setVideoOpen(true);
  };

  const pulseRing = keyframes`
	0% {
    transform: scale(0.33);
  }
  40%,
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
	`;

  return (
    <Container id="feature" maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Nuestros Servicios
          </Text>
          <Heading>Una Agencia de Marketing Digital</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
          Humanizamos tu marca. ¡Llegamos al público ideal
          para tu marca! Gracias a nuestros profesionales en Marketing y la
          segmentación de promociones según el objetivo planteado.
          </Text>          
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Publicidad en Redes"}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Posicionamiento de Marca"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Identidad Corporativa"}
            />            
         
          </Stack>
         
        </Stack>
        
        <Stack           
              //  bgImage="/assets/services/cafecom-directora.jpg"
              //  bgSize="cover"
              // alignItems="center"
              align="center"
              // alignContent="center"
              justifyContent="center"
         >          
          <Box
              as="div"
              position="absolute"                         
              //top="50%" left="50%" transform="translate(-50%, -50%)"              
              w="100px"
              h="100px"
              _before={{
                content: "''",
                position: "absolute",
                display: "block",
                width: "300%",
                height: "300%",
                boxSizing: "border-box",
                marginLeft: "-100%",
                marginTop: "-100%",
                borderRadius: "50%",
                bgColor: "purple.500",
                animation: `2.25s ${pulseRing} cubic-bezier(0.455, 0.03, 0.515, 0.955) -0.4s infinite`,
              }}
              onClick={handleClick}
            >
              <Avatar            
                opacity="70%"
                src="/assets/coffee_youtube.png"
                size="full"
                position="absolute"
                top={0}                
              />            
            </Box>

          <Image
            position="revert-layer"                      
            rounded={"md"}
            alt={"feature image"}          
            src="/assets/services/cafecom-directora.jpg"
            objectFit={"cover"}            
          />          
        </Stack>
        
      </SimpleGrid>
      <ModalVideo
            channel="youtube"
            isOpen={videoOpen}
            videoId="KJhTxVR9IhU"
            onClose={() => setVideoOpen(false)}
          />
    </Container>
  );
}
