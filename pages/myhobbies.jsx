// module
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
// images
import InstagramPage from "../public/MyHobbies/instagram-page.jpeg";
import SteamPage from "../public/MyHobbies/steam-page.jpeg";
import NarakaRank from "../public/MyHobbies/naraka-rank.jpg";
// components
import Layout from "../components/layout";
import { Divider } from "@mui/material";
// styled components
import { BlackTitle } from "../components/styled-component/Title";

export default function MyHobbies() {
  return (
    <Layout>
      <div id="my-hobbies-dancer-container" className="text-center">
        <BlackTitle>I AM A DANCER!</BlackTitle>
        <div className="text-left" style={{ paddingInline: "10vw" }}>
          <span>
            I had been dancing in Popping dance since September 2016. In June
            2022, I moved to Melbourne Australia and started developing the
            other styles such like House dance, Hip-hop dance, Waving dance,
            Comtemporary...etc. Dancing is one of my favorite thing in my life.
            While keep engaging in dancing community, I met many of brilliant
            people from different backgrounds, countries, races and religions.
          </span>
          <br />
          <br />
          <span>
            Also, I had honoured to be invited as Popping dance instructor in
            RMIT "Funkdelics" Dancing club in 2022 and 2023. Although they were
            beginner level class, getting in touch with the new generations
            really brought me many joys and happinesses!
          </span>
        </div>
        <br />
        <br />
        <Image
          src={InstagramPage}
          className="w-100"
          style={{ maxWidth: 450 }}
        />
      </div>
      <Divider
        style={{
          width: "90%",
          marginInline: "auto",
          marginBlock: 10,
        }}
      />
      <div id="my-hobbies-gamer-container" className="text-center">
        <BlackTitle>Gamer!?</BlackTitle>
        <div className="text-left" style={{ paddingInline: "10vw" }}>
          <span>
            It is always destress, relax and satisfying to play games! This is
            my another favorite thing! I enjoy the feeling to challenge myself
            in the game and collaborate with my mates to achieve our goals!
          </span>
          <br />
          <br />
          <span>
            My favorite games: APEX, Rainbow 6, Naraka, Farlight 84, Genshin,
            WoLong, Elder Ring
          </span>
        </div>
        <br />
        <br />
        <Carousel>
          <Image src={SteamPage} className="w-100" style={{ maxWidth: 450 }} />
          <Image src={NarakaRank} className="w-100" style={{ maxWidth: 450 }} />
        </Carousel>
      </div>
    </Layout>
  );
}
