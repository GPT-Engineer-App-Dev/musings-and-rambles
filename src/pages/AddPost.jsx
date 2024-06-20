import { useState } from "react";
import { Container, Heading, VStack, Input, Textarea, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const newPost = { title, content };
    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));
    toast({
      title: "Post added.",
      description: "Your new blog post has been added.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          isRequired
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          isRequired
        />
        <Button type="submit" colorScheme="blue">Add Post</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;