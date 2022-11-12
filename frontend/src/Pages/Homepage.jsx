import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import style from "./Css/Home.module.css";
import { TbHanger, TbQuestionMark, TbMessageDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import Form from "../Components/SingleProduct/Form";

const Homepage = () => {
  return (
    <div className={style.homepage}>
      <h1>Choose a department</h1>
      <div className={style.images}>
        <div className={style.container}>
          <Link to="/womens">
            <img
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1358584/data/35f063c3600dc83729be3af4597b6349/16x9_three-columns/480/data.png"
              alt="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1358584/data/35f063c3600dc83729be3af4597b6349/16x9_three-columns/480/data.png"
            />
            <div className={style.center}>SHOP WOMEN</div>
          </Link>
        </div>
        <div className={style.container}>
          <Link to="/mens">
            <img
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1358582/data/db104369ad2687b797128ca8a9fa8fbf/16x9_three-columns/480/data.png"
              alt="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/1358582/data/db104369ad2687b797128ca8a9fa8fbf/16x9_three-columns/480/data.png"
            />
            <div className={style.center}>SHOP MEN</div>
          </Link>
        </div>
        <div className={style.container}>
          <Link to="kids">
            <img
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3485568/data/56296828f1ebd020fd4f3eb3fdd3bff7/16x9_three-columns/480/data.png"
              alt="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3485568/data/56296828f1ebd020fd4f3eb3fdd3bff7/16x9_three-columns/480/data.png"
            />
            <div className={style.center}>KIDSWEAR</div>
          </Link>
        </div>
      </div>

      <div className={style.category}>
        <div>
          <h1>Featured brands</h1>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    MEN
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.options} pb={4}>
                <p>Comme Des Garçons Play</p>
                <p>
                  Brun <p></p>
                  ello Cucinelli
                </p>
                <p>TOM FORD Eyewear</p>
                <p>Thom Browne</p>
                <p>visvim</p>
                <p>Buscemi</p>
                <p>Raf Simons</p>
                <p>Axel Arigato</p>
                <p>Greg Lauren</p>
                <p>Homme Plissé Issey Miyake</p>
                <p>Casablanca</p>
                <p>Pringle of Scotland</p>
                <p>Mastermind Japan</p>
                <p>MCM</p>
                <p>Maison Kitsuné</p>
                <p>Grenson</p>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    WOMEN
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.options} pb={4}>
                <p>Paris Texas</p>
                <p>Canada Goose</p>
                <p>Amina Muaddi</p>
                <p>Self-Portrait</p>
                <p>Amen</p>
                <p>MCM</p>
                <p>Stella McCartney</p>
                <p>Issey Miyake</p>
                <p>Jacquemus</p>
                <p>Comme Des Garçons</p>
                <p>Aquazzura</p>
                <p>Herno</p>
                <p>Gianvito Rossi</p>
                <p>LoveShackFancy</p>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    KIDS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.options} pb={4}>
                <p>Paris Texas</p>
                <p>Canada Goose</p>
                <p>Amina Muaddi</p>
                <p>Self-Portrait</p>
                <p>Amen</p>
                <p>MCM</p>
                <p>Stella McCartney</p>
                <p>Issey Miyake</p>
                <p>Jacquemus</p>
                <p>Comme Des Garçons</p>
                <p>Aquazzura</p>
                <p>Herno</p>
                <p>Gianvito Rossi</p>
                <p>LoveShackFancy</p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <h1>Trending now</h1>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    MEN
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.options} pb={4}>
                <p>Jordan Low-Tops</p>
                <p>Off-White T-Shirts</p>
                <p>Common Projects Shoes</p>
                <p>Fendi Belts</p>
                <p>Rick Owens Shoes</p>
                <p>Brioni Glasses & Frames</p>
                <p>Versace Shirts</p>
                <p>Lanvin Sneakers</p>
                <p>Represent Clothing</p>
                <p>Maison Margiela Shoes</p>
                <p>MCM Backpacks</p>
                <p>Sebago Shoes</p>
                <p>Supreme Hoodies</p>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    WOMEN
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.options} pb={4}>
                <p>Jordan Low-Tops</p>
                <p>Off-White T-Shirts</p>
                <p>Common Projects Shoes</p>
                <p>Fendi Belts</p>
                <p>Rick Owens Shoes</p>
                <p>Brioni Glasses & Frames</p>
                <p>Versace Shirts</p>
                <p>Lanvin Sneakers</p>
                <p>Represent Clothing</p>
                <p>Maison Margiela Shoes</p>
                <p>MCM Backpacks</p>
                <p>Sebago Shoes</p>
                <p>Supreme Hoodies</p>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    KIDS
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className={style.options} pb={4}>
                <p>Jordan Low-Tops</p>
                <p>Off-White T-Shirts</p>
                <p>Common Projects Shoes</p>
                <p>Fendi Belts</p>
                <p>Rick Owens Shoes</p>
                <p>Brioni Glasses & Frames</p>
                <p>Versace Shirts</p>
                <p>Lanvin Sneakers</p>
                <p>Represent Clothing</p>
                <p>Maison Margiela Shoes</p>
                <p>MCM Backpacks</p>
                <p>Sebago Shoes</p>
                <p>Supreme Hoodies</p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className={style.faqs}>
        <div>
          <TbHanger size={"1.5em"} />
          <h1>HOW TO SHOP</h1>
          <p>Your guide to shopping and placing orders</p>
        </div>
        <div>
          <TbQuestionMark size={"1.5em"} />
          <h1>FAQS</h1>
          <p>Your questions answered</p>
        </div>
        <div>
          <TbMessageDots size={"1.5em"} />
          <h1>NEED HELP?</h1>
          <p>Contact our global Customer Service team</p>
        </div>
      </div>
      <Form/>
    </div>
  );
};

export default Homepage;
