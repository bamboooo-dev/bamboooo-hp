import ClearIcon from "@mui/icons-material/Clear";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { blue } from "@mui/material/colors";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  mainDiv: {
    zIndex: "1",
    backgroundImage: "url(/member_top.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "url(/member_topSP.png)",
    },
  },
  mainContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
    paddingTop: "25vw",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      paddingTop: "50vw",
    },
  },
  shadowBox: {
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, .3)",
    marginBottom: "100px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px",
    },
  },
  memberContainer: {
    backgroundColor: "white",
    paddingLeft: "100px",
    paddingRight: "100px",
    paddingBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  title: {
    fontSize: "30px",
    fontFamily: "Corporate-Logo-Medium-ver2",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  memberAvatarPosition: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  memberAvatar: {
    width: "auto",
    height: "auto",
    marginLeft: "7px",
  },
  memberList: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "160px",
    [theme.breakpoints.down("sm")]: {
      height: "100px",
    },
  },
  memberPositionBox: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      lineHeight: "16px",
      height: "30px",
      display: "flex",
      alignItems: "center",
    },
  },
  moreButton: {
    border: "1px solid black",
    borderRadius: "20px",
    width: "80%",
    backgroundColor: "white",
    fontSize: "14px",
    textAlign: "center",
    paddingTop: "0px",
    paddingLeft: "23px",
    fontWeight: "100",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "15px",
      width: "100%",
    },
    "&:hover": {
      opacity: "0.5",
      cursor: "pointer",
    },
  },
  moreButtonIcon: {
    float: "right",
    paddingTop: "3px",
    fontSize: "15px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "4px",
      fontSize: "15px",
    },
  },
  dialogSize: {
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      width: "350px",
    },
  },
  dialogAvatar: {
    width: "100px",
    height: "100px",
    marginLeft: "15px",
  },
  dialogMemberList: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100px",
  },
  closeButton: {
    position: "absolute",
    top: "0",
    right: "0",
    borderRadius: "0",
    backgroundColor: "#00837D",
    "&:hover": {
      opacity: "0.8",
      backgroundColor: "#19807B",
    },
  },
  skillContainer: {
    backgroundColor: "#F7FCF3",
    paddingLeft: "100px",
    paddingRight: "100px",
    paddingBottom: "40px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
  },
  skillList: {
    width: "100%",
    height: "150px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  skillIcon: {
    height: "100px",
    [theme.breakpoints.down("sm")]: {
      height: "65px",
    },
  },
  skillIconSmall: {
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "60px",
    },
  },
  skillIconHeroku: {
    height: "100px",
    [theme.breakpoints.down("sm")]: {
      height: "65px",
    },
  },
}));

