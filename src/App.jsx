import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher.jsx";

function App() {
  return (
    <Router>
      <Flex direction="column" minH="100vh">
        <Box as="header" p={4} bg="gray.800" color="white">
          <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
        <Box as="main" flex="1">
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/add-post" element={<AddPost />} />
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

export default App;
