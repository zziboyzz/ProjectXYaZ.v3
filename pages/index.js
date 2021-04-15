import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";

const useStyles = makeStyles({
  index_content: {
    height: "100%",
    borderLeft: "2px solid lightgray",
    borderRadius: 2,
    marginTop: 2,
    // padding: 5,
    // backgroundColor: "#238fff",
  }
})
export default function Home({color}) {
  const classes = useStyles();
  return (
    <div style={{top: 0, left: 0,
      backgroundImage: "url(/anh_nen.jpg)",backgroundSize: "cover",
      }}>
      <Grid container>
        
        <Grid item xs={12} className="resize_mobile" ></Grid>
        <Grid item xs={1} style={{}}></Grid>
        
        <Grid item container xs={12} sm={11} md={11} lg={11}>
        
          <Grid item xs={12} style={{
           color: color.mainColor,
          textAlign: "center"}}>
          </Grid>
          <Grid item container xs={12} sm={12} md={9} lg={9} style={{ }}>
            <Grid item xs={12} >
                <Paper square elevation={5} className={classes.index_content} >
                    <Grid container >
                        <Grid item xs={12}  style={{textAlign: "center",
                        
                         fontFamily: "Arial",
                         fontSize: 13}}>
                            <Paper style={{backgroundColor: color.mainColor, color: "white"}}>
                              <b>Trang chủ</b>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} style={{minHeight: 40}}></Grid>
                        <Grid item container xs={12} >
                      
                          <Grid item xs={12} style={{textAlign: "center", fontFamily: "Arial", fontSize: 13}}>
                              <Paper square elevation={5} style={{minHeight: 300,
                               backgroundColor: "white", textAlign: "left",
                              borderBottom: "2px solid " + color.secondColor
                               }}>
                                <u><b>Thong bao</b></u>
                               </Paper>
                          </Grid>
                         
                        </Grid>
                        <Grid item xs={12} style={{minHeight: 230, backgroundColor: "white"}}>
                        </Grid>
                      </Grid>                    
                </Paper>
            </Grid>
            
        </Grid>
        
    </Grid>
    <Grid item xs={12} style={{minHeight: 14,}}></Grid>
    </Grid>
    </div>
    
  )
}
