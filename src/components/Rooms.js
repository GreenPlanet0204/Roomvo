import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as CompareIcon } from "../assets/icon/compare.svg";
import { ReactComponent as ChangeIcon } from "../assets/icon/change.svg";
import { ReactComponent as ListIcon } from "../assets/icon/list.svg";
import { ReactComponent as SmallIcon } from "../assets/icon/smail_icons.svg";
import { ReactComponent as SearchIcon } from "../assets/icon/search.svg";
import { ReactComponent as FavoriteIcon } from "../assets/icon/favorite.svg";
import { ReactComponent as FavoriteIcon2 } from "../assets/icon/favorite_small.svg";
import { ReactComponent as ArrowUp } from "../assets/icon/up-arrow.svg";

const Rooms = ({ types, logo }) => {
  const [room, setRoom] = useState();
  const [position, setPosition] = useState({ x: 0, y: 0, scale: 1 });

  const [type, setType] = useState(0);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState(false);

  const [list, setList] = useState(types.styles);
  const [filterList, setFilter] = useState(list);
  const [select, setSelect] = useState(filterList[0]);
  const StyleRef = useRef();
  const ImageRef = useRef();
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("room"));
    setRoom(item);
  }, []);
  useEffect(() => {
    if (favorite) {
      const fav = list.filter((item) => item.favorite === true);
      setFilter(fav);
    } else {
      setFilter(list);
    }
  }, [favorite, list]);

  const onChangeFavorite = (id) => {
    console.log("item", id);
    const list2 = list.map(function (item) {
      if (item.id !== id) {
        return item;
      } else {
        const item2 = {
          ...item,
          favorite: !item.favorite,
        };
        return item2;
      }
    });
    setList(list2);
  };

  const onChangeSelection = (id, index) => {
    const list2 = list.map(function (item) {
      if (item.id !== id) {
        return item;
      } else {
        const item2 = {
          ...item,
          selection: index,
        };
        return item2;
      }
    });
    setList(list2);
  };

  const handleScroll = (e) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const ScrollToTop = () => {
    StyleRef.current.scrollTop = 0;
  };

  const onChange = (item) => {
    setSelect(item);
  };

  const calc = () => {
    const num = 3 * parseInt((select.id - 1) / 3) + 3;
    return num;
  };

  const getKey = (type, index) => {
    const key = `${type}-${index}`;
    return key;
  };

  const onScroll = (e) => {
    const delta = e.deltaY * -0.002;
    console.log(delta, e.clientX);

    const newScale = position.scale + delta;
    const ratio = 1 - newScale / position.scale;
    if (newScale < 1) return;
    setPosition({
      scale: newScale,
      x: position.x + (e.clientX - position.x - 350) * ratio,
      y: position.y + (e.clientY - position.y - 49) * ratio,
    });
  };

  return (
    <div className="rooms-container">
      <div className="header">
        <div className="btn">
          <CompareIcon width={24} height={24} />
          <div className="text">Compare</div>
        </div>
        <div className="btn">
          <ChangeIcon />
          <div className="text">Change Room</div>
        </div>
      </div>
      <div className="main">
        <div className="left-panel">
          <div className="subtitle">
            <div className="text">{types.name}</div>
            <div className="types">
              <div
                className={type === 0 ? "btn active" : "btn"}
                onClick={() => setType(0)}
              >
                <ListIcon />
              </div>
              <div
                className={type === 1 ? "btn active" : "btn"}
                onClick={() => setType(1)}
              >
                <SmallIcon />
              </div>
            </div>
          </div>
          <div className="search">
            <SearchIcon />
            <input
              type="text"
              value={search}
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="filter">
            <div className="filter btn" onClick={() => setFavorite(false)}>
              Filters
            </div>
            <div className="favorite btn" onClick={() => setFavorite(true)}>
              <FavoriteIcon />
              <div className="num">0</div>
            </div>
          </div>
          <div
            className={type === 0 ? "styles" : "styles small"}
            onScroll={handleScroll}
            ref={StyleRef}
          >
            <div className="scroll">
              {filterList.map((item) => (
                <>
                  <div
                    key={getKey("item", item.id)}
                    className={item.id === select.id ? "card active" : "card"}
                    onClick={() => onChange(item)}
                  >
                    <div className="details">
                      <div className="image">
                        <img src={item.image} alt="Rug" />
                        <div
                          className={item.favorite ? "btn active" : "btn"}
                          onClick={() => onChangeFavorite(item.id)}
                        >
                          <FavoriteIcon2 />
                        </div>
                      </div>
                      <div className="detail">
                        <div className="top">
                          <div className="text">{item.company}</div>
                          <div className="name">{item.name}</div>
                        </div>
                        <div className="text">
                          {item.length > 1
                            ? `${item.length} sizes`
                            : `Size: ${item.size[0]}`}
                        </div>
                      </div>
                    </div>
                    {item.length > 1 && (
                      <div className="size">
                        <div className="detail" key="size">
                          Size: <strong>{select.size[select.selection]}</strong>
                        </div>
                        <div className="size-type">
                          {item.size.map((size, index) => (
                            <div
                              key={getKey("size", index)}
                              className={
                                index === item.selection ? "btn active" : "btn"
                              }
                              onClick={() => onChangeSelection(item.id, index)}
                            >
                              {size}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {calc() === item.id && (
                    <div className="card detail">
                      <div className="details">
                        <div className="detail">
                          <div className="top">
                            <div className="text">{select.company}</div>
                            <div className="name">{select.name}</div>
                          </div>
                        </div>
                      </div>
                      <div className="size">
                        <div className="detail">
                          Size: <strong>{select.size[select.selection]}</strong>
                        </div>
                        {select.length > 1 && (
                          <div className="size-type">
                            {select.size.map((size, index) => (
                              <div
                                key={getKey("small", index)}
                                className={
                                  index === select.selection
                                    ? "btn active"
                                    : "btn"
                                }
                                onClick={() =>
                                  onChangeSelection(select.id, index)
                                }
                              >
                                {size}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </>
              ))}
              {scrollTop !== 0 && (
                <div className="btn back" onClick={ScrollToTop}>
                  <ArrowUp />
                  Back To Top
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="main-panel">
          <div className="image" onWheelCapture={onScroll} ref={ImageRef}>
            <img
              src={room?.image}
              alt="room"
              className="room"
              style={{
                transformOrigin: "0 0",
                transform: `translate(${position.x}px, ${position.y}px) scale(${position.scale})`,
              }}
            />
          </div>
        </div>
        <div className="right-panel">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="text">
            <div className="comment">You are viewing:</div>
            <div className="name">{select.name}</div>
            <div className="reference">(New)</div>
          </div>
          <div className="btn outline">View All Selections</div>
          <div className="divider" />
          <div className="btn red">Book Appointment</div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
