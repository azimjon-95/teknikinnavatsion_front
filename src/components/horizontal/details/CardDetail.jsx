import React, { useEffect, useRef } from "react";
import "./CardDetail.css";
import { dataRu, dataEn, dataUz } from "./data.js";
import { Link, useParams } from "react-router-dom";
import { Image } from "antd";
import "antd/dist/reset.css";

function CardDetail({ lang }) {
  const { id } = useParams();

  const data = lang === "en" ? dataEn : lang === "uz" ? dataUz : dataRu;
  let item = data.find((d) => d.id === id);
  const topRef = useRef(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [id]);

  return (
    <div className="cardDetail" ref={topRef}>
      <div className="item_nav">
        <h1 className="item_title">{item.caption}</h1>
        <p className="item_desc">{item.desc1}</p>
        <p className="item_desc">{item.desc2}</p>
        <p className="item_desc">{item.desc3}</p>
      </div>
      <div className="item_images1">
        <Image.PreviewGroup>
          {item.images.map((img, index) => (
            <Image
              className="item_image"
              key={index}
              src={img}
              alt={`Image ${index + 1}`}
            />
          ))}
        </Image.PreviewGroup>
      </div>

      <div className="item_part2">
        <h1 className="item_title">{item.caption2}</h1>
        <p className="item_desc">{item.zakazText}</p>
        <p className="item_desc">{item.zakazText2}</p>
        <div className="item_part2_images">
          <Image.PreviewGroup>
            {item.zakazImg.map((img, index) => (
              <Image
                className="item_image cropped-image"
                key={index}
                src={img}
                alt={`Image ${index + 1}`}
                style={{
                  maxWidth: "220px", // Thumbnail size
                  height: "90%",
                  cursor: "pointer",
                }}
              />
            ))}
          </Image.PreviewGroup>
        </div>
        <p className="item_desc">{item.zakazDesc}</p>
        <ul>
          {item.zakazList.map((listItem, index) =>
            index === 0 ? (
              <li key={index}>
                <Link to={listItem}>{listItem}</Link>
              </li>
            ) : index === 2 ? (
              <li key={index}>
                {listItem.split(" ").map((part, i) =>
                  part === "teknikinnovatsion.info@gmail.com" ? (
                    <a
                      key={i}
                      href="mailto:teknikinnovatsion.info@gmail.com?subject=Buyurtma%20haqida&body=Assalomu%20alaykum,%0D%0AMenga%20ko'proq%20ma'lumot%20kerak."
                    >
                      {part}
                    </a>
                  ) : (
                    <span key={i}>{part} </span>
                  )
                )}
              </li>
            ) : (
              <li key={index}>{listItem}</li>
            )
          )}
        </ul>
        <p>{item.zakazDesc2}</p>
      </div>

      <div className="item_part3">
        <h1 className="item_title">{item.caption3}</h1>
        <h2 className="item_subtitle">{item.subCaption1}</h2>
        <div className="item_part3_images">
          <Image.PreviewGroup>
            <Image
              className="item_image cropped-image"
              src={item.part3Img1.img1}
              alt={`Image`}
              style={{
                maxWidth: "300px", // Thumbnail size
                height: "95%",
                cursor: "pointer",
              }}
            />
            <Image
              className="item_image cropped-image"
              src={item.part3Img1.img2}
              alt={`Image`}
              style={{
                maxWidth: "300px", // Thumbnail size
                height: "95%",
                cursor: "pointer",
              }}
            />
          </Image.PreviewGroup>
        </div>
        <h2 className="item_subtitle">{item.subCaption2}</h2>
        <div className="item_part3_images">
          <Image.PreviewGroup>
            <Image
              className="item_image cropped-image"
              src={item.part3Img2.img1}
              alt={`Image`}
              style={{
                maxWidth: "300px", // Thumbnail size
                height: "95%",
                cursor: "pointer",
              }}
            />
            <Image
              className="item_image cropped-image"
              src={item.part3Img2.img2}
              alt={`Image`}
              style={{
                maxWidth: "300px", // Thumbnail size
                height: "95%",
                cursor: "pointer",
              }}
            />
          </Image.PreviewGroup>
        </div>
        {item?.part3Desc ? <p className="item_desc">{item.part3Desc}</p> : ""}
      </div>

      <div className="item_part4">
        <h1 className="item_title">{item.caption4}</h1>
        <p className="item_desc">{item.part4desc}</p>
        <h2 className="item_subtitle">{item.part4SubCaption1}</h2>
        <ul>
          {item.part4List1.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </ul>

        <h2 className="item_subtitle">{item.part4SubCaption2}</h2>
        <ul>
          {item.part4List2.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </ul>
        <p className="item_desc">{item.part4desc2}</p>

        <h2 className="item_subtitle">{item.caption5}</h2>
        <ul>
          {item.part5List.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </ul>

        <h1 className="item_subtitle">{item.caption6}</h1>
        <p className="item_desc">{item.part5SubCaption1}</p>
        <p className="item_desc">{item.part5SubCaption2}</p>
      </div>

      <div className="item_table">
        <h1 className="item_title">{item.caption7}</h1>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                {item.table.thead.tr1.map((item, index) => (
                  <th colSpan={index !== 0 ? 2 : 1} key={index}>
                    {item}
                  </th>
                ))}
              </tr>
              <tr>
                {item.table.thead.tr2.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {item.table.tbody.map((item, index) => (
                <tr key={index}>
                  {item.map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="othersLinks">
          <p className="othersLinks_title">{item.allLinks.text}</p>
          {item.allLinks.links.map((link, index) => (
            <Link
              key={index}
              className={link.to?.replace("/", "") === id ? "activeLink" : ""}
              to={"/" + lang + "/details" + link.to}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      <div className="item_8">
        <h1 className="item_title">{item.caption8}</h1>
      </div>

      <div
        style={{
          background: `linear-gradient(#00000057, #00000057), url(${item.part8Img})`,
        }}
        className="item_bottom_part"
      >
        <h1 className="item_title">{item.part8desc}</h1>
      </div>
    </div>
  );
}

export default CardDetail;
