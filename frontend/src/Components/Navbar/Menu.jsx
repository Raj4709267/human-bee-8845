import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import Search from "./Search";
function Menu() {
  // const [isCheckout, setIsCheckout] = useState(true);
  // const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(0);
  // const [full,setFull]=useState(false);

  const dropdown = (a) => {
    setShow(a);
  };
  const hide = () => {
    setShow(0);
  };
  return (
    <div className={style.container}>
      <div className={style.menuBar}>
        <div className={style.Menu}>
          <div onMouseEnter={() => dropdown(1)} onMouseLeave={hide}>
            <Link to={"/"}> 22% Off</Link>
            {show === 1 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>22% OFF</h1>
                      <Link>All 22% off</Link>

                      <Link>22% off clothing</Link>

                      <Link>22% off sweaters</Link>

                      <Link>22% off jackets</Link>

                      <Link>22% off T-shirts</Link>

                      <Link>22% off shoes</Link>

                      <Link>22% off trainers</Link>

                      <Link>22% off bags</Link>

                      <Link>22% off accessories</Link>
                    </div>
                    <div>
                      <h1>22% OFF DESIGNERS</h1>
                      <Link>Dsquared2</Link>

                      <Link>Common Projects</Link>

                      <Link>Emporio Armani</Link>

                      <Link>JW Anderson</Link>

                      <Link>Kenzo</Link>

                      <Link>Lanvin</Link>

                      <Link>Off-White</Link>

                      <Link>Palm Angels</Link>

                      <Link>Philipp Plein</Link>

                      <Link>Polo Ralph Lauren</Link>
                    </div>
                    <div>{/* <h1>heading</h1> */}</div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/07-11-22%20Pre-sale/WW-PROMO-MEGANAV.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/07-11-22%20Pre-sale/WW-PROMO-MEGANAV.jpg"
                    />
                    <p>Womens</p>
                    <h1>22% Off</h1>
                    <Link>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(2)} onMouseLeave={hide}>
            <Link to={"/"}> Gifts</Link>
            {show === 2 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>GIFTS BY STYLE</h1>

                      <Link>Classic</Link>

                      <Link>Cult</Link>

                      <Link>Minimalist</Link>

                      <Link>Streetwear</Link>
                    </div>
                    <div>
                      <h1>GIFTS BY CATEGORY</h1>

                      <Link>The season's most wanted</Link>

                      <Link>Gifts that do good</Link>

                      <Link>Small leather goods</Link>

                      <Link>99 hype sneakers</Link>

                      <Link>Sweats, knits & tees</Link>

                      <Link>The little things</Link>

                      <Link>Watches & jewellery</Link>
                    </div>
                    <div>
                      <h1>GIFTS BY DESIGNER</h1>
                      <Link>Alexander McQueen</Link>
                      <Link>Balenciaga</Link>
                      <Link>Burberry</Link>
                      <Link>Gucci</Link>
                      <Link>Off-White</Link>
                      <Link>Palm Angels</Link>
                      <Link>Ferragamo</Link>
                      <Link>Saint Laurent</Link>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-MW-GIFTING-WATCHES_JEWELLERY.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-MW-GIFTING-WATCHES_JEWELLERY.jpg"
                    />
                    <p>Soptlight On</p>
                    <h1>WATCHES & JEWELLERY</h1>
                    <Link>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(3)} onMouseLeave={hide}>
            <Link to={"/"}> New In</Link>
            {show === 3 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>WHAT'S NEW</h1>

                      <Link>New in today</Link>

                      <Link>New in for you</Link>

                      <Link>New: classic</Link>

                      <Link>New: expressionist</Link>

                      <Link>New: glamour</Link>

                      <Link>New: hype streetwear</Link>

                      <Link>New: minimalism</Link>

                      <Link>New: modern femininity</Link>
                    </div>
                    <div>
                      <h1>TRENDING NOW</h1>

                      <Link>The party edit</Link>

                      <Link>New-season skiwear</Link>

                      <Link>The puffer bag</Link>

                      <Link>70 oversized coats</Link>

                      <Link>The Browns Fashion edit</Link>
                    </div>
                    <div>
                      <h1>DISCOVER</h1>

                      <Link>Most-wanted pieces</Link>

                      <Link>The bestsellers</Link>

                      <Link>Conscious</Link>

                      <Link>The party edit</Link>

                      <Link>Exclusives & collabs</Link>

                      <Link>Your weekly edit</Link>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/09-11-WW-NEW_IN-PARTY_EDIT.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/09-11-WW-NEW_IN-PARTY_EDIT.jpg"
                    />
                    <p>Spotlight On</p>
                    <h1>THE PARTY EDIT</h1>
                    <Link>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(4)} onMouseLeave={hide}>
            <Link to={"/"}> Brnads</Link>
            {show === 4 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>FEATURED BRANDS</h1>

                      <Link>Fashion icons</Link>

                      <Link>Alexander McQueen</Link>

                      <Link>Balenciaga</Link>

                      <Link>Balmain</Link>

                      <Link>Burberry</Link>

                      <Link>Dolce & Gabbana</Link>

                      <Link>Gucci</Link>

                      <Link>Off-White</Link>

                      <Link>Palm Angels</Link>

                      <Link>Prada</Link>

                      <Link>Saint Laurent</Link>

                      <Link>Valentino Garavani</Link>

                      <Link>Versace</Link>

                      <Link>22% off brands</Link>
                    </div>
                    <div></div>
                    <div>{/* <h1>heading</h1> */}</div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/09-11-WW-DESIGNER-GOLDEN_GOOSE.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/09-11-WW-DESIGNER-GOLDEN_GOOSE.jpg"
                    />
                    <p>Brand Foucs</p>
                    <h1> GOLDEN GOOSE</h1>
                    <Link>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(5)} onMouseLeave={hide}>
            <Link to={"/"}> Clothing</Link>
            {show === 5 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>CLOTHING</h1>

                      <Link>New in clothing</Link>
                      <Link>All clothing</Link>
                      <Link>Activewear</Link>
                      <Link>Beachwear</Link>
                      <Link>Coats</Link>
                      <Link>Denim</Link>
                      <Link>Dresses</Link>
                      <Link>Jackets</Link>
                      <Link>Knitwear</Link>
                      <Link>Lingerie</Link>
                      <Link>Skirts</Link>
                      <Link>Suits & Tailoring</Link>
                      <Link>Tops</Link>
                      <Link>Pants</Link>
                      <Link>Sale clothing</Link>
                    </div>
                    <div>
                      <h1>FEATURED BRANDS</h1>
                      <Link>Balmain</Link>
                      <Link>Dolce & Gabbana</Link>
                      <Link>Gucci</Link>
                      <Link>Moncler</Link>
                      <Link>Off-White</Link>
                      <Link>Prada</Link>
                      <Link>Saint Laurent</Link>
                      <Link>There Was One</Link>
                      <Link>Versace</Link>
                      <Link>Valentino</Link>
                    </div>
                    <div>
                      <h1>DISCOVER</h1>
                      <Link>Bridal</Link>
                      <Link>Conscious activewear</Link>
                      <Link>Conscious clothing</Link>
                      <Link>Matching sets</Link>
                      <Link>Modest dressing</Link>
                      <Link>Partywear</Link>
                      <Link>Wardrobe essentials</Link>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-CLOTHING_COATS.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-CLOTHING_COATS.jpg"
                    />
                    <p>Soptlight On</p>
                    <h1>COATS</h1>
                    <Link>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(6)} onMouseLeave={hide}>
            <Link to={"/"}> Shoes</Link>
            {show === 6 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>SHOES</h1>
                      <Link>New in shoes</Link>
                      <Link>Exclusives</Link>
                      <Link>All shoes</Link>
                      <Link>Boots</Link>
                      <Link>Espadrilles</Link>
                      <Link>Slides & flip flops</Link>
                      <Link>Loafers</Link>
                      <Link>Mules</Link>
                      <Link>Pumps</Link>
                      <Link>Sandals</Link>
                      <Link>Sneakers</Link>
                      <Link>Conscious shoes</Link>
                      <Link>Sale shoes</Link>
                    </div>
                    <div>
                      <h1> FEATURED BRANDS</h1>
                      <Link>Amina Muaddi</Link>
                      <Link>Aquazzura</Link>
                      <Link>Gianvito Rossi</Link>
                      <Link>Golden Goose</Link>
                      <Link>Gucci</Link>
                      <Link>Jimmy Choo</Link>
                      <Link>Mach & Mach</Link>
                      <Link>Manolo Blahnik</Link>
                      <Link>Prada</Link>
                      <Link>Valentino Garavani</Link>
                    </div>
                    <div>{/* <h1>heading</h1> */}</div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-SHOES_PUMPS.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-SHOES_PUMPS.jpg"
                    />
                    <p>Spotlight On</p>
                    <h1>22% Off</h1>
                    <Link>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(7)} onMouseLeave={hide}>
            <Link to={"/"}> Bags</Link>

            {show === 7 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>BAGS</h1>

                      <Link>New in clothing</Link>
                      <Link>All clothing</Link>
                      <Link>Activewear</Link>
                      <Link>Beachwear</Link>
                      <Link>Coats</Link>
                      <Link>Denim</Link>
                      <Link>Dresses</Link>
                      <Link>Jackets</Link>
                      <Link>Knitwear</Link>
                      <Link>Lingerie</Link>
                      <Link>Skirts</Link>
                      <Link>Suits & Tailoring</Link>
                      <Link>Tops</Link>
                      <Link>Pants</Link>
                      <Link>Sale clothing</Link>
                    </div>
                    <div>
                      <h1>FEATURED BRANDS</h1>
                      <Link>Balmain</Link>
                      <Link>Dolce & Gabbana</Link>
                      <Link>Gucci</Link>
                      <Link>Moncler</Link>
                      <Link>Off-White</Link>
                      <Link>Prada</Link>
                      <Link>Saint Laurent</Link>
                      <Link>There Was One</Link>
                      <Link>Versace</Link>
                      <Link>Valentino</Link>
                    </div>
                    <div>
                      <h1>DISCOVER</h1>
                      <Link>Bridal</Link>
                      <Link>Conscious activewear</Link>
                      <Link>Conscious clothing</Link>
                      <Link>Matching sets</Link>
                      <Link>Modest dressing</Link>
                      <Link>Partywear</Link>
                      <Link>Wardrobe essentials</Link>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-BAGS_CLUTCH_BAGS.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-BAGS_CLUTCH_BAGS.jpg"
                    />
                    <p>Spotlight On</p>
                    <h1>22% Off</h1>
                    <Link>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(8)} onMouseLeave={hide}>
            <Link to={"/"}> Accessories</Link>
            {show === 8 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>ACCESSORIES</h1>

                      <Link>All accessories</Link>

                      <Link>Belts</Link>

                      <Link>Gifts</Link>

                      <Link>Glasses & frames</Link>

                      <Link>Gloves</Link>

                      <Link>Headbands & hair clips</Link>

                      <Link>Hats & caps</Link>

                      <Link>Scarves</Link>

                      <Link>Sunglasses</Link>

                      <Link>Wallets & cardholders</Link>

                      <Link>Conscious accessories</Link>

                      <Link>Sale accessories</Link>
                    </div>
                    <div>
                      <h1>HOMEWARE</h1>

                      <Link>All homeware</Link>

                      <Link>Candles & home fragrance</Link>

                      <Link>Home accessories</Link>

                      <Link>Furniture</Link>

                      <Link>Soft furnishings</Link>

                      <Link>Stationery & books</Link>

                      <Link>Tableware</Link>
                    </div>
                    <div>{/* <h1>heading</h1> */}</div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-ACCESSORIES_HOMEWARE.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-ACCESSORIES_HOMEWARE.jpg"
                    />
                    <p>Spotlight On</p>
                    <h1>22% Off</h1>
                    <Link>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(9)} onMouseLeave={hide}>
            <Link to={"/"}> Jewelry</Link>
            {show === 9 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>FASHION JEWELRY</h1>
                      <Link>New in jewelry</Link>
                      <Link>All fashion jewelry</Link>
                      <Link>Bracelets</Link>
                      <Link>Earrings</Link>
                      <Link>Necklaces</Link>
                      <Link>Rings</Link>
                      <Link>Watches</Link>
                      <Link>Pre-owned jewelry</Link>
                      <Link>Conscious jewelry</Link>
                      <Link>Sale jewelry</Link>
                    </div>
                    <div>
                      <h1>FINE JEWELRY</h1>
                      <Link>All fine jewelry</Link>
                      <Link>Fine bracelets</Link>
                      <Link>Fine earrings</Link>
                      <Link>Fine necklaces</Link>
                      <Link>Fine rings</Link>
                      <Link>Fine watches</Link>
                      <Link>All demi-fine jewelry</Link>
                      <Link>Pre-owned fine jewelry</Link>
                      <Link>Pre-owned fine watches</Link>
                    </div>
                    <div>
                      <h1>DISCOVER</h1>
                      <Link>The fine jewelry edit</Link>
                      <Link>Birthstones</Link>
                      <Link>Engagement rings</Link>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-JEWELLERY-YOKO_LONDON.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-JEWELLERY-YOKO_LONDON.jpg"
                    />
                    <p>Spotlight On</p>
                    <h1>22% Off</h1>
                    <Link>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(10)} onMouseLeave={hide}>
            <Link to={"/"}> Pre-Owned</Link>
            {show === 10 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1> PRE-OWNED BRANDS</h1>
                      <Link>Cartier</Link>
                      <Link>Chanel</Link>
                      <Link>Christian Dior</Link>
                      <Link>Fendi</Link>
                      <Link>Goyard</Link>
                      <Link>Gucci</Link>
                      <Link>Hermès</Link>
                      <Link>Jean Paul Gaultier</Link>
                      <Link>Louis Vuitton</Link>
                      <Link>Rolex</Link>
                      <Link>View all pre-owned brands</Link>
                    </div>
                    <div>
                      <h1> PRE-OWNED</h1>
                      <Link>New in pre-owned</Link>
                      <Link>All pre-owned</Link>
                      <Link>Accessories</Link>
                      <Link>Bags</Link>
                      <Link>Coats</Link>
                      <Link>Dresses</Link>
                      <Link>Fine watches</Link>
                      <Link>Fine jewelry</Link>
                      <Link>Jackets</Link>
                      <Link>Jewelry</Link>
                      <Link>Shoes</Link>
                      <Link>Suits</Link>
                      <Link>Watches</Link>
                      <Link>Lifestyle pieces</Link>
                      <Link>Pre-owned sale</Link>
                    </div>
                    <div>
                      {" "}
                      <h1>ICONIC BAGS</h1>
                      <Link>All iconic bags</Link>
                      <Link>Chanel 2.55</Link>
                      <Link>Dior Saddle</Link>
                      <Link>Lady Dior</Link>
                      <Link>Hermès Birkin</Link>
                      <Link>Hermès Kelly</Link>
                      <Link>Louis Vuitton monogram</Link>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-PRE_OWNED-LOUIS_VUITTON.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-PRE_OWNED-LOUIS_VUITTON.jpg"
                    />
                    <p>Spotlight On</p>
                    <h1>22% Off</h1>
                    <Link>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(11)} onMouseLeave={hide}>
            <Link to={"/"}> Sale</Link>

            {show === 11 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>All sale</h1>

                      <Link>Sale clothing</Link>

                      <Link>Sale dresses</Link>

                      <Link>Sale tops</Link>

                      <Link>Sale shoes</Link>

                      <Link>Sale sandals</Link>

                      <Link>Sale trainers</Link>

                      <Link>Sale bags</Link>

                      <Link>Sale shoulder bags</Link>

                      <Link>Sale accessories</Link>
                    </div>
                    <div></div>
                    <div>{/* <h1>heading</h1> */}</div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/SS22%20Sale/MEGANAV_MAIN-SALE.png"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/SS22%20Sale/MEGANAV_MAIN-SALE.png"
                    />
                    <p>Womens</p>
                    <h1>SALE</h1>
                    <Link>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Menu;
