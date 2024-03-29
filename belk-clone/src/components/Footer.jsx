import {
  Box,
  Image,
  Center,
  Flex,
  Text,
  Heading,
  Link,
} from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <>
      <hr style={{ border: "1px solid black" }} />
            <br />
            <Box>
              <Flex justifyContent="space-around">
                <Box>
                  <Heading fontSize="l">Customer Service</Heading>
                  <br />
                  <Link>Contact Us</Link>
                  <br />
                  <Link>Find my Orders</Link>
                  <br />
                  <Link>Returns & Refunds</Link>
                  <br />
                  <Link>Find a Store</Link>
                  <br />
                  <Link>Find a Registry</Link>
                  <br />
                  <Link>Fins a Wishlist</Link>
                  <br />
                  <Link>Shipping Informations</Link>
                  <br />
                  <Link>Pickup & Delivery Options</Link>
                  <br />
                  <Link>Policy and Guidelines</Link>
                  <br />
                  <Link>FAQs</Link>
                </Box>

                <Box>
                  <Heading fontSize="l">Belk Rewards+ Credit Cards</Heading>
                  <br />
                  <Link>Apply for a Credit Card</Link>
                  <br />
                  <Link>Pay my Bill</Link>
                  <br />
                  <Link>Manage my Account</Link>
                  <br />
                  <Link>Belk Credit Card Benefit</Link>
                </Box>

                <Box>
                  <Heading fontSize="l">About Belk</Heading>
                  <br />
                  <Link>Carrers</Link>
                  <br />
                  <Link>Catelogs & Ads</Link>
                  <br />
                  <Link>Brands we Carry</Link>
                  <br />
                  <Link>Newsroom</Link>
                  <br />
                  <Link>Behind the Brand</Link>
                  <br />
                  <Link>Vendor Resourses</Link>
                  <br />
                  <Link>Store Events</Link>
                </Box>

                <Box>
                  <Heading fontSize="l">Get The Belk App</Heading>
                  <br />
                  <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' shape-rendering='crispEdges' height='128' width='128' viewBox='0 0 29 29'%3E%3Cpath fill='%23FFFFFF' d='M0,0 h29v29H0z'%3E%3C/path%3E%3Cpath fill='%23000000' d='M0 0h7v1H0zM8 0h1v1H8zM10 0h2v1H10zM13 0h3v1H13zM18 0h1v1H18zM22,0 h7v1H22zM0 1h1v1H0zM6 1h1v1H6zM8 1h4v1H8zM13 1h3v1H13zM17 1h1v1H17zM19 1h1v1H19zM22 1h1v1H22zM28,1 h1v1H28zM0 2h1v1H0zM2 2h3v1H2zM6 2h1v1H6zM8 2h1v1H8zM10 2h5v1H10zM19 2h1v1H19zM22 2h1v1H22zM24 2h3v1H24zM28,2 h1v1H28zM0 3h1v1H0zM2 3h3v1H2zM6 3h1v1H6zM10 3h2v1H10zM14 3h2v1H14zM19 3h1v1H19zM22 3h1v1H22zM24 3h3v1H24zM28,3 h1v1H28zM0 4h1v1H0zM2 4h3v1H2zM6 4h1v1H6zM8 4h1v1H8zM11 4h3v1H11zM15 4h1v1H15zM22 4h1v1H22zM24 4h3v1H24zM28,4 h1v1H28zM0 5h1v1H0zM6 5h1v1H6zM10 5h1v1H10zM13 5h2v1H13zM17 5h2v1H17zM20 5h1v1H20zM22 5h1v1H22zM28,5 h1v1H28zM0 6h7v1H0zM8 6h1v1H8zM10 6h1v1H10zM12 6h1v1H12zM14 6h1v1H14zM16 6h1v1H16zM18 6h1v1H18zM20 6h1v1H20zM22,6 h7v1H22zM11 7h2v1H11zM14 7h1v1H14zM18 7h1v1H18zM0 8h1v1H0zM3 8h15v1H3zM21 8h1v1H21zM24 8h1v1H24zM26,8 h3v1H26zM0 9h1v1H0zM2 9h1v1H2zM4 9h1v1H4zM7 9h1v1H7zM9 9h1v1H9zM14 9h1v1H14zM18 9h3v1H18zM23 9h2v1H23zM26 9h2v1H26zM3 10h1v1H3zM6 10h3v1H6zM11 10h1v1H11zM14 10h1v1H14zM17 10h1v1H17zM21 10h1v1H21zM23 10h1v1H23zM26 10h1v1H26zM0 11h2v1H0zM5 11h1v1H5zM10 11h1v1H10zM14 11h2v1H14zM17 11h2v1H17zM20 11h1v1H20zM25 11h1v1H25zM28,11 h1v1H28zM0 12h1v1H0zM2 12h1v1H2zM6 12h1v1H6zM8 12h1v1H8zM12 12h3v1H12zM18 12h1v1H18zM20 12h1v1H20zM22 12h2v1H22zM28,12 h1v1H28zM0 13h1v1H0zM3 13h1v1H3zM5 13h1v1H5zM7 13h2v1H7zM11 13h2v1H11zM22 13h1v1H22zM24,13 h5v1H24zM3 14h4v1H3zM11 14h2v1H11zM14 14h2v1H14zM17 14h1v1H17zM19 14h2v1H19zM22 14h1v1H22zM24 14h1v1H24zM26 14h1v1H26zM28,14 h1v1H28zM1 15h2v1H1zM4 15h2v1H4zM13 15h2v1H13zM16 15h1v1H16zM18 15h2v1H18zM21 15h2v1H21zM24 15h1v1H24zM26 15h1v1H26zM28,15 h1v1H28zM5 16h6v1H5zM12 16h1v1H12zM15 16h1v1H15zM17 16h1v1H17zM19 16h2v1H19zM25 16h1v1H25zM0 17h1v1H0zM5 17h1v1H5zM7 17h2v1H7zM19 17h2v1H19zM24 17h1v1H24zM26 17h2v1H26zM0 18h3v1H0zM4 18h4v1H4zM9 18h1v1H9zM12 18h3v1H12zM16 18h4v1H16zM23 18h3v1H23zM28,18 h1v1H28zM0 19h2v1H0zM3 19h2v1H3zM10 19h1v1H10zM13 19h1v1H13zM15 19h2v1H15zM18 19h1v1H18zM20 19h1v1H20zM24 19h3v1H24zM0 20h3v1H0zM4 20h1v1H4zM6 20h2v1H6zM9 20h5v1H9zM16 20h2v1H16zM19 20h9v1H19zM8 21h3v1H8zM12 21h2v1H12zM16 21h3v1H16zM20 21h1v1H20zM24 21h2v1H24zM0 22h7v1H0zM8 22h1v1H8zM10 22h4v1H10zM15 22h2v1H15zM19 22h2v1H19zM22 22h1v1H22zM24 22h2v1H24zM0 23h1v1H0zM6 23h1v1H6zM8 23h2v1H8zM11 23h1v1H11zM13 23h1v1H13zM16 23h5v1H16zM24 23h1v1H24zM27 23h1v1H27zM0 24h1v1H0zM2 24h3v1H2zM6 24h1v1H6zM8 24h6v1H8zM18 24h8v1H18zM0 25h1v1H0zM2 25h3v1H2zM6 25h1v1H6zM8 25h2v1H8zM11 25h5v1H11zM17 25h1v1H17zM19 25h1v1H19zM21 25h1v1H21zM23 25h1v1H23zM27 25h1v1H27zM0 26h1v1H0zM2 26h3v1H2zM6 26h1v1H6zM10 26h3v1H10zM14 26h2v1H14zM18 26h1v1H18zM20 26h2v1H20zM23 26h2v1H23zM26,26 h3v1H26zM0 27h1v1H0zM6 27h1v1H6zM10 27h1v1H10zM12 27h3v1H12zM16 27h1v1H16zM23 27h4v1H23zM28,27 h1v1H28zM0 28h7v1H0zM8 28h5v1H8zM15 28h3v1H15zM20 28h1v1H20zM22 28h3v1H22z'%3E%3C/path%3E%3C/svg%3E" />
                  <br />
                  <Image
                    src="https://belk.scene7.com/is/image/Belk/footer-app-ios-badge-2x?&$DWP_ARTWORK$"
                    w="150px"
                  />
                  <br />
                  <Image
                    src="https://belk.scene7.com/is/image/Belk/footer-app-android-badge-2x?&$DWP_ARTWORK$"
                    w="150px"
                  />
                </Box>
              </Flex>
              <Flex style={{ paddingLeft: "200px" }}>
                <Heading fontSize="xl" mr="30px">
                  Stay Connected
                </Heading>
                <FaFacebookSquare
                  fontSize="50px"
                  style={{ marginRight: "30px" }}
                  onMouseOver={({ target }) => (target.style.color = "blue")}
                  onMouseOut={({ target }) => (target.style.color = "#272F35")}
                />

                <FaTwitterSquare
                  fontSize="50px"
                  style={{ marginRight: "30px" }}
                  onMouseOver={({ target }) => (target.style.color = "blue")}
                  onMouseOut={({ target }) => (target.style.color = "#272F35")}
                />

                <FaPinterestSquare
                  fontSize="50px"
                  style={{ marginRight: "30px" }}
                  onMouseOver={({ target }) => (target.style.color = "blue")}
                  onMouseOut={({ target }) => (target.style.color = "#272F35")}
                />

                <FaInstagram
                  fontSize="50px"
                  style={{ marginRight: "30px" }}
                  onMouseOver={({ target }) => (target.style.color = "blue")}
                  onMouseOut={({ target }) => (target.style.color = "#272F35")}
                />
              </Flex>
            </Box>
            <hr style={{ border: "1px solid black" }} />
            <Box>
              <Flex justifyContent="space-evenly">
                <Link>Terms of Use</Link>
                <Link>Privacy Policy</Link>
                <Link>State-Specific Privacy Notices</Link>
                <Link>Enable Accessibility</Link>
                <Link>Accessibility Statement</Link>
                <Link>Do Not Share my Personal Information</Link>
              </Flex>
            </Box>
            <Center>
              <Text color="gray.600">
                © 2022 Belk, Inc. & Belk eCommerce LLC. All Rights Reserved.
              </Text>
            </Center>
    </>
  );
};

export default Footer;
