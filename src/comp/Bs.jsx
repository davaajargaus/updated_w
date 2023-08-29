import Link from "next/link";

export function Card(props) {
  console.log(props);
  return (
    <Link href="/">
      <div className="obj">
        <div className="relativebolgo">
          <img
            id="image"
            src={props.boos?.background}
            className="character-img"
          />
          <img
            id="image"
            src={props.boos?.fullPortraitV2}
            className="character"
          />
        </div>
        <h1
          style={{
            color: "black",
            fontFamily: "cabin",
            fontSize: "24px",
            paddingLeft: "20px",
          }}
        >
          {props.boos?.title}
        </h1>
        <p
          style={{
            color: "black",
            fontFamily: "cabin",
            fontSize: "16px",
            paddingLeft: "25px",
            paddingRight: "25px",
          }}
        >
          {props.boos?.about}
        </p>
        <div>
          <div id="bottom_title">
            <img id="neon" src={props.boos?.img2}></img>

            <h1
              id="w"
              style={{
                fontFamily: "cabin",
                fontSize: "16px",
              }}
            >
              {props.boos?.labout}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
export function Header() {
  return (
    <div className="first_container">
      <a href="/">
        <img className="title" src="valorant logo.png"></img>
      </a>
      <div className="buttons">
        <a href="/controller" id="cont">
          Controller
        </a>
        <a href="/initiator" className="title_button">
          Initiator
        </a>
        <a href="/initiator" className="title_button">
          Sentinel
        </a>
        <a href="/duelist" className="title_button">
          Duelist
        </a>
        <a href="/role" id="info">
          ROLE
        </a>
      </div>
    </div>
  );
}
export function Mid() {
  return (
    <>
      <div className="second_container">
        All AGENTS Story
        <div id="ug">Our latest updates and blogs about managing your team</div>
      </div>
    </>
  );
}
