import Link from "next/link";

export function Card(props) {
  const playAudio = () => {
    const au= new Audio(
    props.boos?.displayName=="Chamber"?"/chamber-v.mp3":
    props.boos?.displayName=="Gekko"?"/gekko-v.mp3":
    props.boos?.displayName=="Fade"?"/fade-v.mp3":
    props.boos?.displayName=="Breach"?"/breach-v.mp3":
    props.boos?.displayName=="Deadlock"?"/deadlk-v.mp3":
    props.boos?.displayName=="Raze"?"/raze-v.mp3":
    props.boos?.displayName=="KAY/O"?"/kayo-v.mp3":
    props.boos?.displayName=="Skye"?"/skye-v.mp3":
    props.boos?.displayName=="Cypher"?"/cyber-v.mp3":
    props.boos?.displayName=="Sova"?"/sova-v.mp3":
    props.boos?.displayName=="Killjoy"?"/kj-v.mp3":
    props.boos?.displayName=="Harbor"?"/harbor-v.mp3":
    props.boos?.displayName=="Viper"?"/viper-v.mp3":
    props.boos?.displayName=="Phoenix"?"/pheo-v.mp3":
    props.boos?.displayName=="Astra"?"/astra-v.mp3":
    props.boos?.displayName=="Brimstone"?"/brim-v.mp3":
    props.boos?.displayName=="Neon"?"/neon-v.mp3":
    props.boos?.displayName=="Yoru"?"/yoru-v.mp3":
    props.boos?.displayName=="Sage"?"/sage-v.mp3":
    props.boos?.displayName=="Reyna"?"/reyna-v.mp3":
    props.boos?.displayName=="Omen"?"/omen-v.mp3": "/jett-v.mp3");
    au.play()
  };

  return (
    <div div  className="li">
      <div
        className="obj"
        style={{
          backgroundImage: `url(${props.boos?.background})  `,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "700px",
          
        }}
      >
        <div className="relativebolgo">
          <img
            id="ii"
            src={props.boos?.fullPortraitV2}
            className="character"
          />
        </div>
        <div
          onClick={playAudio}
          style={{
            cursor:"pointer",
            backgroundColor: "rgba(0,0,0,0.8)",
            textDecoration: "none",
            color: "white",
            fontFamily: "cabin",
            fontSize: "24px",
            width: "250px",
            display: "flex",
            justifyContent: "center",
            height: "50px",
            alignItems: "center",
            borderRadius: "40px",
          }}
        >
          {props.boos?.displayName} -
          <span
            style={{
              color:
                props.boos?.role?.displayName == "Sentinel"
                  ? "#00FF7F"
                  : props.boos?.role?.displayName == "Duelist"
                  ? "red"
                  : props.boos?.role?.displayName == "Controller"
                  ? "#FFA500"
                  : "#9370DB",
            }}
          >
            ({props.boos?.role?.displayName})
          </span>
        </div>
        <p
          style={{
            color: "black",
            fontFamily: "cabin",
            fontSize: "25px",
            paddingLeft: "25px",
            paddingRight: "25px",
            backgroundColor: "rgba(255,255,255,0.8)",
            width: "300px",
            borderRadius: "15px",
          }}
        >
          {props.boos?.description}
        </p>
        <div>
          <div id="bottom_title">
            <img id="neon" src={props.boos?.displayIconSmall}></img>

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
    </div>
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
