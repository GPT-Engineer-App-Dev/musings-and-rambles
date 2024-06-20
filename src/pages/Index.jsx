import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate writer and tech enthusiast. Follow my journey as I share insights on technology, programming, and life.
        </Text>
        <VStack spacing={2} direction="row">
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="24px" />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub size="24px" />
          </Link>
        </VStack>
        <Button as={RouterLink} to="/add-post" colorScheme="blue">Add New Post</Button>
        <VStack spacing={4} w="100%">
          {posts.map((post, index) => (
            <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="100%">
              <Heading as="h3" size="md">{post.title}</Heading>
              <Text mt={2}>{post.content}</Text>
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;