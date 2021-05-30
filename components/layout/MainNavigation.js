import classes from "./MainNavigation.module.css";
import ActiveLink from "../ActiveLink/ActiveLink";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <ActiveLink activeClassName={classes.active} href="/">
              <a>All Meetups</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName={classes.active} href="/new-meetup">
              <a>Add New Meetup</a>
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
