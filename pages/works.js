import { Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import makeStyles from '@mui/styles/makeStyles';
import React from "react";
import { grey } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
  coverBox: {
    backgroundImage: "url(/works_cover.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down('md')]: {
      backgroundImage: "url(/works_cover_sp.png)",
    },
  },
  innerBox: {
    maxWidth: "1000px",
    margin: "0 auto",
    paddingTop: "25vw",
    [theme.breakpoints.down('md')]: {
      paddingTop: "35vw",
    },
  },
  whiteBox: {
    backgroundColor: "white",
    paddingTop: theme.spacing(12),
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
    boxShadow: "0 3px 5px 0 rgba(0, 0, 0, .1)",
    marginBottom: 30,
    [theme.breakpoints.down(undefined)]: {
      paddingLeft: 40,
      paddingRight: 40,
      paddingTop: 40,
      maxWidth: "90%",
    },
  },
  media: {
    borderWidth: 1,
    border: "solid",
    borderRadius: 5,
    borderColor: grey[300],
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 350,
      display: "flex",
    },
  },
  title: {
    fontSize: "30px",
    fontFamily: "ヒラギノ角ゴシック",
    [theme.breakpoints.down('md')]: {
      fontSize: "20px",
    },
  },
  catchphrase: {
    fontFamily: "ヒラギノ角ゴシック",
    [theme.breakpoints.down('md')]: {
      fontSize: "20px",
    },
  },
  genreIcon: {
    borderRadius: "20px",
    border: "solid 2px",
    width: "80%",
    borderColor: "#19807B",
    padding: "8px",
    fontSize: "14px",
    fontFamily: "ヒラギノ角ゴシック",
    textAlign: "center",
    [theme.breakpoints.down('md')]: {
      padding: "4px",
      margin: "0 auto",
    },
  },
  description: {
    lineHeight: 1.8,
    fontFamily: "ヒラギノ角ゴシック",
  },
}));

const works = [
  {
    title: "ワイワイ",
    catchphrase: "あなたの価値観でみんながワイワイ",
    url: "https://apps.apple.com/jp/app/%E3%83%AF%E3%82%A4%E3%83%AF%E3%82%A4/id1561027910",
    alt: "Picture of waiwai",
    image: "/waiwai_work.png",
    smartphoneimage: "/waiwai.png",
    description: `
      オンラインでオフライン以上にワイワイする。
      「ワイワイ」はおしゃべりしながらオンライン対戦できる心理ゲームで、
      Among Us の次に流行ると巷で噂されてます。
      キャラクター(エモー)もかわいいので、テンションも上がること間違いなし！
      自分の性格、センス、価値観が問われるので仲間内はもちろん、
      初対面の人の事も手っ取り早く知る日ことが出来ます。`,
    release: "リリース　　2021年 4月",
    appleUrl:
      "https://apps.apple.com/jp/app/%E3%83%AF%E3%82%A4%E3%83%AF%E3%82%A4/id1561027910",
    googleUrl:
      "https://play.google.com/store/apps/details?id=com.bamboooo.waiwai",
    genre: "対戦型協力ゲームアプリ",
  },
  {
    title: "memopic",
    catchphrase: "旅の思い出をプレイリストで振り返ろう",
    url: "https://www.memopic.net",
    alt: "Picture of memopic",
    image: "/memopic_work.png",
    smartphoneimage: "/memopic_work.png",
    description: `
      旅行中ドライブで聴いてた曲
      あの時流行っていた、好きだった曲から
      思い出を振り返ってみませんか？
      『memopic』はプレイリストで旅を記録する
      新しいサービスです`,
    release: "リリース　　2020年 9月",
    appleUrl: "https://apps.apple.com/us/app/memopic/id1527852844",
    googleUrl: "https://play.google.com/store/apps/details?id=com.memopic",
    genre: "旅行の思い出共有アプリ",
  },
  {
    title: "Memorip",
    catchphrase: "旅行プラン作成・共有サイト",
    url: "https://memorip.net",
    alt: "Picture of Memorip",
    image: "/memorip_work.png",
    smartphoneimage: "/memorip_work.png",
    description: `
      『Memorip』では直感的にプランを作成したり
      簡単にプランを共有したりすることができます
      これからの旅行のしおりとして、また
      他の人のプランを参考にして作成できます`,
    release: "リリース　　2019年 12月",
    genre: "旅行プラン作成アプリ",
  },
];

function Work(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { work } = props;
  const isSP = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid item xs={12} style={{ marginBottom: 100 }}>
      <Box display="flex" flexDirection={isSP ? "column" : "row"}>
        {work.image ? (
          <Box>
            <img
              className={classes.media}
              src={isSP ? work.smartphoneimage : work.image}
              alt={work.alt}
              style={work.title === "ワイワイ" ? { border: "none" } : {}}
            />
          </Box>
        ) : (
          <Box className={classes.media} height={260} mb={1}>
            <Typography variant="h4">COMING SOON...</Typography>
          </Box>
        )}
        <Box display="flex" flexDirection="column" flex={1} ml={isSP ? 0 : 6}>
          <Grid container style={{ width: "100%" }}>
            <Grid item xs={12} sm={5} style={isSP ? { marginBottom: 6 } : {}}>
              <Typography
                variant="h4"
                style={isSP ? { textAlign: "center" } : {}}
              >
                <a
                  href={work.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#19807B",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                  className={classes.title}
                >
                  {work.title}
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box className={classes.genreIcon}>{work.genre}</Box>
            </Grid>
          </Grid>
          <Box mt={1}>
            <Typography
              className={classes.catchphrase}
              gutterBottom
              style={
                isSP
                  ? {
                      fontWeight: "bold",
                      textAlign: "center",
                    }
                  : { fontWeight: "bold" }
              }
            >
              {work.catchphrase}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              gutterBottom
              className={classes.description}
            >
              {work.description}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="textSecondary" gutterBottom>
              {work.release}
            </Typography>
          </Box>
          {(work.appleUrl || work.googleUrl) && (
            <Box display="flex" alignItems="center">
              {work.appleUrl && (
                <Box>
                  <a href={work.appleUrl} target="_blank" rel="noreferrer">
                    <img src="/app-store-badge.png" alt="App Store Badge" />
                  </a>
                </Box>
              )}
              {work.googleUrl && (
                <Box>
                  <a href={work.googleUrl} target="_blank" rel="noreferrer">
                    <img
                      src="/google-play-badge.png"
                      alt="Google Play Store Badge"
                      height={60}
                    />
                  </a>
                </Box>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </Grid>
  );
}

export default function Works() {
  const classes = useStyles();

  return (
    <Box className={classes.coverBox}>
      <Box className={classes.innerBox} display="flex" justifyContent="center">
        <Grid container className={classes.whiteBox}>
          {works.map((work) => (
            <Work key={work.title} work={work} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
