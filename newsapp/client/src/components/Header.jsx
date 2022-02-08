import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';


const useStyles = makeStyles({
    header: {
        background:'#fff',
        height:70
    },
    logo: {
        height: 45,
        margin: 'auto'
    },
    menu: {
        color: 'black',
    }
})


const Header = () => {
    const classes = useStyles();
    const url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Microsoft_News_logo.svg/1280px-Microsoft_News_logo.svg.png';




    return(
        <AppBar className={classes.header}>
            <Toolbar>
                <Menu className={classes.menu}/>
                <img src={url} alt="logo" className={classes.logo} />
            </Toolbar>
        </AppBar>
    )
}


export default Header;