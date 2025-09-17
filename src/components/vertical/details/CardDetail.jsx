import React, { use } from "react";
import "./CardDetail.css";
import { data } from "./data.js";
import { Link, useParams } from "react-router-dom";
import { Image } from "antd";
import "antd/dist/reset.css";

function CardDetail() {
  const { id } = useParams();
  let item = data.find((d) => d.id === id);

  return (
    <div className="cardDetail">
      <div className="item_nav">
        <h1 className="item_title">{item.caption}</h1>
        <div className="item_info">
          <span>{item.mainData.size}</span>
          <span>{item.mainData.diameter}</span>
          <span>{item.mainData.height}</span>
          <span>{item.mainData.massa}</span>
          <span>{item.mainData.rulon}</span>
        </div>
        <p className="item_desc">{item.desc1}</p>
        <ul>
          {item.ul.map((listItem, index) => (
            <li>{listItem}</li>
          ))}
        </ul>
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

      <div className="stages">
        <div className="stages-container">
          <h2 style={{ textTransform: "uppercase" }} className="stages-title">
            {item.part2_caption}
          </h2>

          <div className="stages-grid">
            {item.part2_infos.map((info, index) => (
              <div className="stage-item">
                <h3 className="stage-heading">{info.title}</h3>
                <p className="stage-text">{info.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="part3">
        <h1 className="item_title">{item.part3_caption}</h1>
        {item.part3_text.map((text, index) => (
          <p key={index} className="item_desc">
            {text}
          </p>
        ))}
      </div>

      <div className="part4">
        <h1 className="item_title">{item.part4_caption}</h1>
        <div className="part4Box">
          <Image.PreviewGroup>
            <Image
              className="item_image cropped-image"
              src={item.part4_img}
              alt={`Image`}
            />
            {item.part4_img2 ? (
              <Image
                className="item_image cropped-image"
                src={item.part4_img2}
                alt={`Image`}
              />
            ) : (
              ""
            )}
          </Image.PreviewGroup>
          <div className="part4Desc">
            <p>{item.part4_desc1.title}</p>
            <ul>
              {item.part4_desc1.ul.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
            <p>{item.part4_desc1.title2}</p>
          </div>
        </div>
      </div>

      <div className="part5">
        <h1 className="item_title">{item.part5_caption}</h1>
        <table border={1}>
          {item.tableData.map((table, index) => (
            <>
              <thead>
                <tr>
                  {table.thead.map((thead, index) => (
                    <th key={index}>{thead}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.tbody.map((tbody, index) => (
                  <tr key={index}>
                    {tbody.map((td, index) => (
                      <td key={index}>{td}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </>
          ))}
        </table>
        <i>{item.italicText}</i>
        {item.extraInfo ? <p>{item.extraInfo}</p> : ""}
      </div>

      <div className="part6">
        <h1 className="item_title">{item.part6_caption}</h1>
        <div className="part6_cards">
          {item.part6_data.map((card, index) => (
            <div className="part4Box">
              <Image.PreviewGroup>
                <Image
                  className="item_image cropped-image"
                  src={card.img}
                  alt={`Image`}
                />
                {card.img2 ? (
                  <Image
                    className="item_image cropped-image"
                    src={card.img2}
                    alt={`Image`}
                  />
                ) : (
                  ""
                )}
              </Image.PreviewGroup>
              <div className="part4Desc">
                <p>{card.title}</p>
                <ul>
                  {card.texts.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <b>{item.part6_text}</b>
        <p className="item_desc">{item.part6_desc}</p>
        <p className="item_desc">{item.part6_desc2}</p>
        <ul>
          {item.part6_ul.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </ul>
        <p className="item_desc">{item.part6_desc3}</p>
        <p className="item_desc">{item.part6_desc4}</p>
        <p className="item_desc">{item.part6_desc5}</p>
        <b>{item.part6_text2}</b>
        <p className="item_desc">{item.part6_desc6}</p>

        <div className="othersLinks">
          <p className="othersLinks_title">{item.allLinks.text}</p>
          {item.allLinks.links.map((link, index) => (
            <Link
              key={index}
              className={link.to?.replace("/", "") === id ? "activeLink" : ""}
              to={link.to}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>

      <div className="item_8">
        <h1 className="item_title">{item.part7_caption}</h1>
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
