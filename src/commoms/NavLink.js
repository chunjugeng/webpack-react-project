import {Link, Route} from 'react-router-dom';
import './NavLink.scss';


let ItemNav = ( {to, label, onlyExact = false})=> {
    return (
        <Route
            path={to} 
            exact={onlyExact}
            children={
                ({match})=> (
                    <Link to={to} className={match && 'active'}>{label}</Link>
                )
            }
            />
    );
};
class NavLink extends React.Component {
    render() {
        return (
            <div className="nav-link">
                <nav >
                    {this.props.data.map((v, index)=> (
                        <div key={index}>
                        {index===0 ? <ItemNav to={"/"} label={v.nav} onlyExact={true}/> :
                            <ItemNav to={"/" + v.path} label={v.nav}/>
                        }
                        </div>
                    ))}
                </nav>
            </div>
        );
    }
}

export {
    ItemNav,
    NavLink
}