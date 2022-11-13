import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css";
import Search from "./Search";
function Menu() {
  // const [isCheckout, setIsCheckout] = useState(true);
  // const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(0);
  // const [full,setFull]=useState(false);
  // const [selected,setSelected]=useState(selected)
  // const [link,setLink]=useState(`/${active()}/${active()}wear`)
  
  // const getLink=()=>{
  //   return link
  // }
  // console.log(link)
  let id;
  const dropdown = (number) => {
    id = setTimeout(() => {
      setShow(number);
    }, 500);
  };
  const hide = () => {
    clearTimeout(id);
    setShow(0);
  };
// console.log(selected)
//   if(selected=="mens"){
//     setLink("/womens/womenswear")
//   }else if(selected=="womens"){
//     setLink("/womens/womenswear")
//   }else{
//     setLink("/kids/kideswear")
//   }
  return (
    <div className={style.container}>
      <div className={style.menuBar}>
        <div className={style.Menu}>
          
          <div onMouseEnter={() => dropdown(2)} onMouseLeave={hide} onClick={hide} >
            <Link to={"/womens/womenswear"}> Gifts</Link>
            {show === 2 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>GIFTS BY STYLE</h1>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Classic
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Cult
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Minimalist
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Streetwear
                      </Link>
                    </div>
                    <div>
                      <h1>GIFTS BY CATEGORY</h1>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        The season's most wanted
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Gifts that do good
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Small leather goods
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        99 hype sneakers
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sweats, knits & tees
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        The little things
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Watches & jewellery
                      </Link>
                    </div>
                    <div>
                      <h1>GIFTS BY DESIGNER</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Alexander McQueen
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Balenciaga
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Burberry
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Gucci
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Off-White
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Palm Angels
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Ferragamo
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Saint Laurent
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-MW-GIFTING-WATCHES_JEWELLERY.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-MW-GIFTING-WATCHES_JEWELLERY.jpg"
                    />
                    <p>Soptlight On</p>
                    <h1>WATCHES & JEWELLERY</h1>
                    <Link to="/womens" onClick={() => setShow(0)}>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(3)} onMouseLeave={hide} onClick={hide}>
            <Link to={"/womens/womenswear"}> New In</Link>
            {show === 3 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>WHAT'S NEW</h1>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New in today
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New in for you
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New: classic
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New: expressionist
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New: glamour
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New: hype streetwear
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New: minimalism
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New: modern femininity
                      </Link>
                    </div>
                    <div>
                      <h1>TRENDING NOW</h1>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        The party edit
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New-season skiwear
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        The puffer bag
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        70 oversized coats
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        The Browns Fashion edit
                      </Link>
                    </div>
                    <div>
                      <h1>DISCOVER</h1>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Most-wanted pieces
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        The bestsellers
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Conscious
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        The party edit
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Exclusives & collabs
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Your weekly edit
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/09-11-WW-NEW_IN-PARTY_EDIT.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/09-11-WW-NEW_IN-PARTY_EDIT.jpg"
                    />
                    <p>Spotlight On</p>
                    <h1>THE PARTY EDIT</h1>
                    <Link to="/womens" onClick={() => setShow(0)}>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(4)} onMouseLeave={hide} onClick={hide}>
            <Link to={"/womens/womenswear"}> Brnads</Link>
            {show === 4 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>FEATURED BRANDS</h1>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Fashion icons
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Alexander McQueen
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Balenciaga
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Balmain
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Burberry
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Dolce & Gabbana
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Gucci
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Off-White
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Palm Angels
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Prada
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Saint Laurent
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Valentino Garavani
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Versace
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        22% off brands
                      </Link>
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
                    <Link to="/womens" onClick={() => setShow(0)}>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(5)} onMouseLeave={hide} onClick={hide}>
            <Link to={"/womens/womenswear"}> Clothing</Link>
            {show === 5 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>CLOTHING</h1>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New in clothing
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        All clothing
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Activewear
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Beachwear
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Coats
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Denim
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Dresses
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Jackets
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Knitwear
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Lingerie
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Skirts
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Suits & Tailoring
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Tops
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Pants
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale clothing
                      </Link>
                    </div>
                    <div>
                      <h1>FEATURED BRANDS</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Balmain
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Dolce & Gabbana
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Gucci
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Moncler
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Off-White
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Prada
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Saint Laurent
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        There Was One
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Versace
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Valentino
                      </Link>
                    </div>
                    <div>
                      <h1>DISCOVER</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Bridal
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Conscious activewear
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Conscious clothing
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Matching sets
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Modest dressing
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Partywear
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Wardrobe essentials
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-CLOTHING_COATS.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-CLOTHING_COATS.jpg"
                    />
                    <p>Soptlight On</p>
                    <h1>COATS</h1>
                    <Link to="/womens" onClick={() => setShow(0)}>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(6)} onMouseLeave={hide} onClick={hide}>
            <Link to={"/womens/womenswear"}> Shoes</Link>
            {show === 6 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>SHOES</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New in shoes
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Exclusives
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        All shoes
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Boots
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Espadrilles
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Slides & flip flops
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Loafers
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Mules
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Pumps
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sandals
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sneakers
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Conscious shoes
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale shoes
                      </Link>
                    </div>
                    <div>
                      <h1> FEATURED BRANDS</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Amina Muaddi
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Aquazzura
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Gianvito Rossi
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Golden Goose
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Gucci
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Jimmy Choo
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Mach & Mach
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Manolo Blahnik
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Prada
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Valentino Garavani
                      </Link>
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
                    <Link to="/womens" onClick={() => setShow(0)}>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(7)} onMouseLeave={hide} onClick={hide}>
            <Link to={"/womens/womenswear"}> Bags</Link>

            {show === 7 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>BAGS</h1>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New in clothing
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        All clothing
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Activewear
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Beachwear
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Coats
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Denim
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Dresses
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Jackets
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Knitwear
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Lingerie
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Skirts
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Suits & Tailoring
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Tops
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Pants
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale clothing
                      </Link>
                    </div>
                    <div>
                      <h1>FEATURED BRANDS</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Balmain
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Dolce & Gabbana
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Gucci
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Moncler
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Off-White
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Prada
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Saint Laurent
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        There Was One
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Versace
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Valentino
                      </Link>
                    </div>
                    <div>
                      <h1>DISCOVER</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Bridal
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Conscious activewear
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Conscious clothing
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Matching sets
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Modest dressing
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Partywear
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Wardrobe essentials
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-BAGS_CLUTCH_BAGS.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-BAGS_CLUTCH_BAGS.jpg"
                    />
                    <p>Spotlight On</p>
                    <h1>22% Off</h1>
                    <Link to="/womens" onClick={() => setShow(0)}>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(8)} onMouseLeave={hide} onClick={hide}>
            <Link to={"/womens/womenswear"}> Accessories</Link>
            {show === 8 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>ACCESSORIES</h1>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        All accessories
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Belts
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Gifts
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Glasses & frames
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Gloves
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Headbands & hair clips
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Hats & caps
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Scarves
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sunglasses
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Wallets & cardholders
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Conscious accessories
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale accessories
                      </Link>
                    </div>
                    <div>
                      <h1>HOMEWARE</h1>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        All homeware
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Candles & home fragrance
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Home accessories
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Furniture
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Soft furnishings
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Stationery & books
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Tableware
                      </Link>
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
                    <Link to="/womens" onClick={() => setShow(0)}>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(9)} onMouseLeave={hide} onClick={hide}>
            <Link to={"/womens/womenswear"}> Jewelry</Link>
            {show === 9 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>FASHION JEWELRY</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New in jewelry
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        All fashion jewelry
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Bracelets
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Earrings
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Necklaces
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Rings
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Watches
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Pre-owned jewelry
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Conscious jewelry
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale jewelry
                      </Link>
                    </div>
                    <div>
                      <h1>FINE JEWELRY</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        All fine jewelry
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Fine bracelets
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Fine earrings
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Fine necklaces
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Fine rings
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Fine watches
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        All demi-fine jewelry
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Pre-owned fine jewelry
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Pre-owned fine watches
                      </Link>
                    </div>
                    <div>
                      <h1>DISCOVER</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        The fine jewelry edit
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Birthstones
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Engagement rings
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-JEWELLERY-YOKO_LONDON.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-JEWELLERY-YOKO_LONDON.jpg"
                    />
                    <p>Spotlight On</p>
                    <h1>22% Off</h1>
                    <Link to="/womens" onClick={() => setShow(0)}>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(10)} onMouseLeave={hide} onClick={hide}>
            <Link to={"/womens/womenswear"}> Pre-Owned</Link>
            {show === 10 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1> PRE-OWNED BRANDS</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Cartier
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Chanel
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Christian Dior
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Fendi
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Goyard
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Gucci
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Hermès
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Jean Paul Gaultier
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Louis Vuitton
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Rolex
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        View all pre-owned brands
                      </Link>
                    </div>
                    <div>
                      <h1> PRE-OWNED</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        New in pre-owned
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        All pre-owned
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Accessories
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Bags
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Coats
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Dresses
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Fine watches
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Fine jewelry
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Jackets
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Jewelry
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Shoes
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Suits
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Watches
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Lifestyle pieces
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Pre-owned sale
                      </Link>
                    </div>
                    <div>
                      {" "}
                      <h1>ICONIC BAGS</h1>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        All iconic bags
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Chanel 2.55
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Dior Saddle
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Lady Dior
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Hermès Birkin
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Hermès Kelly
                      </Link>
                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Louis Vuitton monogram
                      </Link>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-PRE_OWNED-LOUIS_VUITTON.jpg"
                      alt="https://cdn-static.farfetch-contents.com/content/images/Home_CMS/Cms/02-11-22/02-11-WW-PRE_OWNED-LOUIS_VUITTON.jpg"
                    />
                    <p>Spotlight On</p>
                    <h1>22% Off</h1>
                    <Link to="/womens" onClick={() => setShow(0)}>
                      <u>Shop Now</u>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div onMouseEnter={() => dropdown(11)} onMouseLeave={hide} onClick={hide}>
            <Link to={"/womens/womenswear"}> Sale</Link>

            {show === 11 ? (
              <div className={style.subMenu}>
                <div className={style.subMenuInside}>
                  <div>
                    <div>
                      <h1>All sale</h1>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale clothing
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale dresses
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale tops
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale shoes
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale sandals
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale trainers
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale bags
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale shoulder bags
                      </Link>

                      <Link to="/womens" onClick={() => setShow(0)}>
                        {" "}
                        Sale accessories
                      </Link>
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
                    <Link to="/womens" onClick={() => setShow(0)}>
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
