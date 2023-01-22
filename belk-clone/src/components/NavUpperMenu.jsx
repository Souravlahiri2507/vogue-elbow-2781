import React from "react";
import {
  Heading,
  Box,
  Flex,
  Input,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BiStoreAlt } from "react-icons/bi";

const handleLogin = () =>{
    alert("Login Button Clicked")
}

const NavUpperMenu = () => {
  return (
    <Box position="fixed" zIndex="1" w="full">
      <Box bgColor="whitesmoke" p="15px">
        <Flex justifyContent="space-around">
          <Box>
            <Heading as="h2" fontSize="30px">
              BelkCart
            </Heading>
          </Box>
          <Box>
            <Input
              placeholder="What can we help you find?"
              w="700px"
              p="10px"
              border="1px solid black"
            />
          </Box>
          <Box>
            <UnorderedList listStyleType="none">
              <Flex gap="18px">
                <ListItem>
                  <BsPlusSquare />
                  <Button colorScheme="black" variant="link">
                    Belk Reward+
                  </Button>
                </ListItem>
                <ListItem>
                  <MdOutlineLocalOffer />
                  <Button colorScheme="black" variant="link">
                    Coupons
                  </Button>
                </ListItem>
                <ListItem>
                  <MdOutlineAccountCircle />
                  <Menu>
                    <MenuButton as={Button} bgColor="whitesmoke">
                      My Account
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={handleLogin}>Login</MenuItem>
                      <MenuItem>Sign-Up</MenuItem>
                    </MenuList>
                  </Menu>
                </ListItem>
                <ListItem>
                  <BsBag />
                  <Button colorScheme="black" variant="link">
                    Bag
                  </Button>
                </ListItem>
              </Flex>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex>
          <Box>
            <Menu>
              <MenuButton
                bgColor="whitesmoke"
                fontFamily="serif"
                p="10px 10px 10px 30px"
              >
                Gifts
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Beauty Gifts</MenuItem>
                <MenuItem>Cozy Shop</MenuItem>
                <MenuItem>Designer Handbags</MenuItem>
                <MenuItem>Eco-Friendly</MenuItem>
                <MenuItem>Fine Jwelery</MenuItem>
                <MenuItem>For the Trend Setter</MenuItem>
                <MenuItem>Gift Cards</MenuItem>
                <MenuItem>Gifts with a purpose</MenuItem>
                <MenuItem>Holiday Decor</MenuItem>
                <MenuItem>Holiday Pajamas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                bgColor="whitesmoke"
                fontFamily="serif"
              >
                Women
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Beauty Gifts</MenuItem>
                <MenuItem>Cozy Shop</MenuItem>
                <MenuItem>Designer Handbags</MenuItem>
                <MenuItem>Eco-Friendly</MenuItem>
                <MenuItem>Fine Jwelery</MenuItem>
                <MenuItem>For the Trend Setter</MenuItem>
                <MenuItem>Gift Cards</MenuItem>
                <MenuItem>Gifts with a purpose</MenuItem>
                <MenuItem>Holiday Decor</MenuItem>
                <MenuItem>Holiday Pajamas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                bgColor="whitesmoke"
                fontFamily="serif"
              >
                Men
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Beauty Gifts</MenuItem>
                <MenuItem>Cozy Shop</MenuItem>
                <MenuItem>Designer Handbags</MenuItem>
                <MenuItem>Eco-Friendly</MenuItem>
                <MenuItem>Fine Jwelery</MenuItem>
                <MenuItem>For the Trend Setter</MenuItem>
                <MenuItem>Gift Cards</MenuItem>
                <MenuItem>Gifts with a purpose</MenuItem>
                <MenuItem>Holiday Decor</MenuItem>
                <MenuItem>Holiday Pajamas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                bgColor="whitesmoke"
                fontFamily="serif"
              >
                Kids
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Beauty Gifts</MenuItem>
                <MenuItem>Cozy Shop</MenuItem>
                <MenuItem>Designer Handbags</MenuItem>
                <MenuItem>Eco-Friendly</MenuItem>
                <MenuItem>Fine Jwelery</MenuItem>
                <MenuItem>For the Trend Setter</MenuItem>
                <MenuItem>Gift Cards</MenuItem>
                <MenuItem>Gifts with a purpose</MenuItem>
                <MenuItem>Holiday Decor</MenuItem>
                <MenuItem>Holiday Pajamas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                bgColor="whitesmoke"
                fontFamily="serif"
              >
                Shoes
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Beauty Gifts</MenuItem>
                <MenuItem>Cozy Shop</MenuItem>
                <MenuItem>Designer Handbags</MenuItem>
                <MenuItem>Eco-Friendly</MenuItem>
                <MenuItem>Fine Jwelery</MenuItem>
                <MenuItem>For the Trend Setter</MenuItem>
                <MenuItem>Gift Cards</MenuItem>
                <MenuItem>Gifts with a purpose</MenuItem>
                <MenuItem>Holiday Decor</MenuItem>
                <MenuItem>Holiday Pajamas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                bgColor="whitesmoke"
                fontFamily="serif"
              >
                Handbags
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Beauty Gifts</MenuItem>
                <MenuItem>Cozy Shop</MenuItem>
                <MenuItem>Designer Handbags</MenuItem>
                <MenuItem>Eco-Friendly</MenuItem>
                <MenuItem>Fine Jwelery</MenuItem>
                <MenuItem>For the Trend Setter</MenuItem>
                <MenuItem>Gift Cards</MenuItem>
                <MenuItem>Gifts with a purpose</MenuItem>
                <MenuItem>Holiday Decor</MenuItem>
                <MenuItem>Holiday Pajamas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                bgColor="whitesmoke"
                fontFamily="serif"
              >
                Jewelry
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Beauty Gifts</MenuItem>
                <MenuItem>Cozy Shop</MenuItem>
                <MenuItem>Designer Handbags</MenuItem>
                <MenuItem>Eco-Friendly</MenuItem>
                <MenuItem>Fine Jwelery</MenuItem>
                <MenuItem>For the Trend Setter</MenuItem>
                <MenuItem>Gift Cards</MenuItem>
                <MenuItem>Gifts with a purpose</MenuItem>
                <MenuItem>Holiday Decor</MenuItem>
                <MenuItem>Holiday Pajamas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                bgColor="whitesmoke"
                fontFamily="serif"
              >
                Beauty
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Beauty Gifts</MenuItem>
                <MenuItem>Cozy Shop</MenuItem>
                <MenuItem>Designer Handbags</MenuItem>
                <MenuItem>Eco-Friendly</MenuItem>
                <MenuItem>Fine Jwelery</MenuItem>
                <MenuItem>For the Trend Setter</MenuItem>
                <MenuItem>Gift Cards</MenuItem>
                <MenuItem>Gifts with a purpose</MenuItem>
                <MenuItem>Holiday Decor</MenuItem>
                <MenuItem>Holiday Pajamas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                bgColor="whitesmoke"
                fontFamily="serif"
              >
                Home
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Beauty Gifts</MenuItem>
                <MenuItem>Cozy Shop</MenuItem>
                <MenuItem>Designer Handbags</MenuItem>
                <MenuItem>Eco-Friendly</MenuItem>
                <MenuItem>Fine Jwelery</MenuItem>
                <MenuItem>For the Trend Setter</MenuItem>
                <MenuItem>Gift Cards</MenuItem>
                <MenuItem>Gifts with a purpose</MenuItem>
                <MenuItem>Holiday Decor</MenuItem>
                <MenuItem>Holiday Pajamas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                bgColor="whitesmoke"
                fontFamily="serif"
              >
                Bed & Bath
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Beauty Gifts</MenuItem>
                <MenuItem>Cozy Shop</MenuItem>
                <MenuItem>Designer Handbags</MenuItem>
                <MenuItem>Eco-Friendly</MenuItem>
                <MenuItem>Fine Jwelery</MenuItem>
                <MenuItem>For the Trend Setter</MenuItem>
                <MenuItem>Gift Cards</MenuItem>
                <MenuItem>Gifts with a purpose</MenuItem>
                <MenuItem>Holiday Decor</MenuItem>
                <MenuItem>Holiday Pajamas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                bgColor="whitesmoke"
                fontFamily="serif"
              >
                Brands
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Beauty Gifts</MenuItem>
                <MenuItem>Cozy Shop</MenuItem>
                <MenuItem>Designer Handbags</MenuItem>
                <MenuItem>Eco-Friendly</MenuItem>
                <MenuItem>Fine Jwelery</MenuItem>
                <MenuItem>For the Trend Setter</MenuItem>
                <MenuItem>Gift Cards</MenuItem>
                <MenuItem>Gifts with a purpose</MenuItem>
                <MenuItem>Holiday Decor</MenuItem>
                <MenuItem>Holiday Pajamas</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                p="10px 10px 10px 30px"
                bgColor="whitesmoke"
                fontFamily="serif"
                color="red.500"
              >
                Clearence
              </MenuButton>
              <MenuList bgColor="whitesmoke">
                <MenuItem>Women's Clearence</MenuItem>
                <MenuItem>Kids & Boys Clearence</MenuItem>
                <MenuItem>Handbags and Accessories Clearence</MenuItem>
                <MenuItem>Beauty Clearence</MenuItem>
                <MenuItem>Men's Clearence</MenuItem>
                <MenuItem>Shoes Clearence</MenuItem>
                <MenuItem>Bed & Bath's Clearence</MenuItem>
                <MenuItem>Jwelery Clearence</MenuItem>
                <MenuItem>Juniors Clearence</MenuItem>
                <MenuItem>Holiday Pajamas Clearence</MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box>
            <UnorderedList
              listStyleType="none"
              bgColor="whitesmoke"
              w="475px"
              ml="0px"
              h="44px"
              pl="100px"
            >
              <ListItem>
                <BiStoreAlt />
                <Button colorScheme="black" variant="link">
                  Find a Store
                </Button>
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavUpperMenu;