function Member(props) {
  const { member, index, handleClickOpen } = props;
  const classes = useStyles();

  return (
    <>
      {/*ここにメンバーをmapで全て入れ込みたい*/}
      <Grid item xs={4} container>
        <Grid item sm={5} xs={12} className={classes.memberAvatarPosition}>
          <Avatar
            alt={member.name}
            src={member.avatar}
            className={classes.memberAvatar}
          />
        </Grid>
        <Grid item sm={7} xs={12}>
          <Box className={classes.memberList}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.memberPositionBox}
            >
              {member.position}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              noWrap
              style={{ textAlign: "center" }}
            >
              {member.name}
            </Typography>
            <button
              onClick={() => {
                handleClickOpen(index);
              }}
              className={classes.moreButton}
            >
              more
              <ExpandMoreIcon className={classes.moreButtonIcon} />
            </button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

function RestMember(props) {
  const { member, restindex, restHandleClickOpen } = props;
  const classes = useStyles();

  return (
    <>
      {/*ここにメンバーをmapで全て入れ込みたい*/}
      <Grid item xs={4} container>
        <Grid item sm={5} xs={12} className={classes.memberAvatarPosition}>
          <Avatar
            alt={member.name}
            src={member.avatar}
            className={classes.memberAvatar}
          />
        </Grid>
        <Grid item sm={7} xs={12}>
          <Box className={classes.memberList}>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.memberPositionBox}
            >
              {member.position}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              noWrap
              style={{ textAlign: "center" }}
            >
              {member.name}
            </Typography>
            <button
              onClick={() => {
                restHandleClickOpen(restindex);
              }}
              className={classes.moreButton}
            >
              more
              <ExpandMoreIcon className={classes.moreButtonIcon} />
            </button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

const members = [
  {
    position: "Infrastructure Engineer",
    university: "北海道大学",
    name: "山本 浩平",
    description: "k8s。猫好き。初めての料理は炒り卵。",
    avatar: "/avatar_kohei.png",
    twitter: "https://twitter.com/yamagai_0919",
    github: "https://github.com/yamagai",
    homepage: "http://portfolio-kohei.herokuapp.com/",
    wantedly: "https://www.wantedly.com/id/yamamoto_kohei_b",
    midashi: "悠々自適に暮らしたい",
    ikigomi: `1997年大阪府交野市生まれ四条畷市育ち。
              北海道大学工学部機械知能工学科在学中。1浪1休。
              2022年4月からは某モ◯ストを作っている会社に入社予定。
              開発においては主にインフラ・バックエンドを担当しておりGolang,Kubernetesが好きです。
              パフォーマンスチューニングも好きで、メンバーの住江とはISUCONの10,11に参加してます。
              ここまでの人生を振り返ってみると、人を笑わせることを生きがいに生きてきたのかもしれません。
              bambooooでもそれができるといいな、と考えています。
              趣味は、音楽・バンド・サウナです。
              最近は一人で映画館に行って映画を見るのにハマっています。
              猫を手懐ける選手権に出れば全国ベスト8には入れると思います。`,
    imageColor: "#CACACA",
  },
  {
    position: "Backend Engineer",
    university: "京都大学",
    name: "住江 祐哉",
    description: "パフォーマンス・チューナー。満島ひかりが好き。",
    avatar: "/avatar_yuya.png",
    twitter: "https://twitter.com/monaka_0721",
    github: "https://github.com/MONAKA0721",
    homepage: "https://monaka0721.github.io/portfolio/#/",
    wantedly: "https://www.wantedly.com/id/monaka0721",
    midashi: "全知全能になる",
    ikigomi: `1997年奈良産まれ奈良好き。
              京都大学大学院情報学研究科在学中。
              来年からは toB SaaS 企業に行きます。 
              電脳コイルの世界に憧れプログラミングに興味を持ち始めました。 
              Golang, Ruby, Python などでバックエンドの開発を主に行っていますが、ハッカソン等ではフロントを書くこともしばしばあります。 
              パフォーマンス・チューニングが好きで社会人になってからもその領域で活躍したいと思っています。ISUCON は10・11に参加しました。 
              趣味は旅行とスノボとスマブラ。一生満島ひかりが好き。 
              すべてをバランスよくこなしていきたいです。`,
    imageColor: "#E1C04A",
  },
  {
    position: "Planner",
    university: "早稲田大学",
    avatar: "/avatar_kento.jpg",
    name: "中林 健人",
    description: "京都大学中退。現在早稲田大学在学兼ノマドカフェNOPAY代表。",
    twitter: "https://twitter.com/bayashi0314",
    midashi: "π人間になる",
    ikigomi: `23歳の早稲田大学2年生。
              京都大学中退を経験したことで、一時は人生を諦めかけましたが、その後さまざまな出来事や人との出会いを通し、自分のコンフォートゾーンを乗り越え、「これぞ自分」といえるものを見つけました。
              その経験を活かし、常にbambooooに新しい風を送り込みつつ、大きな幹を作って行きます！`,
    imageColor: "#38FED8",
  },
  {
    position: "Designer",
    name: "松田 まり",
    avatar: "/avatar_mari.png",
    tumblr: "https://i-eveing.tumblr.com/",
    midashi: "昨日より多く気づけたもの勝ち",
    ikigomi: `京都嵯峨美術大学卒。
              健康食品会社でグラフィックデザイナー、アートディレクターとして経験した後、京都のデザイン会社に入社。
              紙、パッケージ、グッズ、動画…なんでもデザインすること、作ることが好き。
              最近はWebデザインを勉強中です！
              妹の彼氏に巻き込まれて、いつの間にかbambooooのメンバーになってました。
              毎日の生活で起こること、他人や自分の行動に何か気づこうとしたり、発見しようとする気持ちを大切にしていきたいです。`,
    imageColor: "#CABFDD",
  },
  {
    position: "Frontend Engineer",
    name: "藤本 源",
    avatar: "avatar_gen.jpg",
    twitter: "",
    midashi: "人生はギャンブル",
    ikigomi: `プログラミングスキルを身に着けたいと思いbambooooに参加。
              完全なる初心者ですが、ノリと勢いとやる気でがんばります。
              ギャンブル好きで、競馬、競艇、ポーカー、麻雀等何でもやります。
              スポーツでは守備が好きですが、ギャンブルのときは基本攻めます。
              自分の人生も賭け金だと思っているので死なない限り面白い方に挑戦していきます。`,
    imageColor: "#181B39",
  },
];

const rest = [
  {
    position: "Frontend Engineer",
    name: "髙木 公太郎",
    avatar: "takoyarou_icon.png",
    twitter: "https://twitter.com/takoyarou_VRC",
    midashi: "我が道を往く",
    ikigomi: `北海道札幌市在住。
            2005年1月10日生まれ。
            プログラミング、最先端の技術が大好物な学生です。運命の糸に引かれてbambooooに入ってきました。
            自分のやりたいことを見失うことがないように、自分に正直な自分でいることをモットーにしています。
            最年少のメンバーだからこそ、人一倍頑張ります。`,
    imageColor: "#9DC9FD",
  },
];

{
  /*
  const obogs = [
  { 
    position: 'Planner',
    university: '京都大学',
    avatar: '/avatar_shunpei.jpg',
    name: '朝田 隼平',
    description: 'ムードメーカー。趣味はカフェ巡り。',
    twitter: 'https://twitter.com/0514AsaShun',
  },
  {
    position: 'Frontend Engineer',
    university: '長崎大学',
    avatar: '/avatar_takaki.png',
    name: '竹内 貴紀',
    description: '一日15時間寝たことがある。',
    twitter: 'https://twitter.com/shrry2',
    github: 'https://github.com/shrry2',
    homepage: 'https://takaki.takeu.ch',
    wantedly: 'https://www.wantedly.com/id/takaki_takeuchi',
  },
  { 
    position: 'Designer',
    university: '関西学院大学',
    avatar: '/avatar_chisa.png',
    name: '近藤 千紗',
    description: 'イーブイ飼いたい。',
    twitter: 'https://twitter.com/5xPsr',
    github: 'https://github.com/chisakondo',
  },
  { 
    position: 'Frontend Engineer',
    university: '同志社大学',
    avatar: '/avatar_kazuki.jpeg',
    name: '小森 一輝',
    description: 'Vue信者。尻に火が付くまで動かない。リンゴと窓のPCを持っている。',
    twitter: 'https://twitter.com/D_kazuyan',
    github: 'https://github.com/kazuki-komori',
    wantedly: 'https://www.wantedly.com/id/D_kazuyan',
  },
  { 
    position: 'Inspirator',
    university: '大阪府立大学',
    name: '三輪 雄基',
    description: 'アウトドアマン。スシローヘビーユーザー。',
    avatar: '/avatar_yuki.jpg',
    twitter: 'https://twitter.com/wamiwa1126',
    instagram: 'https://www.instagram.com/wamiwa1126/',
  },
  {
    position: 'Frontend Engineer',
    name: '北村 拓也',
    avatar: 'kittan_icon.jpg',
    github: 'https://github.com/kittan13',
    midashi: '多趣味な器用貧乏',
    ikigomi: `2002年京都府に生まれ、4度の引っ越しを経験し現在京都府に戻ってきました。
              龍谷大学先端理工学部電子情報通信学科在学中。
              さまざまな環境でさまざまな人と出会い、いろいろな経験、活動を行ってきました。
              その中で将来的に仕事に就きたいなと思ったのがプログラミングでした。
              プログラミングでの活動、実績はまだ全然ですがフロントエンドエンジニアとして少しずつ勉強をしていけたらと思ってます。`,
    imageColor: '#4FDAF9',
  },
]
*/
}

export default function Members() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [openMember, setOpenMember] = useState({});

  const handleClickOpen = (index) => {
    setOpen(true);
    setOpenMember(members[index]);
  };

  const restHandleClickOpen = (restindex) => {
    setOpen(true);
    setOpenMember(rest[restindex]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.mainDiv}>
      <Box className={classes.mainContainer}>
        <Box className={classes.shadowBox}>
          <Box className={classes.memberContainer}>
            <Box pt="50px" pb="30px">
              <Typography className={classes.title}>
                <span style={{ color: "#77C0BD", fontWeight: "900" }}>|</span>{" "}
                Member
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {members.map((member, index) => (
                <Member
                  key={member.name}
                  member={member}
                  index={index}
                  handleClickOpen={handleClickOpen}
                />
              ))}
            </Grid>

            <Box pt="50px" pb="30px">
              <Typography className={classes.title}>
                <span style={{ color: "#77C0BD", fontWeight: "900" }}>|</span>{" "}
                Rest
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {rest.map((member, index) => (
                <RestMember
                  key={member.name}
                  member={member}
                  restindex={index}
                  restHandleClickOpen={restHandleClickOpen}
                />
              ))}
            </Grid>

            {/*以下ダイアログ部分*/}
            <Dialog open={open} onClose={handleClose}>
              <div className={classes.dialogSize}>
                <Box mt="40px">
                  <Grid container>
                    <Grid item xs={4}>
                      <Avatar
                        alt={openMember.name}
                        src={openMember.avatar}
                        className={classes.dialogAvatar}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <Box className={classes.dialogMemberList}>
                        <Typography variant="body1">
                          {openMember.position}
                        </Typography>
                        <Typography variant="h6">{openMember.name}</Typography>

                        <Box display="flex" alignItems="center">
                          {openMember.twitter && (
                            <Box mr={0.5}>
                              <a
                                href={openMember.twitter}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <TwitterIcon style={{ color: blue[300] }} />
                              </a>
                            </Box>
                          )}
                          {openMember.github && (
                            <Box mx={0.5}>
                              <a
                                href={openMember.github}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <GitHubIcon style={{ color: "black" }} />
                              </a>
                            </Box>
                          )}
                          {openMember.homepage && (
                            <Box mx={0.5}>
                              <a
                                href={openMember.homepage}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <HomeIcon style={{ color: "black" }} />
                              </a>
                            </Box>
                          )}
                          {openMember.wantedly && (
                            <Box>
                              <a
                                href={openMember.wantedly}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src="/wantedly_mark.png"
                                  alt="wantedly"
                                  width={30}
                                />
                              </a>
                            </Box>
                          )}
                          {openMember.instagram && (
                            <Box>
                              <a
                                href={openMember.instagram}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <InstagramIcon style={{ color: "black" }} />
                              </a>
                            </Box>
                          )}
                          {openMember.tumblr && (
                            <Box>
                              <a
                                href={openMember.tumblr}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <img
                                  src="tumblr_logo.png"
                                  alt="tumblr"
                                  width={25}
                                />
                              </a>
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </Grid>
                    <Box mt="20px" mb="30px" pl="30px" pr="30px">
                      {/*{openMember.imageColor}を組み込みたいけどなんかできひん*/}
                      <Typography
                        style={{
                          color: "#19807B",
                          fontSize: "23px",
                          fontFamily: "Corporate-Logo-Medium-ver2",
                        }}
                      >
                        {openMember.midashi}
                      </Typography>
                      <Typography
                        variant="body1"
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {openMember.ikigomi}
                      </Typography>
                      {/* メンバーから一言欄いるなら
                      <Typography>メンバーから一言</Typography>
                      <Typography>{openMember.hitokoto}</Typography>*/}
                    </Box>
                  </Grid>
                </Box>
                <Button className={classes.closeButton} onClick={handleClose}>
                  <ClearIcon style={{ color: "white" }} />
                </Button>
              </div>
            </Dialog>
          </Box>

          {/*ここからskill部分*/}
          <Box className={classes.skillContainer}>
            <Box pt="50px" pb="30px">
              <Typography className={classes.title}>
                <span style={{ color: "#77C0BD", fontWeight: "900" }}>|</span>{" "}
                Skill
              </Typography>
            </Box>
            <Box>
              <Grid container>
                {/* 一段目 */}
                <Grid container item sm={5} xs={12}>
                  <Grid item xs={12}>
                    <Typography>Frontend</Typography>
                  </Grid>
                  <Box className={classes.skillList}>
                    <img
                      src="/react.png"
                      alt="react"
                      className={classes.skillIcon}
                    />
                    <img
                      src="/next.png"
                      alt="next"
                      className={classes.skillIcon}
                    />
                    <img
                      src="/vue.png"
                      alt="vue"
                      className={classes.skillIcon}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} />
                <Grid item sm={5} xs={12}>
                  <Grid item xs={12}>
                    <Typography>Backend</Typography>
                  </Grid>
                  <Box className={classes.skillList}>
                    <img
                      src="/rails.svg"
                      alt="rails"
                      className={classes.skillIcon}
                    />
                    <img
                      src="/golang.png"
                      alt="golang"
                      className={classes.skillIcon}
                    />
                  </Box>
                </Grid>

                {/* 二段目 */}
                <Grid container item sm={5} xs={12}>
                  <Grid item xs={12}>
                    <Typography>Middleware</Typography>
                  </Grid>
                  <Box className={classes.skillList}>
                    <img
                      src="/mysql.png"
                      alt="mysql"
                      className={classes.skillIcon}
                    />
                    <img
                      src="/nginx.png"
                      alt="nginx"
                      className={classes.skillIcon}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} />
                <Grid item sm={5} xs={12}>
                  <Grid item xs={12}>
                    <Typography>Infrastructure</Typography>
                  </Grid>
                  <Box className={classes.skillList}>
                    <img
                      src="/kubernetes.png"
                      alt="kubernetes"
                      className={classes.skillIcon}
                    />
                  </Box>
                </Grid>

                {/* 三段目 */}
                <Grid container item sm={5} xs={12}>
                  <Grid item xs={12}>
                    <Typography>Game Engine</Typography>
                  </Grid>
                  <Box className={classes.skillList}>
                    <img
                      src="/unity.png"
                      alt="unity"
                      className={classes.skillIcon}
                    />
                  </Box>
                </Grid>
                <Grid item sm={2} />
                <Grid item sm={5} xs={12}>
                  <Grid item xs={12}>
                    <Typography>Others</Typography>
                  </Grid>
                  <Box className={classes.skillList}>
                    <img
                      src="/heroku.png"
                      alt="heroku"
                      className={classes.skillIcon}
                    />
                    <img
                      src="/oci.png"
                      alt="oci"
                      className={classes.skillIconSmall}
                    />
                    <img
                      src="/time4vps.png"
                      alt="time4vps"
                      className={classes.skillIconSmall}
                    />
                  </Box>
                </Grid>

                {/* 四段目 */}
                <Grid container item sm={6} xs={12}>
                  <Grid item xs={12}>
                    <Typography>Communications</Typography>
                  </Grid>
                  <Box className={classes.skillList}>
                    <img
                      src="/slack.png"
                      alt="slack"
                      className={classes.skillIcon}
                    />
                    <img
                      src="/notion.png"
                      alt="notion"
                      className={classes.skillIconSmall}
                    />
                    <img
                      src="/growi.png"
                      alt="growi"
                      className={classes.skillIconSmall}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
