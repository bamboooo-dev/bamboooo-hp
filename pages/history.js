import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import makeStyles from "@mui/styles/makeStyles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  headline: {
    fontFamily: "Corporate-Logo-Medium-ver2",
    borderLeft: "4px solid #76B3AFCF",
    paddingLeft: 20,
    [theme.breakpoints.down("md")]: {
      fontSize: 24,
      border: "none",
      paddingLeft: 15,
    },
  },
  headlineBox: {
    [theme.breakpoints.down("md")]: {
      borderLeft: "3px solid #76B3AF",
      height: 28,
      boxSizing: "border-box",
    },
  },
  innerBox: {
    maxWidth: "1000px",
    margin: "0 auto",
    paddingTop: "25vw",
    [theme.breakpoints.down("md")]: {
      paddingTop: "35vw",
    },
  },
  coverBox: {
    backgroundImage: "url(/history_cover.png)",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      backgroundImage: "url(/history_cover_sp.png)",
    },
  },
  whiteBox: {
    backgroundColor: "white",
    backgroundImage: "url(/history_background.png)",
    boxShadow: "0 3px 5px 0 rgba(0, 0, 0, .1)",
    marginBottom: 30,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 40,
      maxWidth: "90%",
    },
  },
  bambooSection: {
    marginTop: "-15px",
    [theme.breakpoints.down("md")]: {
      marginTop: "-10px",
    },
  },
  bambooImageBox: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 50,
  },
  bambooImage: {
    border: "1px solid #c7c7c7",
    borderRadius: "7px",
    width: "350px",
  },
  bambooImageSP: {
    border: "1px solid #c7c7c7",
    borderRadius: "7px",
    objectFit: "contain",
    width: "200px",
  },
  bambooText: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 20,
    },
  },
  bambooDescription: {
    whiteSpace: "pre-line",
    [theme.breakpoints.down("sm")]: {
      whiteSpace: "normal",
      lineHeight: "1.5rem",
    },
  },
  eventsBox: {
    [theme.breakpoints.down("sm")]: {
      marginTop: 80,
    },
  },
  date: {
    color: "#1D6E69",
    fontSize: 25,
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  description: {
    whiteSpace: "pre-line",
    lineHeight: 1.75,
    [theme.breakpoints.down("md")]: {
      marginTop: 58,
      lineHeight: "25px",
    },
  },
}));

const events = [
  {
    date: "2021年 10月",
    content: "bamboooo ホームページが完成",
  },
  {
    date: "2021年 4月",
    content:
      "「あなたの価値観でみんながワイワイ」をテーマにしたパーティゲーム『ワイワイ』をリリース",
    img: "/waiwai_history.png",
  },
  {
    date: "2020年 9月",
    content:
      "学生エンジニアのアウトプットを展示するテックカンファレンス「技育展」に『memopic』で登壇",
  },
  {
    date: "2020年 9月",
    content:
      "「旅の思い出をプレイリストで振り返ろう」をテーマにした旅行の思い出共有サイト『memopic』をリリース",
    img: "/memopic_history.png",
  },
  {
    date: "2019年 12月",
    content:
      "「旅行のプランを計画して共有しよう」をテーマにした旅行プラン共有サイト『Memorip』をリリース",
    img: "/memorip_history.png",
  },
  {
    date: "2019年 3月",
    content:
      "当時大学3年生の山本と4年生の住江で「bamboo」としてスタート、後にメンバーが4人になり「bamboooo」となる",
  },
];

export default function History() {
  const classes = useStyles();
  const theme = useTheme();
  const isSP = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.coverBox}>
      <Box className={classes.innerBox} display="flex" justifyContent="center">
        <Box p={10} className={classes.whiteBox}>
          <Box className={classes.headlineBox}>
            <Typography variant="h4" className={classes.headline} gutterBottom>
              bamboooo のこれまでとこれから
            </Typography>
          </Box>
          <Typography className={classes.description}>
            {`「みんなを笑顔にする」。
            小さい頃から抱いていた長年の夢を実現させたい、その想いで2019年2人の学生によって bamboooo の活動は始まりました。
            bamboooo という名前には「"伸び代しかない"エンタメクリエイターチームを目指す」という願いが込められています。
            これまでもこれからも、変わらぬ想いで人々を笑顔にできるエンタメを作り続けていきます。`}
          </Typography>
          <Box mt={20} className={classes.eventsBox}>
            {events.map((event, index) =>
              isSP ? (
                <EventSP
                  key={event.content}
                  event={event}
                  zIndex={2 * events.length - 2 * index}
                  index={index}
                />
              ) : (
                <EventPC
                  key={event.content}
                  event={event}
                  zIndex={events.length - index}
                  index={index}
                />
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const EventSP = (props) => {
  const { event, zIndex, index } = props;

  const classes = useStyles();

  return (
    <Grid container>
      {event.img && (
        <>
          <Grid item xs={2}>
            <div
              className={classes.bambooSection}
              style={{ zIndex: zIndex + 1 }}
            >
              {index !== 0 ? (
                <img src="/bamboo_section.png" alt="" width={45} />
              ) : (
                <img src="/bamboo_section_first.png" alt="" width={45} />
              )}
            </div>
          </Grid>
          <Grid
            item
            xs={10}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              alt={event.content}
              src={event.img}
              className={classes.bambooImageSP}
              style={
                event.img == "/waiwai_history.png" ? { border: "none" } : {}
              }
            />
          </Grid>
        </>
      )}
      <Grid item xs={2}>
        <div className={classes.bambooSection} style={{ zIndex: zIndex }}>
          {!event.img && index === 0 ? (
            <img src="/bamboo_section_first.png" alt="" width={45} />
          ) : (
            <img src="/bamboo_section.png" alt="" width={45} />
          )}
        </div>
      </Grid>
      <Grid
        item
        xs={10}
        className={classes.bambooText}
        style={event.img ? { alignItems: "flex-start" } : {}}
      >
        <Box style={{ width: "100%" }}>
          <Typography
            variant="h4"
            className={classes.date}
            style={event.content ? {} : { lineHeight: 1.75 }}
          >
            {event.date}
          </Typography>
          <Typography
            className={classes.bambooDescription}
            style={event.content ? {} : { marginTop: 0 }}
          >
            {event.content}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

const EventPC = (props) => {
  const { event, zIndex, index } = props;

  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={4}>
        <div
          className={classes.bambooSection}
          style={{
            zIndex: zIndex,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {index !== 0 ? (
            <img src="/bamboo_section.png" alt="" width={100} />
          ) : (
            <img src="/bamboo_section_first.png" alt="" width={100} />
          )}
        </div>
      </Grid>
      <Grid item xs={8} className={classes.bambooImageBox}>
        {event.img && (
          <img
            src={event.img}
            className={classes.bambooImage}
            alt={event.content}
            style={
              event.img == "/waiwai.png"
                ? { border: "none", marginBottom: 20 }
                : { marginBottom: 20 }
            }
          />
        )}
        <Box style={{ width: "100%" }}>
          <Typography variant="h4" gutterBottom className={classes.date}>
            {event.date}
          </Typography>
          <Typography className={classes.bambooDescription}>
            {event.content}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
