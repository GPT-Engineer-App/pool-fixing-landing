import { Box, Button, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaTools, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" align="center" bg="white" color="black">
        {/* Navigation Bar */}
        <Flex as="nav" w="full" py={4} px={8} justify="space-between" align="center" borderBottom="1px" borderColor="gray.200">
          <Heading size="lg" color="blue.600">
            PoolFixPro
          </Heading>
          <Flex gap={4}>
            <Link href="#services" p={2}>
              Services
            </Link>
            <Link href="#about" p={2}>
              About Us
            </Link>
            <Link href="#contact" p={2}>
              Contact
            </Link>
          </Flex>
        </Flex>

        {/* Hero Section */}
        <Flex direction="column" align="center" justify="center" py={10} px={6}>
          <Heading as="h1" size="2xl" textAlign="center" mb={4}>
            Professional Pool Repair & Maintenance
          </Heading>
          <Text fontSize="lg" px={2} textAlign="center" mb={6}>
            Ensuring your pool is always ready for a dive, all year round!
          </Text>
          <Button colorScheme="blue" size="lg" leftIcon={<FaTools />}>
            Get a Quote
          </Button>
        </Flex>

        {/* Services Section */}
        <VStack spacing={8} py={10} id="services">
          <Heading as="h2" size="xl" color="gray.700">
            Our Services
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} w="full" justify="center" gap={6}>
            <ServiceBox title="Cleaning" description="Regular and thorough cleaning to keep your pool sparkling." />
            <ServiceBox title="Repair" description="Efficient repair of leaks, pumps, and filters." />
            <ServiceBox title="Maintenance" description="Ongoing maintenance to ensure optimal operation." />
          </Flex>
        </VStack>

        {/* About Section */}
        <Flex direction="column" align="center" py={10} px={6} bg="gray.50" id="about">
          <Heading as="h2" size="xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" px={2} textAlign="center" maxW="container.md">
            With over 20 years of experience, PoolFixPro is your trusted partner for all pool-related needs. Our team of certified professionals is dedicated to providing top-notch service and ensuring your pool is in perfect condition.
          </Text>
          <Image src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb29sJTIwc2VydmljZSUyMHRlYW18ZW58MHx8fHwxNzE1NDQ1NTE1fDA&ixlib=rb-4.0.3&q=80&w=1080" mt={6} borderRadius="lg" />
        </Flex>

        {/* Contact Section */}
        <Flex direction="column" align="center" py={10} px={6} id="contact">
          <Heading as="h2" size="xl" mb={4}>
            Contact Us
          </Heading>
          <Text fontSize="lg" px={2} textAlign="center">
            Ready to schedule a service or need more information? Contact us now!
          </Text>
          <Button colorScheme="blue" size="lg" leftIcon={<FaPhone />} mt={4}>
            Call Now
          </Button>
        </Flex>

        {/* Footer */}
        <Flex as="footer" w="full" py={4} px={8} justify="space-between" align="center" borderTop="1px" borderColor="gray.200">
          <Text>© 2023 PoolFixPro. All rights reserved.</Text>
          <Flex gap={4}>
            <Link href="#services">Services</Link>
            <Link href="#about">About</Link>
            <Link href="#contact">Contact</Link>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

const ServiceBox = ({ title, description }) => (
  <VStack bg="white" p={6} borderRadius="lg" boxShadow="md" align="center" minW="sm">
    <Heading as="h3" size="md" color="blue.500">
      {title}
    </Heading>
    <Text textAlign="center">{description}</Text>
  </VStack>
);

export default Index;
